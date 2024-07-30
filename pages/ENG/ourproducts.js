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

  useEffect(() => {
    carregarProdutos();
  }, []);
  useEffect(() => {
  const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  setCartItems(savedCartItems);
}, []);

  async function carregarProdutos() {
    const { data, error } = await supabase.from('produtos').select('*');
    if (error) console.error('Erro ao carregar produtos:', error);
    else setProdutos(data);
  }

  const filteredProdutos = produtos
  .filter(produto => 
    (!selectedCategoria || produto.categoria === selectedCategoria) &&
    (produto.corte.toLowerCase().includes(searchTerm.toLowerCase()) ||
     produto.categoria.toLowerCase().includes(searchTerm.toLowerCase()))
  );
    
const addToCart = (product) => {
  const updatedCart = [...cartItems];
  const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);

  if (existingItemIndex !== -1) {
    updatedCart[existingItemIndex].quantity += 1;
  } else {
    updatedCart.push({ ...product, quantity: 1 });
  }

  setCartItems(updatedCart);
  localStorage.setItem('cartItems', JSON.stringify(updatedCart));
};
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
              <h1><span>Our Products</span></h1>
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
                    <h3>Categories</h3>
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
    <h3>Search Products</h3>
  </div>
  <div className="search-form">
    <input 
      type="text" 
      placeholder="Search..." 
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button type="submit"><i className="fas fa-search"></i></button>
  </div>
</div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
              <div className="our-shop">
                <div className="row clearfix">
                  {filteredProdutos.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 shop-block">
                      <div className="shop-block-one">
                        <div className="inner-box">
                          <figure className="image-box">
                            <img src={item.image} alt={item.corte} />
                          </figure>
                          <div className="lower-content">
                            <h6>
                              <a href="#" style={{ fontSize: '15px' }}>
                                {item.corte}
                              </a>
                            </h6>
                            <div>
                              <span>{item.categoria}</span>
                            </div>
                            <span >
                            <NumberFormat
                      value={item.preco}
                      displayType={"text"}
                      thousandSeparator={true}
                      className="price"
                      thousandSeparator=" "
                      decimalSeparator=","
                      allowNegative={false}
                      suffix={" kz"}
                      
                      decimalScale={2}
                      fixedDecimalScale={true}
                    /></span>
                            
                            
                            <span>
                         <button 
  className="btn btn-success btn-sm add-to-cart-btn"
  onClick={() => addToCart(item)}
>
  Adicionar <i className="fas fa-plus"></i>
</button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}