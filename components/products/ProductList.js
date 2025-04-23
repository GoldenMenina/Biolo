import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Loader from '../common/Loader';

export default function ProductList({ onEdit,onManagePrices  }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchProdutos() {
    setLoading(true);
    const { data, error } = await supabase
      .from('Produto')
      .select(`
        id,
        designacao,
        imagem,
        data_de_inicio_de_comercializacao,
        gama_comercial: gama_comercial_id(designacao),
        existencia: existencia_id(designacao, unidade),
        status: status_do_produto_id(designacao)
      `);

    if (error) console.error('Erro ao buscar produtos:', error);
    else setProdutos(data);

    setLoading(false);
  }

  useEffect(() => {
    fetchProdutos();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Designação</th>
            <th>Gama Comercial</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(produto => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.designacao}</td>
              <td>{produto.gama_comercial}</td>
              <td>{produto.status}</td>
              <td>
                <div className="btn-group">
                  <button 
                    className="btn btn-sm btn-primary"
                    onClick={() => onEdit(produto)}
                  >
                    Editar
                  </button>
                  <button 
                    className="btn btn-sm btn-info ms-1"
                    onClick={() => onManagePrices(produto.id)}
                  >
                    Preços
                  </button>
                  <button 
                    className="btn btn-sm btn-danger ms-1"
                    onClick={() => handleDelete(produto.id)}
                  >
                    Excluir
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
