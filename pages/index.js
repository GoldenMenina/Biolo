import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useRef, useState, useEffect } from "react";


export default function Home() {
  const router = useRouter();


  return(
    <div>
    
      <section className="main-slider style-two">
        <div className="main-slider-carousel owl-theme owl-carousel owl-dots-none">
          <div className="slide-item">
            <div
              className="image-layer"
              style={{backgroundImage: 'url("/assets/images/banner/banner-4.jpg")' }}
            ></div>
            <div className="auto-container">
              <div className="content-box centred">
                <h1>Carnes Frescas, Seguras e de Qualidade</h1>
                <p>
                  Comida que importa - para você, para os agricultores e para o
                  planeta que todos compartilhamos.
                </p>
                <div className="btn-box">
                  <a href="#index.html" className="theme-btn"
                    >Saiba Mais<i className="fas fa-long-arrow-alt-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div
              className="image-layer"
              style={{backgroundImage: "url('assets/images/banner/banner-5.jpg')"}}
            ></div>
            <div className="auto-container">
              <div className="content-box">
                <h1>Carnes Frescas, Seguras e de Qualidade</h1>
                <p>
                  Comida que importa - para você, para os agricultores e para o
                  planeta que todos compartilhamos.
                </p>
                <div className="btn-box">
                  <a href="#index.html" className="theme-btn"
                    >Saiba Mais<i className="fas fa-long-arrow-alt-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div
              className="image-layer"
              style={{backgroundImage:' url("assets/images/banner/banner-6.jpg")'}}
            ></div>
            <div className="auto-container">
              <div className="content-box centred">
                <h1>Carnes Frescas, Seguras e de Qualidade</h1>
                <p>
                  Comida que importa - para você, para os agricultores e para o
                  planeta que todos compartilhamos.
                </p>
                <div className="btn-box">
                  <a href="#index.html" className="theme-btn"
                    >Saiba Mais<i className="fas fa-long-arrow-alt-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="feature-section bg-color-3">
        <div className="auto-container">
          <div
            className="inner-container clearfix wow slideInLeft animated animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box"><img src="assets/images/categorias/bovino.png"
                style={{height:"120px"}}
                /></div>
                <h3>Bovinos</h3>
                <p> Suculenta, de boi ou vaca, preparada com perfeição.</p>
              </div>
            </div>
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box"><img src="assets/images/categorias/suinos.png" 
                style={{height:"100px"}}/></div>
                <h3>Suínos</h3>
                <p>Saborosa, versátil e rica em nutrientes essenciais.</p>
              </div>
            </div>
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box"><img src="assets/images/categorias/aves.png" 
                style={{height:"77px"}}/></div>
                <h3>Aves</h3>
                <p>Tenra, suculenta e cheia de sabor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="about-style-two alternate-2 bg-color-3">
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div id="image_block_1">
                <div className="image-box">
                  <figure className="image image-1">
                    <img src="assets/images/campanhas/semanabif.jpg" alt="" />
                  </figure>
                 
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div id="content_block_2">
                <div className="content-box light">
                  <div className="sec-title light style-two">
                    <span>Sobre Nós</span>
                    <h2>Giannu Carnes</h2>
                  </div>
                  <div className="text">
                    <p>
                      <strong>A Giannu Carnes</strong> é uma marca registada da
                      empresa
                      <span style={{fontWeight: 'bold',fontStyle: 'italic'}}>
                        ZHA Serviços e Investimentos LDA</span
                      >, empresa de direito angolano que, de entre outras
                      actividades dedica-se a comercialização de
                      <span style={{fontWeight: 'bold'}}> carnes</span>
                      exclusivamente nacionais de origem nobre...
                    </p>
                  </div>

                  <div className="link-box">
                    <a href="PT/aempresa.html"
                      >Ler Mais<i className="flaticon-right"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
         <div className="three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                    <div className="service-block-one">
                        <div className="">
                          <img className="img-fluid" src="/assets/images/produtos/foods/1.jpeg" style={{height:"400px",width:"auto"}}/>
                        </div>
                    </div>
                    
                      <div className="service-block-one">
                        <div className="">
                          <img className="img-fluid" src="/assets/images/produtos/foods/2.jpeg" style={{height:"400px",width:"auto"}} />
                        </div>
                    </div>
                    
                    </div>
      
      <section className="portfolio-section sec-pad">
        <div className="auto-container">
            <div className="single-item-carousel owl-carousel owl-theme owl-dots-none owl-loaded owl-drag">
                
                
                
            <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-860px, 0px, 0px)', transition: 'all 0.5s ease 0s', width: '3010px'}}><div className="owl-item cloned" style={{width: '400px', marginRight: '30px'}}><div className="portfolio-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><img src="assets/images/produtos/foods/6.jpeg" alt=""/></figure>
                        
                    </div>
                </div></div><div className="owl-item cloned" style={{width: '400px', marginRight: '30px'}}><div className="portfolio-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><img src="assets/images/produtos/foods/3.jpeg" alt=""/></figure>
                      
                    </div>
                </div>
                </div>
                
                <div className="owl-item active" style={{width: '400px', marginRight: '30px'}}><div className="portfolio-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><img src="assets/images/produtos/foods/1.jpeg" 
                        alt="" />
                        
                        </figure>
                        
                    </div>
                </div>
                </div>
                
                <div className="owl-item" style={{width: "400px", marginRight: "30px"}}><div className="portfolio-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><img src="assets/images/produtos/foods/7.jpeg" alt=""/></figure>
                        
                    </div>
                </div></div><div className="owl-item" style={{width: "400px",marginRight: "30px"}}><div className="portfolio-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><img src="assets/images/produtos/foods/5.jpeg" alt=""/></figure>
                        
                    </div>
                </div></div><div className="owl-item cloned" ><div className="portfolio-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><img src="assets/images/produtos/foods/1.jpeg" alt=""/></figure>
                        
                    </div>
                </div></div><div className="owl-item cloned" style={{width: "400px", marginRight: "30px"}}><div className="portfolio-block-one">
                    <div className="inner-box">
                        <figure className="image-box"><img src="assets/images/produtos/foods/8.jpeg" alt=""/></figure>
                        
                    </div>
                </div></div></div></div><div className="owl-nav disabled"><div className="owl-prev"><span className="flaticon-left"></span></div><div className="owl-next"><span className="flaticon-right"></span></div></div><div className="owl-dots"><div className="owl-dot active"><span></span></div><div className="owl-dot"><span></span></div><div className="owl-dot"><span></span></div></div></div>
        </div>
    </section>

      
      <section className="shop-style-two bg-color-3">
        <div className="auto-container">
          <div className="sec-title light text-center">
            <span>Compre Agora</span>
            <h2>Produtos em Destaque</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
              <div
                className="shop-block-two wow fadeInUp animated animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src="assets/images/produtos/IMG-20240425-WA0024.jpg"
                      alt=""
                    />
                    <ul className="list clearfix">
                      <li>
                        <a href="#shop-1.html"><i className="flaticon-cart navSidebar-button"></i></a>
                      </li>
                      <li>
                        <a  href="#caixas">adicionar </a>
                      </li>
                    </ul>
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <h6>
                        <a href="#caixas">Caixa Serra da Leba</a>
                      </h6>
                      <span className="price">42.898,00 kz</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
              <div
                className="shop-block-two wow fadeInUp animated animated"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src="assets/images/produtos/IMG-20240425-WA0026.jpg"
                      alt=""
                    />
                    <ul className="list clearfix">
                      <li>
                        <a href="#shop-1.html"><i className="flaticon-cart navSidebar-button"></i></a>
                      </li>
                      <li>
                        <a  href="#caixas">adicionar </a>
                      </li>
                    </ul>
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <h6><a href="#caixas">Caixa Kalandula</a></h6>
                      <span className="price">54.108,00 kz</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
              <div
                className="shop-block-two wow fadeInUp animated animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src="assets/images/produtos/IMG-20240425-WA0028.jpg"
                      alt=""
                    />
                    <ul className="list clearfix">
                      <li>
                        <a href="#shop-1.html"><i className="flaticon-cart navSidebar-button"></i></a>
                      </li>
                      <li>
                        <a   href="#caixas">adicionar </a>
                      </li>
                    </ul>
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <h6><a href="#caixas">Caixa Kwanza</a></h6>
                      <span className="price">70.408,00 kz</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
              <div
                className="shop-block-two wow fadeInUp animated animated"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src="assets/images/produtos/IMG-20240425-WA0027.jpg"
                      alt=""
                    />
                    <ul className="list clearfix">
                      <li>
                        <a href="#shop-1.html"><i className="flaticon-cart navSidebar-button"></i></a>
                      </li>
                      <li>
                        <a  href="#caixas">adicionar </a>
                      </li>
                    </ul>
                  </figure>
                  <div className="lower-content">
                    <div className="inner">
                      <h6>
                        <a  href="#caixas">Caixa Gulungo</a>
                      </h6>
                      <span className="price">97.798,00 kz</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="more-btn centred">
            <a href="PT/osnossosprodutos.html" className="theme-btn"
              >Ver todos os produtos</a
            >
          </div>
        </div>
      </section>
      
      
      

      <section className="service-section">
            <div className="auto-container">
              <div className="sec-title text-center">
            <span>A Escolha Certa</span>
            <h2>Nossos Valiosos Parceiros</h2>
          </div>
                <div className="three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                    <div className="service-block-one">
                        <div className="">
                          <img className="img-fluid" src="assets/images/parceiros/one.jpg" />
                        </div>
                    </div>
                      <div className="service-block-one">
                        <div className="">
                          <img className="img-fluid" src="assets/images/parceiros/two.jpg" />
                        </div>
                    </div>
                    
                      <div className="service-block-one">
                        <div className="">
                          <img className="img-fluid" src="assets/images/parceiros/three.jpg" />
                        </div>
                    </div>
                    
                      <div className="service-block-one">
                        <div className="">
                          <img className="img-fluid" src="assets/images/parceiros/four.jpg" />
                        </div>
                    </div>
                    
                    
                   <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/five.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/six.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/seven.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/eight.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/nine.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/ten.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/eleven.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/twelve.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/thirteen.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/fourteen.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/fifteen.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/sixteen.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/seventeen.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/eighteen.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/nineteen.jpg" />
                      </div>
                    </div>
                    <div className="service-block-one">
                      <div className="">
                        <img className="img-fluid" src="assets/images/parceiros/twenty.jpg" />
                      </div>
                    </div>
                    
                    
                    
                </div>
            </div>
        </section>
      
      <section>
        <img src="assets/images/cortes-de-carne-do-boi-infografico.jpg" />
      </section>

    </div>
     
  )
}
