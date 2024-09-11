import Link from "next/link";
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

  const addToCart = (product) => {
    console.log("add cart")
   

    try {
      console.log('Adding to cart:', product);
      console.log("add cart")
      // ...
    } catch (error) {
      console.error('Error in addToCart:', error);
    }

    return false
    const updatedCart = cartItems.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    console.log(updatedCart)

    if (!updatedCart.some(item => item.id === product.id)) {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const removeFromCart = (itemId) => {
    alert(8888)
    const updatedItems = cartItems
      .map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter(item => item.quantity > 0);

    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.preco * item.quantity, 0);

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

  const sendWhatsAppMessage = () => {
    const message = cartItems.map(item => (
      `${item.corte} (${item.categoria}) - ${item.quantity} Kz`
    )).join('\n');

    const totalPriceMessage = `Total: ${totalPrice} Kz`;
    const commentsMessage = additionalComments ? `\n\nAdditional Comments: ${additionalComments}` : '';
    const whatsappMessage = encodeURIComponent(`${message}\n\n${totalPriceMessage}${commentsMessage}`);
    const whatsappUrl = `https://wa.me/+244931781843?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false);
    setAdditionalComments('');
  };

  const handleFinalizar = () => {
    openModal();
  };


  return (
    <div class="boxed_wrapper ltr">
  
      <div class="preloader"></div>

      <div class="xs-sidebar-group info-group info-sidebar">
        <div class="xs-overlay xs-bg-black"></div>
        <div class="xs-sidebar-widget">
          <div class="sidebar-widget-container">
            <div class="widget-heading">
              <a href="#" class="close-side-widget">X</a>
            </div>
            <div class="sidebar-textwidget">
              <div class="sidebar-info-contents">
                    <div className="content-inner">
                      <div className="logo text-center">
                        <a href="index.html">
                          <img
                            src="assets/images/giannulogo.png"
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
                            <>
                            <li key={item.id}  style={{ marginBottom: "10px", position: "relative" }}>
                              <span style={{marginRight: "5px"}}>
                                {item.corte} ({item.categoria})
                              </span>
                              <br />
                              <span style={{marginRight: "3px"}}>
                                <NumberFormat
                      value={item.preco}
                      displayType={"text"}
                      thousandSeparator=" "
                      allowNegative={false}
                      suffix={" kz"}
                      
                      fixedDecimalScale={true}
                    />
                              </span>
                              <strong> /{item.quantity}</strong>
                              <br/>
                              <button
      className="btn btn-sm btn-light debug-button"
      style={{
        fontSize: "0.675rem",
        lineHeight: 1.3,
        marginLeft: "5px",
        backgroundColor: "#f0f0f0",
        position: "relative",
        zIndex: 10
      }}
      onClick={(e) => {
        e.stopPropagation();
        console.log('Add button clicked', item);
        addToCart(item);
      }}
    >
      <i className="fa fa-plus"></i>
    </button>
    <button
      className="btn btn-sm btn-light debug-button"
      style={{
        fontSize: "0.675rem",
        lineHeight: 1.3,
        marginLeft: "5px",
        backgroundColor: "#f0f0f0",
        position: "relative",
        zIndex: 10
      }}
      onClick={(e) => {
        e.stopPropagation();
        console.log('Remove button clicked', item.id);
        removeFromCart(item.id);
      }}
    >
      <i className="fa fa-minus"></i>
    </button>
                            </li>
                            <hr/>
                            </>
                          ))}
                          <div style={{marginTop: "10px"}}>
                            <span style={{color: "#fff"}}>
                              <strong>
                                Total: <span style={{color: "white"}}>         <NumberFormat
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
                            
                              onClick={()=>{handleFinalizar()}}
                              className="btn btn-success"
                            >
                              Finalizar
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
      
      {(router.pathname === "/" || router.pathname === "/ENG") && router.pathname != "/admin/dashboard" && ( <header class="main-header style-two">
        <div class="header-top">
          <div class="auto-container clearfix">
            <div class="top-left pull-left clearfix">
              <div class="left-info pull-left clearfix">
                <div class="language">
                  <div class="lang-btn">
                    <span class="icon flaticon-location"></span>
                    <span class="txt">{lang == 'en'?'English': 'português'} </span>
                    <span class="arrow fa fa-angle-down"></span>
                  </div>
                  <div class="lang-dropdown">
                    <ul>
                      <li><a onClick={()=>
                        {languageChange()
                      }} href="#index.html">{lang == 'pt'?'English': 'português'}</a></li>
                    </ul>
                  </div>
                </div>
                <ul class="social-links clearfix">
                  <li>
                    <a target="_blank" href="https://www.facebook.com/p/Giannu-Carnes-100063959979427/7"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.instagram.com/giannucarnes/"><i class="fab fa-instagram"></i></a>
                  </li>
                </ul>
              </div>
              <div class="logo-box">
                <figure class="logo">
                  <a href="index.html"
                    ><img
                      src="assets/images/giannulogo.png"
                      style={{height: "90px", width: "auto"}}
                      alt=""
                  /></a>
                </figure>
              </div>
            </div>
            <div class="top-right pull-right">
              <ul class="menu-right-content pull-left clearfix">
                <li class="user-box">
                  <a href="#index.html"
                    ><i class="flaticon-user-symbol-of-thin-outline"></i
                  ></a>
                </li>
                <li class="search-box-outer">
                  <div class="dropdown">
                    <button
                      class="search-box-btn"
                      type="button"
                      id="dropdownMenu3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="flaticon-search"></span>
                    </button>
                    <ul
                      class="dropdown-menu pull-right search-panel"
                      aria-labelledby="dropdownMenu3"
                    >
                      <li class="panel-outer">
                        <div class="form-container">
                          <form method="post" action="blog.html">
                            <div class="form-group">
                              <input
                                type="search"
                                name="field-name"
                                value=""
                                placeholder="Pesquisar...."
                                required=""
                              />
                              <button type="submit" class="search-btn">
                                <span class="fas fa-search"></span>
                              </button>
                            </div>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="cart-box">
                  <a href="#shop-1.html" class="navSidebar-button"
                    ><i class="flaticon-shopping-cart-1"></i><span x-text="cart.length">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span></a
                  >
                </li>
               
              </ul>
            </div>
          </div>
        </div>
        <div class="header-upper">
          <div class="auto-container">
            <div class="outer-box clearfix">
              <div class="menu-area">
              
                <div class="mobile-nav-toggler">
                  <i class="icon-bar"></i>
                  <i class="icon-bar"></i>
                  <i class="icon-bar"></i>
                </div>
                <nav class="main-menu navbar-expand-md navbar-light">
                  <div
                    class="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul class="navigation clearfix">
                     <li>

          <Link href={lang == 'en' ? '/ENG/ourcompany' : '/PT/aempresa'}>
            <a>{lang === 'en' ? 'About Us' : 'Sobre nós'}</a>
          </Link>
        </li>
  <li>
          <Link href={lang === 'en' ? '/ENG/services' : '/PT/osnossosservicos'}>
            <a>{lang === 'en' ? 'Services' : 'Serviços'}</a>
          </Link>
        </li>

        <li>
          <Link href={lang === 'en' ? '/ENG/ourproducts' : '/PT/osnossosprodutos'}>
            <a>{lang === 'en' ? 'Products' : 'Produtos'}</a>
          </Link>
        </li>

        <li>
          <Link href={lang === 'en' ? '/ENG/contactus' : '/PT/contacte-nos'}>
            <a>{lang === 'en' ? 'Contact Us' : 'Contacte-nos'}</a>
          </Link>
        </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div class="sticky-header">
          <div class="auto-container">
            <div class="outer-box clearfix">
              <figure class="logo-box pull-left">
                <a href="#index.html"
                  ><img
                    src="assets/images/giannulogo.png"
                    style={{height: "70px", width: "auto"}}
                    alt=""
                /></a>
              </figure>
              <div class="menu-area pull-right">
                <nav class="main-menu clearfix">
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
     )}
     
     
   {router.pathname != "/" && router.pathname != "/ENG" && router.pathname != "/admin/dashboard" &&(<header class="main-header">
        <div class="header-top">
          <div class="auto-container">
            <div class="top-info">
              <ul class="info-list clearfix">
                <li>
                  <i class="flaticon-location-pin"></i>
                  Avendida Pedro de castro Van-Dúnem Loy, Talatona
                </li>
                <li>
                  <i class="flaticon-envelope"></i>
                  <a href="mailto:clientes.particulares@giannu.co.ao"
                    >clientes.particulares@giannu.co.ao</a
                  >
                </li>
                <li class="phone">
                  <i class="flaticon-dial"></i>
                  <a href="tel:244931781843">+244 931 781 843 {lang}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-upper">
          <div class="auto-container">
            <div class="outer-box clearfix">
              <div class="logo-box">
                <figure class="logo">
                
                  <a href="/"
                    ><img
                      src="/assets/images/giannulogo.png"
                      alt=""
                      style={{height: "80px", width: "auto"}}
                    />
                  </a>
                </figure>
              </div>
              <div class="menu-area pull-right">
                
                <div class="mobile-nav-toggler">
                  <i class="icon-bar"></i>
                  <i class="icon-bar"></i>
                  <i class="icon-bar"></i>
                </div>
                <nav class="main-menu navbar-expand-md navbar-light">
                  <div
                    class="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul class="navigation clearfix">
                      <li>

          <Link href={lang === 'en' ? '/ENG/ourcompany' : '/PT/aempresa'}>
            <a>{lang === 'en' ? 'About Us' : 'Sobre nós'}</a>
          </Link>
        </li>

        <li>
          <Link href={lang === 'en' ? '/ENG/services' : '/PT/osnossosservicos'}>
            <a>{lang === 'en' ? 'Services' : 'Serviços'}</a>
          </Link>
        </li>

        <li>
          <Link href={lang === 'en' ? '/ENG/ourproducts' : '/PT/osnossosprodutos'}>
            <a>{lang === 'en' ? 'Products' : 'Produtos'}</a>
          </Link>
        </li>

        <li>
          <Link href={lang === 'en' ? '/ENG/contactus' : '/PT/contacte-nos'}>
            <a>{lang === 'en' ? 'Contact Us' : 'Contacte-nos'}</a>
          </Link>
        </li>
                    </ul>
                  </div>
                </nav>
                <ul class="menu-right-content pull-left clearfix">
                  <li class="user-box">
                    <a href="#../index.html"
                      ><i class="flaticon-user-symbol-of-thin-outline"></i
                    ></a>
                  </li>
                  <li class="search-box-outer">
                    <div class="dropdown">
                      <button
                        class="search-box-btn"
                        type="button"
                        id="dropdownMenu3"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span class="flaticon-search"></span>
                      </button>
                      <ul
                        class="dropdown-menu pull-right search-panel"
                        aria-labelledby="dropdownMenu3"
                      >
                        <li class="panel-outer">
                          <div class="form-container">
                            <form method="post" action="blog.html">
                              <div class="form-group">
                                <input
                                  type="search"
                                  name="field-name"
                                  value=""
                                  placeholder="Search...."
                                  required=""
                                />
                                <button type="submit" class="search-btn">
                                  <span class="fas fa-search"></span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li class="cart-box">
                    <a href="shop-1.html" class="navSidebar-button"
                      ><i class="flaticon-shopping-cart-1"></i
                      ><span x-text="cart.length">{cartItems.reduce((total, item) => total + item.quantity, 0)}</span></a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        
        <div class="sticky-header">
          <div class="auto-container">
            <div class="outer-box clearfix">
              <figure class="logo-box pull-left">
              
                <a href="/"
                  ><img
                    src="/assets/images/giannulogo.png"
                    style={{height: "70px", width: "auto"}}
                    alt=""
                /></a>
              </figure>
              <div class="menu-area pull-right">
                <nav class="main-menu clearfix">
                  
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>)}
    
      
      <div class="mobile-menu">
        <div class="menu-backdrop"></div>
        <div class="close-btn"><i class="fas fa-times"></i></div>

        <nav class="menu-box">
          <div class="nav-logo">
            <a href="#index.html"
              ><img src="assets/images/logo-2.png" alt="" title=""
            /></a>
          </div>
          <div className="menu-outer">
            
          </div>
            <div class="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Avendida Pedro de castro Van-Dúnem Loy, Talatona</li>
              <li><a href="tel:+244931 781843">+244  931 781 843/ 933 410 964</a></li>
              <li><a href="mailto:Giannu.lda@gmail.com">Giannu.lda@gmail.com</a></li>
            </ul>
          </div>
          <div class="social-links">
            <ul class="clearfix">
           
              <li>
                <a href="https://www.facebook.com/p/Giannu-Carnes-100063959979427/"
                  ><span class="fab fa-facebook-square"></span
                ></a>
              </li>
         
              <li>
                <a href="https://www.instagram.com/giannucarnes/"><span class="fab fa-instagram"></span></a>
              </li>
              <li>
                <a href="#index.html"><span class="fab fa-youtube"></span></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      
    {children}
  
      <footer class="main-footer mr-0">
        <div class="auto-container">
          <div class="footer-top">
            <div class="widget-section">
              <div class="row clearfix">
                <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div class="footer-widget logo-widget">
                    <figure class="footer-logo">
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
                    <div class="text">
                      <p>
                        O nosso foco é a satisfação do cliente na
                        <strong> Qualidade</strong> dos nossos
                        <strong> Serviços</strong> & <strong>Produtos.</strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div class="footer-widget contact-widget">
                    <ul class="info clearfix">
                      <li>
                        <i class="flaticon-phone"></i>
                        <p>Ligue para nós</p>
                        <h5>
                          <a href="#tel:+244931781843">+244 931 781 843</a>
                        </h5>
                      </li>
                      <li>
                        <i class="flaticon-maps-and-flags"></i>
                        <p>Endereço</p>
                        <h5>Avendida Pedro de castro Van-Dúnem Loy, Talatona</h5>
                      </li>
                    </ul>
                    <ul class="social-links clearfix">
                      <li>
                        <a href="https://www.facebook.com/p/Giannu-Carnes-100063959979427/"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/giannucarnes/"
                          ><i class="fab fa-instagram"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div class="footer-widget newsletter-widget">

                    <div class="widget-title">
                      <h6>Newsletter</h6>
                    </div>

                    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
                    <div class="widget-content">
                      <p>
                        Fique atualizado sobre tudo que é novo e importante!
                      </p>
                      <form onSubmit={openModal}
                        class="newsletter-form"
                      >
                        <div class="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required=""
                          />
                          <button type="submit" onClick={()=>{
                          
                          }}>
                            <i class="flaticon-paper-plane-1"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom clearfix">
            <div class="copyright pull-left">
              <h5>
                Direitos autorais &copy; 2024. Giannu Carnes. Todos os direitos
                reservados
                <a href="#" target="_blank">Giannu Carnes</a>.
              </h5>
            </div>
            <ul class="footer-nav pull-right clearfix">
              <li><a href="index.html">Página Inicial</a></li>
              <li>
              <Link href="/PT/aempresa">
              <a>Sobre nós</a>
              </Link>
              
              </li>
              <li><Link href="/PT/osnossosprodutos"><a >Produtos</a></Link></li>
              <li><Link href="/PT/contacte-nos"><a>Contacte-nos</a></Link></li>
            </ul>
          </div>
        </div>
      </footer>
 
    
      <button class="scroll-top scroll-to-target" data-target="html">
        <span class="fa fa-arrow-up"></span>
      </button>
        <button x-show="total > 0" class="scroll-top  navSidebar-button" style={{marginRight: "60px"}} data-target="html">
          <i class="flaticon-shopping-cart-1"></i></button>
    </div>


  );
}


