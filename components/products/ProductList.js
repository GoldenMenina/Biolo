import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Loader from '../common/Loader';
import { Form, Row, Col } from 'react-bootstrap'; // Import Form, Row, Col

const ITEMS_PER_PAGE = 10; // Define how many items per page

// Debounce function to limit API calls on search input
const debounce = (func, delay) => {
  let timeout;
  return function(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};

export default function ProductList({ onEdit, onProductSavedOrDeleted }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
const [searchTerm, setSearchTerm] = useState('');
const [selectedCategory, setSelectedCategory] = useState(''); // New state for category filter
const [categories, setCategories] = useState([]); // New state for unique categories
const [filterActivo, setFilterActivo] = useState('all'); // New state for activo filter

  const fetchProdutos = useCallback(async () => {
    setLoading(true);
    setError(null);

    const from = (currentPage - 1) * ITEMS_PER_PAGE;
    const to = from + ITEMS_PER_PAGE - 1;

    let query = supabase
      .from('produtos')
      .select(`
        produto_id,
        nome,
        preco,
        categoria,
        image,
        tipo_corte,
        quantidade_estoque,
        activo
      `, { count: 'exact' });

    if (searchTerm) {
      query = query.or(`nome.ilike.%${searchTerm}%,categoria.ilike.%${searchTerm}%`);
    }

    if (selectedCategory) {
      query = query.eq('categoria', selectedCategory);
    }

    if (filterActivo !== 'all') {
      query = query.eq('activo', filterActivo === 'true');
    }

    const { data, error, count } = await query
      .order('produto_id', { ascending: false }) // Changed to descending
      .range(from, to);

    if (error) {
      console.error('Erro ao buscar produtos:', error);
      setError('Erro ao carregar produtos.');
    } else {
      setProdutos(data);
      setTotalCount(count);
    }
    setLoading(false);
  }, [currentPage, searchTerm, selectedCategory, filterActivo]); // Added filterActivo to dependencies

  const fetchCategories = useCallback(async () => {
    const { data, error } = await supabase
      .from('produtos')
      .select('categoria', { distinct: true }) // Corrected distinct usage
      .not('categoria', 'is', null); // Still filter out null categories

    if (error) {
      console.error('Erro ao buscar categorias:', error);
    } else {
      // Ensure categories are unique and sorted, and add an empty option
      const uniqueCategories = [...new Set(data.map(item => item.categoria))].sort();
      setCategories(['', ...uniqueCategories]);
    }
  }, []);

  async function handleDelete(produto_id) {
    if (!window.confirm('Tem certeza que deseja excluir este produto?')) {
      return;
    }
    setLoading(true);
    const { error } = await supabase
      .from('produtos')
      .delete()
      .eq('produto_id', produto_id);

    if (error) {
      console.error('Erro ao excluir produto:', error);
      setError('Erro ao excluir produto.');
    } else {
      console.log('Produto excluído com sucesso:', produto_id);
      if (produtos.length === 1 && currentPage > 1) {
        setCurrentPage(prev => prev - 1);
      } else {
        fetchProdutos();
      }
      onProductSavedOrDeleted();
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProdutos();
  }, [fetchProdutos, onProductSavedOrDeleted]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearchTerm(value);
      setCurrentPage(1);
    }, 300),
    []
  );

  const handleSearchChange = (e) => {
    debouncedSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCurrentPage(1); // Reset to first page on new category filter
  };

  const handleActivoFilterChange = (e) => {
    setFilterActivo(e.target.value);
    setCurrentPage(1); // Reset to first page on new activo filter
  };

  return (
    <div className="table-responsive">
      <Row className="mb-3 align-items-end">
        <Col md={4}>
          <Form.Group>
            <Form.Label className="fw-medium">Pesquisar Produto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome ou Categoria..."
              onChange={handleSearchChange}
              value={searchTerm}
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label className="fw-medium">Filtrar por Categoria</Form.Label>
            <Form.Select
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Todas as Categorias</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label className="fw-medium">Filtrar por Status</Form.Label>
            <Form.Select
              value={filterActivo}
              onChange={handleActivoFilterChange}
            >
              <option value="all">Todos</option>
              <option value="true">Ativos</option>
              <option value="false">Inativos</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col className="text-end">
          <p className="mb-0 fw-medium">Total de Produtos: {totalCount}</p>
        </Col>
      </Row>

      {loading ? (
        <Loader />
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : produtos.length === 0 && totalCount === 0 && !searchTerm && !selectedCategory ? (
        <div className="alert alert-info">Nenhum produto encontrado.</div>
      ) : produtos.length === 0 && (searchTerm || selectedCategory) ? (
        <div className="alert alert-info">Nenhum produto encontrado para os filtros aplicados.</div>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Tipo de Corte</th>
                <th>Estoque</th>
                <th>Ativo</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map(produto => (
                <tr key={produto.produto_id}>
                  <td>{produto.produto_id}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.preco ? `Kz ${parseFloat(produto.preco).toFixed(2)}` : 'N/A'}</td>
                  <td>{produto.categoria || 'N/A'}</td>
                  <td>{produto.tipo_corte || 'N/A'}</td>
                  <td>{produto.quantidade_estoque}</td>
                  <td>{produto.activo ? 'Sim' : 'Não'}</td>
                  <td>
                    <div className="btn-group">
                      <button 
                        className="btn btn-sm btn-primary"
                        onClick={() => onEdit(produto)}
                      >
                        Editar
                      </button>
                      <button 
                        className="btn btn-sm btn-danger ms-1"
                        onClick={() => handleDelete(produto.produto_id)}
                      >
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {totalPages > 1 && (
            <nav aria-label="Product pagination">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Anterior
                  </button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <button 
                      className="page-link" 
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Próximo
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
    </div>
  );
}
