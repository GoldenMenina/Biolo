import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useRef, useState, useEffect } from "react";


export default function Home() {
  const router = useRouter();

const [lingau,setlingua] = useState("pt")
function ChangeLangauge (){
    
  }

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
    <img className="img-fluid" src="/assets/images/produtos/foods/1.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/2.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/3.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/4.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/5.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/6.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/7.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/8.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/9.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/10.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/11.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/12.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/13.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/14.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/15.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/16.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/17.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/18.jpeg" style={{height:"600px"}}/>
  </div>
</div>
<div className="service-block-one">
  <div className="">
    <img className="img-fluid" src="/assets/images/produtos/foods/19.jpeg" style={{height:"600px"}}/>
  </div>
</div>
                    
            </div>
      

      
      <section className="shop-style-two bg-color-3">
                  <div className="auto-container">
                      <div className="four-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                          <div className="shop-block-two">
                              <div className="inner-box">
                                  <figure className="image-box">
                                      <img src="/assets/images/produtos/caixas/churrasco.jpg" alt="" />
                                      <ul className="list clearfix">
                                          <li><a href="#"><i className="flaticon-cart"></i></a></li>
                                          <li><a href="#">adicionar</a></li>
                                      </ul>
                                  </figure>
                                  <div className="lower-content">
                                      <div className="inner">
                                          <h6><a href="#">Caixa Churrasco</a></h6>
                                          <span className="price">78 026,00 kz</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="shop-block-two">
                              <div className="inner-box">
                                  <figure className="image-box">
                                      <img src="/assets/images/produtos/caixas/gulungo.jpg" alt="" />
                                      <ul className="list clearfix">
                                          <li><a href="#"><i className="flaticon-cart"></i></a></li>
                                          <li><a href="#">adicionar</a></li>
                                      </ul>
                                  </figure>
                                  <div className="lower-content">
                                      <div className="inner">
                                          <h6><a href="#">Caixa Gulungo</a></h6>
                                          <span className="price">99 796,00 kz</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="shop-block-two">
                              <div className="inner-box">
                                  <figure className="image-box">
                                      <img src="/assets/images/produtos/caixas/kalandula.jpg" alt="" />
                                      <ul className="list clearfix">
                                          <li><a href="#"><i className="flaticon-cart"></i></a></li>
                                          <li><a href="#">adicionar</a></li>
                                      </ul>
                                  </figure>
                                  <div className="lower-content">
                                      <div className="inner">
                                          <h6><a href="#">Caixa Kalandula</a></h6>
                                          <span className="price">55 507,00 kz</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="shop-block-two">
                              <div className="inner-box">
                                  <figure className="image-box">
                                      <img src="/assets/images/produtos/caixas/kandengue.jpg" alt="" />
                                      <ul className="list clearfix">
                                          <li><a href="#"><i className="flaticon-cart"></i></a></li>
                                          <li><a href="#">adicionar</a></li>
                                      </ul>
                                  </figure>
                                  <div className="lower-content">
                                      <div className="inner">
                                          <h6><a href="#">Caixa Kandengue</a></h6>
                                          <span className="price">42 064,00 kz</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="shop-block-two">
                              <div className="inner-box">
                                  <figure className="image-box">
                                      <img src="/assets/images/produtos/caixas/kwanza.jpg" alt="" />
                                      <ul className="list clearfix">
                                          <li><a href="#"><i className="flaticon-cart"></i></a></li>
                                          <li><a href="#">adicionar</a></li>
                                      </ul>
                                  </figure>
                                  <div className="lower-content">
                                      <div className="inner">
                                          <h6><a href="#">Caixa Kwanza</a></h6>
                                          <span className="price">71 967,00 kz</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="shop-block-two">
                              <div className="inner-box">
                                  <figure className="image-box">
                                      <img src="/assets/images/produtos/caixas/paty.jpg" alt="" />
                                      <ul className="list clearfix">
                                          <li><a href="#"><i className="flaticon-cart"></i></a></li>
                                          <li><a href="#">adicionar</a></li>
                                      </ul>
                                  </figure>
                                  <div className="lower-content">
                                      <div className="inner">
                                          <h6><a href="#">Caixa Paty Pacheco</a></h6>
                                          <span className="price">63 018,00 kz</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="shop-block-two">
                              <div className="inner-box">
                                  <figure className="image-box">
                                      <img src="/assets/images/produtos/caixas/sera.jpg" alt="" />
                                      <ul className="list clearfix">
                                          <li><a href="#"><i className="flaticon-cart"></i></a></li>
                                          <li><a href="#">adicionar</a></li>
                                      </ul>
                                  </figure>
                                  <div className="lower-content">
                                      <div className="inner">
                                          <h6><a href="#">Caixa Serra da Leba</a></h6>
                                          <span className="price">42 898 kz</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                     
                              </div>
                              <div className="more-btn centred">
                     <Link href="/PT/osnossosservicos"><a className="theme-btn">ver todos produtos</a></Link>
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
        <img src="assets/images/feitoangola.jpg" />
      </section>

    </div>
     
  )
}
