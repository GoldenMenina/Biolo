import Link from "next/link";
import Script from 'next/script';

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import AdditionalCommentsModal from '../AdditionalCommentsModal';

import Modal from '../Modal';
import NumberFormat from "react-number-format";

export default function Layout({ children }) {
  const router = useRouter();
  const [usuario, setUsuario] = useState(null);
  const [lang, setLang] = useState('');
  const [additionalComments, setAdditionalComments] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const closeModal = () => setIsModalOpen(false);
  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true)
  };


  var totalPrice = cartItems.reduce((total, item) => total + item.preco * item.quantity, 0);

  const languageChange = () => {
    const newLang = lang === 'en' ? 'pt' : 'en';
    localStorage.setItem('lang', newLang);
    setLang(newLang);
    router.push(newLang === 'en' ? '/ENG' : '/');
  };

  const loadCartItems = () => {
 
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  

    if(savedCartItems.length === cartItems.length){
      
      return false
    }
    totalPrice = savedCartItems.reduce((total, item) => total + item.preco * item.quantity, 0);
    setCartItems(savedCartItems);
  };
  useEffect(() => {
    const storedLang = localStorage.getItem('lang') || 'pt';
    setLang(storedLang);



    loadCartItems();
  }, [router.asPath]);



  useEffect(() => {
    // Initial load
    loadCartItems();

    // Set up an interval to load cart items every second
    const intervalId = setInterval(loadCartItems, 900);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);  



  return (
    <div className="boxed_wrapper ltr">
  
      <div className="preloader"></div>

      <div className="xs-sidebar-group info-group info-sidebar">
        <div className="xs-overlay xs-bg-black"></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a href="#" className="close-side-widget">X</a>
           

            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                    <div className="content-inner">
                      <div className="logo text-center">
                        <a href="index.html">
                          <img
                            src="/assets/images/giannulogo.png"
                            style={{height: "160px", width: "auto"}}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="content-box">
                        <h3 style={{color:'black', marginBottom: "20px"}}>
                          Carrinho <i className="flaticon-shopping-cart-1"></i>
                        </h3>
                        <div style={{marginTop: "10px"}}>
                          {cartItems.map((item, index) => (
                            <div key={item.id}>
                            <li   style={{ marginBottom: "10px", position: "relative" }}>
                              <span style={{marginRight: "5px"}}>
                                {item.corte} ({item.categoria})
                              </span>
                              <br />
                              <span style={{marginRight: "3px"}} >
                                <NumberFormat
                      value={item.preco}
                      displayType={"text"}
                      thousandSeparator=" "
                      allowNegative={false}
                      suffix={" kz"}
                      
                      fixedDecimalScale={true}
                    />
                              </span>

                              <strong> X {item.quantity}</strong>
                              <br/>
                              <button
      className="btn btn-sm btn-light add-btn debug-button"


      data-id={item.id}
    >
      <i className="fa fa-plus"></i>
    </button>
    <button
    data-id={item.id}
      className="btn btn-sm btn-light minus-btn debug-button"
      style={{
        fontSize: "0.675rem",
        lineHeight: 1.3,
        marginLeft: "5px",
        backgroundColor: "#f0f0f0",
        position: "relative",
        zIndex: 10
      }}
 
    >
      <i className="fa fa-minus"></i>
    </button>
    <button
    data-id={item.id}
    className="btn btn-sm btn-light deletebtn debug-button pull-right"  
    >
      <i className="fa fa-times"></i>
    </button>
                            </li>
                            <hr/>
                            </div>
                          ))}
                          <div >
                            <span style={{color: "#000"}}>
                              <strong>
                                Total: <span style={{color: "#000"}}>         <NumberFormat
                      value={totalPrice}
                      displayType={"text"}
                      thousandSeparator=" "
                      allowNegative={false}
                      suffix={" kz"}
                      
                      fixedDecimalScale={true}
                    /></span>
                              </strong>
                            </span>
                   <hr/>
                          </div>
                          <div style={{marginTop: "15px"}}>
                            <button
                            id="fazercompra"
                            data-id={totalPrice}
                              className="btn btn-success"
                            >
                              Finalizar <i className="fa fa-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {(router.pathname === "/" || router.pathname === "/ENG") && router.pathname != "/admin/dashboard" && ( <header className="main-header style-two">
        <div className="header-top">
          <div className="auto-container clearfix">
            <div className="top-left pull-left clearfix">
              <div className="left-info pull-left clearfix">
                <div className="language">
                  <div className="lang-btn">
                    <span className="icon flaticon-location"></span>
                    <span className="txt">{lang == 'en'?'English': 'português'} </span>
                    <span className="arrow fa fa-angle-down"></span>
                  </div>
                  <div className="lang-dropdown">
                    <ul>
                      <li><a onClick={()=>
                        {languageChange()
                      }} href="#index.html">{lang == 'pt'?'English': 'português'}</a></li>
                    </ul>
                  </div>
                </div>
                <ul className="social-links clearfix">
                  <li>
                    <a target="_blank" href="https://www.facebook.com/p/Giannu-Carnes-100063959979427/7"
                      ><i className="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.instagram.com/giannucarnes/"><i className="fab fa-instagram"></i></a>
                  </li>
                </ul>
              </div>
              <div className="logo-box">
                <figure className="logo">
                  <a href="index.html"
                    ><img
                      src="assets/images/giannulogo.png"
                      style={{height: "90px", width: "auto"}}
                      alt=""
                  /></a>
                </figure>
              </div>
            </div>
            <div className="top-right pull-right">
              <ul className="menu-right-content pull-left clearfix">
                <li className="user-box">
                  <a href="#index.html"
                    ><i className="flaticon-user-symbol-of-thin-outline"></i
                  ></a>
                </li>
                <li className="search-box-outer">
                  <div className="dropdown">
                    <button
                      className="search-box-btn"
                      type="button"
                      id="dropdownMenu3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="flaticon-search"></span>
                    </button>
                    <ul
                      className="dropdown-menu pull-right search-panel"
                      aria-labelledby="dropdownMenu3"
                    >
                      <li className="panel-outer">
                        <div className="form-container">
                          <form method="post" action="blog.html">
                            <div className="form-group">
                              <input
                                type="search"
                                name="field-name"
                                placeholder="Pesquisar...."
                                required=""
                              />
                              <button type="submit" className="search-btn">
                                <span className="fas fa-search"></span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="cart-box">
                  <a href="#shop-1.html" className="navSidebar-button"
                    ><i className="flaticon-shopping-cart-1"></i><span x-text="cart.length">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span></a
                  >
                </li>
               
              </ul>
            </div>
          </div>
        </div>
        <div className="header-upper">
          <div className="auto-container">
            <div className="outer-box clearfix">
              <div className="menu-area">
              
                <div className="mobile-nav-toggler">
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                     <li>

    
            <a href={lang == 'en' ? '/ENG/ourcompany' : '/PT/aempresa'}>{lang === 'en' ? 'About Us' : 'Sobre nós'}</a>
         
        </li>
  <li>
            <a href={lang === 'en' ? '/ENG/services' : '/PT/osnossosservicos'}>{lang === 'en' ? 'Services' : 'Serviços'}</a>
         
        </li>

        <li>
 
            <a href={lang === 'en' ? '/ENG/ourproducts' : '/PT/osnossosprodutos'}>{lang === 'en' ? 'Products' : 'Produtos'}</a>
         
        </li>

        <li>
        
            <a href={lang === 'en' ? '/ENG/contactus' : '/PT/contacte-nos'}>{lang === 'en' ? 'Contact Us' : 'Contacte-nos'}</a>
          
        </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box clearfix">
              <figure className="logo-box pull-left">
                <a href="#index.html"
                  ><img
                    src="assets/images/giannulogo.png"
                    style={{height: "70px", width: "auto"}}
                    alt=""
                /></a>
              </figure>
              <div className="menu-area pull-right">
                <nav className="main-menu clearfix">
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
     )}
     
     
   {router.pathname != "/" && router.pathname != "/ENG" && router.pathname != "/admin/dashboard" &&(<header className="main-header">
        <div className="header-top">
          <div className="auto-container">
            <div className="top-info">
              <ul className="info-list clearfix">
                <li>
                  <i className="flaticon-location-pin"></i>
                  Avendida Pedro de castro Van-Dúnem Loy, Talatona
                </li>
                <li>
                  <i className="flaticon-envelope"></i>
                  <a href="mailto:clientes.particulares@giannu.co.ao"
                    >clientes.particulares@giannu.co.ao</a
                  >
                </li>
                <li className="phone">
                  <i className="flaticon-dial"></i>
                  <a href="tel:244931781843">+244 931 781 843 {lang}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-upper">
          <div className="auto-container">
            <div className="outer-box clearfix">
              <div className="logo-box">
                <figure className="logo">
                
                  <a href="/"
                    ><img
                      src="/assets/images/giannulogo.png"
                      alt=""
                      style={{height: "80px", width: "auto"}}
                    />
                  </a>
                </figure>
              </div>
              <div className="menu-area pull-right">
                
                <div className="mobile-nav-toggler">
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li>

     
            <a href={lang === 'en' ? '/ENG/ourcompany' : '/PT/aempresa'}>{lang === 'en' ? 'About Us' : 'Sobre nós'}</a>
      
        </li>

        <li>
  
            <a href={lang === 'en' ? '/ENG/services' : '/PT/osnossosservicos'}>{lang === 'en' ? 'Services' : 'Serviços'}</a>
         
        </li>

        <li>
       
            <a href={lang === 'en' ? '/ENG/ourproducts' : '/PT/osnossosprodutos'}>{lang === 'en' ? 'Products' : 'Produtos'}</a>
          
        </li>

        <li>
  
            <a href={lang === 'en' ? '/ENG/contactus' : '/PT/contacte-nos'}>{lang === 'en' ? 'Contact Us' : 'Contacte-nos'}</a>
        
        </li>
                    </ul>
                  </div>
                </nav>
                <ul className="menu-right-content pull-left clearfix">
                  <li className="user-box">
                    <a href="#../index.html"
                      ><i className="flaticon-user-symbol-of-thin-outline"></i
                    ></a>
                  </li>
                  <li className="search-box-outer">
                    <div className="dropdown">
                      <button
                        className="search-box-btn"
                        type="button"
                        id="dropdownMenu3"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="flaticon-search"></span>
                      </button>
                      <ul
                        className="dropdown-menu pull-right search-panel"
                        aria-labelledby="dropdownMenu3"
                      >
                        <li className="panel-outer">
                          <div className="form-container">
                            <form method="post" action="blog.html">
                              <div className="form-group">
                                <input
                                  type="search"
                                  name="field-name"
                                  value=""
                                  placeholder="Search...."
                                  required=""
                                />
                                <button type="submit" className="search-btn">
                                  <span className="fas fa-search"></span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="cart-box">
                    <a href="shop-1.html" className="navSidebar-button"
                      ><i className="flaticon-shopping-cart-1"></i
                      ><span x-text="cart.length">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box clearfix">
              <figure className="logo-box pull-left">
              
                <a href="/"
                  ><img
                    src="/assets/images/giannulogo.png"
                    style={{height: "70px", width: "auto"}}
                    alt=""
                /></a>
              </figure>
              <div className="menu-area pull-right">
                <nav className="main-menu clearfix">
                  
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>)}
    
      
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"><i className="fas fa-times"></i></div>

        <nav className="menu-box">
          <div className="nav-logo">
            <a href="#index.html"
              ><img src="assets/images/logo-2.png" alt="" title=""
            /></a>
          </div>
          <div className="menu-outer">
            
          </div>
            <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Avendida Pedro de castro Van-Dúnem Loy, Talatona</li>
              <li><a href="tel:+244931 781843">+244  931 781 843/ 933 410 964</a></li>
              <li><a href="mailto:Giannu.lda@gmail.com">Giannu.lda@gmail.com</a></li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
           
              <li>
                <a href="https://www.facebook.com/p/Giannu-Carnes-100063959979427/"
                  ><span className="fab fa-facebook-square"></span
                ></a>
              </li>
         
              <li>
                <a href="https://www.instagram.com/giannucarnes/"><span className="fab fa-instagram"></span></a>
              </li>
              <li>
                <a href="#index.html"><span className="fab fa-youtube"></span></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
    {children}
  
      <footer className="main-footer mr-0">
        <div className="auto-container">
          <div className="footer-top">
            <div className="widget-section">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget logo-widget">
                    <figure className="footer-logo">
                      <a href="#index.html"
                        ><img
                          src="assets/images/giannulogo.png"
                          style={{height: "70px", width: "auto"}}
                          alt=""
                      /></a><img
                          src="assets/images/feitoangola.jpg"
                          style={{height: "70px", width: "auto" , marginLeft:"20pz"}}
                          alt=""
                      />
                    </figure>
                    <div className="text">
                      <p>
                        O nosso foco é a satisfação do cliente na
                        <strong> Qualidade</strong> dos nossos
                        <strong> Serviços</strong> & <strong>Produtos.</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget contact-widget">
                    <ul className="info clearfix">
                      <li>
                        <i className="flaticon-phone"></i>
                        <p>Ligue para nós</p>
                        <h5>
                          <a href="#tel:+244931781843">+244 931 781 843</a>
                        </h5>
                      </li>
                      <li>
                        <i className="flaticon-maps-and-flags"></i>
                        <p>Endereço</p>
                        <h5>Avendida Pedro de castro Van-Dúnem Loy, Talatona</h5>
                      </li>
                    </ul>
                    <ul className="social-links clearfix">
                      <li>
                        <a href="https://www.facebook.com/p/Giannu-Carnes-100063959979427/"
                          ><i className="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/giannucarnes/"
                          ><i className="fab fa-instagram"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget newsletter-widget">

                    <div className="widget-title">
                      <h6>Newsletter</h6>
                    </div>

                    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
                    <div className="widget-content">
                      <p>
                        Fique atualizado sobre tudo que é novo e importante!
                      </p>
                      <form onSubmit={openModal}
                        className="newsletter-form"
                      >
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required=""
                          />
                          <button type="submit" onClick={()=>{
                          
                          }}>
                            <i className="flaticon-paper-plane-1"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom clearfix">
            <div className="copyright pull-left">
              <h5>
                Direitos autorais &copy; 2024. Giannu Carnes. Todos os direitos
                reservados
                <a href="#" target="_blank">Giannu Carnes</a>.
              </h5>
            </div>
            <ul className="footer-nav pull-right clearfix">
              <li><a href="index.html">Página Inicial</a></li>
              <li>
           
              <a href="/PT/aempresa">Sobre nós</a>
              
              </li>
              <li><a href="/PT/osnossosprodutos">Produtos</a></li>
              <li><a href="/PT/contacte-nos">Contacte-nos</a></li>
            </ul>
          </div>
        </div>
      </footer>
 
    
      <button className="scroll-top scroll-to-target" data-target="html">
        <span className="fa fa-arrow-up"></span>
      </button>
        <button x-show="total > 0" className="scroll-top  navSidebar-button" style={{marginRight: "60px"}} data-target="html">
          <i className="flaticon-shopping-cart-1"></i></button>
    
          
    </div>


  );
}


