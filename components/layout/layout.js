import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState, useEffect, Children } from "react";
import {
  getDecryptedCookie,
  setEncryptedCookie,
  deleteCookie,
} from "../../lib/session";


export default function Layout({ children }) {
  const router = useRouter();
  const [usuario, setusuario] = useState(null);
  const [newstatus, setnewstatus] = useState("");



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
                <div class="content-inner">
                  <div class="logo text-center">
                    <a href="index.html"
                      ><img
                        src="assets/images/giannulogo.png"
                        style={{height: "160px", width: "auto"}}
                        alt=""
                    /></a>
                  </div>
                  <div class="content-box">
                    <h3 
                    style={{color: "white", marginBottom: "20px"}}
                    
                    >
                      Carrinho <i class="flaticon-shopping-cart-1"></i>
                    </h3>
                    <div class="margin-top:10px">
                      <template
                        x-for="(item,index) in cart"
                        
                        style={{marginTop: "50px"}}
                      >
                        <li style={{color: "white"}}>
                          <span
                            style={{marginRight: "5px"}}
                            x-text="item.corte+' ('+item.categoria+')'"
                          ></span>
                          |
                          <span
                            style={{marginRight: "3px"}}
                            x-text="item.preco.toFixed(2)+' '"
                          ></span
                          >kz
                          <strong> <span x-text="'/'+item.qty"></span></strong>
                          <button
                          
                            class="btn btn-sm btn-success"
                            style={{fontSize: "0.675rem", lineHeight: 1.3}}
                          >
                            <i class="fa fa-plus"></i>
                          </button>
                          <button
                            
                            class="btn btn-sm btn-warning"
                             style={{fontSize: "0.675rem", lineHeight: 1.3}}
                          >
                            <i class="fa fa-minus"></i>
                          </button>

                          <br />
                          <br />
                        </li>
                      </template>
                      <div style={{arginTop: "10px"}}>
                        <span style={{color: "#fff"}}
                          ><strong
                            >Total:
                            <span
                              style={{color: "white"}}
                              x-text="' '+total.toFixed()+' Kz'"
                            ></span></strong
                        ></span>
                        <br />
                        -------------------------------------------
                      </div>
                      <div style={{marginTop: "15px"}}>
                        <a
                          target="_blank"
                          href="https://wa.me/+244931781843"
                          class="btn btn-success"
                          >Finalizar</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {router.pathname == "/"?( <header class="main-header style-two">
        <div class="header-top">
          <div class="auto-container clearfix">
            <div class="top-left pull-left clearfix">
              <div class="left-info pull-left clearfix">
                <div class="language">
                  <div class="lang-btn">
                    <span class="icon flaticon-location"></span>
                    <span class="txt">Português </span>
                    <span class="arrow fa fa-angle-down"></span>
                  </div>
                  <div class="lang-dropdown">
                    <ul>
                      <li><a href="#index.html">Ingles</a></li>
                    </ul>
                  </div>
                </div>
                <ul class="social-links clearfix">
                  <li>
                    <a href="#index-2.html"
                      ><i class="fab fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a href="#index-2.html"><i class="fab fa-instagram"></i></a>
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
                    ><i class="flaticon-shopping-cart-1"></i><span x-text="cart.length">0</span></a
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
                      <Link href="PT/aempresa" >
                      <a>Sobre nós</a></Link></li>
                      <li><Link href="/PT/osnossosservicos"><a>Serviços</a></Link></li>

                      <li><Link href="/PT/osnossosprodutos"><a>Produtos</a></Link></li>

                      <li><Link href="/PT/contacte-nos"><a >Contacte-nos</a></Link></li>
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
     ):(<header class="main-header">
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
                  <a href="tel:244931781843">+244 931 781 843</a>
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
                      <li> <Link href='/PT/aempresa'><a>Sobre nós</a></Link></li>

                      <li><Link href='/PT/osnossosservicos'><a>Serviços</a> </Link></li>

                      <li><Link href="/PT/osnossosprodutos"><a>Produtos</a></Link></li>

                      <li><Link href="/PT/contacte-nos"><a >Contacte-nos</a></Link></li>
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
                      ><span x-text="cart.length">0</span></a
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
                <a href="#index.html"><span class="fab fa-twitter"></span></a>
              </li>
              <li>
                <a href="#index.html"
                  ><span class="fab fa-facebook-square"></span
                ></a>
              </li>
              <li>
                <a href="#index.html"
                  ><span class="fab fa-pinterest-p"></span
                ></a>
              </li>
              <li>
                <a href="#index.html"><span class="fab fa-instagram"></span></a>
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
                      /></a>
                    </figure>
                    <div class="text">
                      <p>
                        O nosso foco é a satisfação do cliente na
                        <strong>Qualidade</strong> dos nossos
                        <strong>Serviços</strong> & <strong>Produtos.</strong>
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
                        <a href="#index.html"
                          ><i class="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#index.html"
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
                    <div class="widget-content">
                      <p>
                        Fique atualizado sobre tudo que é novo e importante!
                      </p>
                      <form
                        action="contact.html"
                        method="post"
                        class="newsletter-form"
                      >
                        <div class="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required=""
                          />
                          <button type="submit">
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
        <button x-show="total > 0" class="scroll-top  navSidebar-button" style={{marginRight: "60px"}} data-target="html">
          <i class="flaticon-shopping-cart-1"></i></button>
    </div>


  );
}
