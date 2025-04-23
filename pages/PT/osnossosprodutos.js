import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import NumberFormat from "react-number-format";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const predefinedCategories = ["Bovinos", "Suínos", "Aves", "Caprinos", "Caixas"];

export default function Produtos() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState(null);
  const [isProcessingOrder, setIsProcessingOrder] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    carregarProdutos();
  }, []);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  async function carregarProdutos() {
    const { data, error } = await supabase.from('produtos').select('*').eq('activo', true);
    if (error) console.error('Erro ao carregar produtos:', error);
    else setProdutos(data);
  }

  const filteredProdutos = produtos
    .filter(produto => 
      (!selectedCategoria || produto.categoria === selectedCategoria) &&
      (produto.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
       produto.categoria.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategoria]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProdutos.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProdutos.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  const addToCart = (product) => {
    const updatedCart = [...cartItems];
    const existingItemIndex = updatedCart.findIndex(item => item.produto_id === product.produto_id);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.produto_id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return removeFromCart(productId);

    const updatedCart = cartItems.map(item => 
      item.produto_id === productId ? { ...item, quantity: newQuantity } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const processOrder = async () => {
    if (cartItems.length === 0) {
      alert('Carrinho está vazio');
      return;
    }

    setIsProcessingOrder(true);

    try {
      // Calculate total order value
      const valorTotal = cartItems.reduce((total, item) => 
        total + (item.preco * item.quantity), 0);

      // Insert order (venda) to database
      const { data: vendaData, error: vendaError } = await supabase
        .from('vendas')
        .insert({
          valor_total: valorTotal,
          // cliente_id: user?.id // Uncomment when user authentication is implemented
        })
        .select();

      if (vendaError) throw vendaError;

      const venda_id = vendaData[0].venda_id;

      // Insert order details (detalhes_venda)
      const detalhesVenda = cartItems.map(item => ({
        venda_id: venda_id,
        produto_id: item.produto_id,
        quantidade: item.quantity,
        preco_unitario: item.preco,
        total_linha: item.preco * item.quantity
      }));

      const { error: detalhesError } = await supabase
        .from('detalhes_venda')
        .insert(detalhesVenda);

      if (detalhesError) throw detalhesError;

      // Update product stock quantities
      for (const item of cartItems) {
        const { error: updateError } = await supabase
          .from('produtos')
          .update({ 
            quantidade_estoque: item.quantidade_estoque - item.quantity 
          })
          .eq('produto_id', item.produto_id);
          
        if (updateError) console.error('Erro ao atualizar estoque:', updateError);
      }

      // Clear cart after successful order
      setCartItems([]);
      localStorage.removeItem('cartItems');
      
      alert('Pedido processado com sucesso!');
    } catch (error) {
      console.error('Erro ao processar pedido:', error);
      alert('Erro ao processar pedido. Por favor, tente novamente.');
    } finally {
      setIsProcessingOrder(false);
    }
  };

  const cartTotal = cartItems.reduce((total, item) => 
    total + (item.preco * item.quantity), 0);
    
  const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <>
      <section
        className="page-title"
        style={{
          backgroundImage: 'url(/assets/images/background/page-title.jpg)'
        }}
      >
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box">
              <h1><span>Nossos Produtos</span></h1>
            </div>
            <ul className="bread-crumb clearfix">
              <li>Giannu Carnes</li>
              <li>Qualidade e Distinção</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="shop-page-section sec-pad">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
              <div className="sidebar shop-sidebar">
                <div className="sidebar-widget category-widget">
                  <div className="widget-title">
                    <h3>Categorias</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="category-list clearfix">
                      <li>
                        <i className="flaticon-right"></i>
                        <a 
                          className="item"
                          href="#categoria"
                          onClick={() => setSelectedCategoria(null)}
                        >
                          Todas
                        </a>
                      </li>
                      {predefinedCategories.map((categoria, index) => (
                        <li key={index}>
                          <i className="flaticon-right"></i>
                          <a
                            className="item"
                            href="#categoria"
                            onClick={() => setSelectedCategoria(categoria)}
                          >
                            {categoria}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="sidebar-widget search-widget">
                  <div className="widget-title">
                    <h3>Pesquisar Produtos</h3>
                  </div>
                  <div className="search-form">
                    <input 
                      type="text" 
                      placeholder="Pesquisar..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <i className="fas fa-search"></i>
                  </div>
                </div>

              
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
              <div className="our-shop">
                <div className="row clearfix">
                  {currentItems.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 shop-block">
                      <div className="shop-block-one">
                        <div className="inner-box">
                          <figure className="image-box">
                            <img src={item.image} alt={item.nome} />
                          </figure>
                          <div className="lower-content">
                            <h6>
                              <a href="#" style={{ fontSize: '15px' }}>
                                {item.nome}
                              </a>
                            </h6>
                            <div>
                              <span>{item.categoria}</span>
                            </div>
                            <div className="price-box">
                              <span className="price">
                                <NumberFormat
                                  value={item.preco}
                                  displayType={"text"}
                                  thousandSeparator=" "
                                  decimalSeparator=","
                                  allowNegative={false}
                                  suffix={" kz"}
                                  fixedDecimalScale={true}
                                />
                              </span>
                              <div className="stock-info">
                                {item.quantidade_estoque > 0 ? (
                                  <span className="in-stock">Em estoque: {item.quantidade_estoque}</span>
                                ) : (
                                  <span className="out-of-stock">Fora de estoque</span>
                                )}
                              </div>
                            </div>
                            <button 
                              className="btn btn-success btn-sm add-to-cart-btn"
                              onClick={() => addToCart(item)}
                              disabled={item.quantidade_estoque <= 0}
                            >
                              Adicionar <i className="fas fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {totalPages > 1 && (
                  <div className="pagination-wrapper text-center mt-4">
                    <ul className="pagination justify-content-center">
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button 
                          className="page-link" 
                          onClick={() => paginate(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          Anterior
                        </button>
                      </li>
                      {[...Array(totalPages)].map((_, i) => (
                        <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                          <button 
                            className="page-link" 
                            onClick={() => paginate(i + 1)}
                          >
                            {i + 1}
                          </button>
                        </li>
                      ))}
                      <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                        <button 
                          className="page-link" 
                          onClick={() => paginate(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Próximo
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
