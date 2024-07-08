import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useRef, useState, useEffect } from "react";


export default function Empresa() {
  const router = useRouter();


  return( <> 
      
  
      <section
        className="page-title"
        style=
        {{  backgroundImage:' url(/assets/images/background/page-title.jpg)'}}
        
      >
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box">
              <h1>Nossos Serviços</h1>
            </div>
            <ul className="bread-crumb clearfix">
              <li>Giannu Carnes</li>
              <li>Qualidade e Distinção</li>
            </ul>
          </div>
        </div>
      </section>
     

      <section className="service-section bg-color-1">
        <div
          className="icon-layer"
          style={{backgroundImage: 'url(/assets/images/icons/bg-icon-1.png)'}}
        ></div>
        <div className="auto-container">
          <div className="sec-title text-center">
            <span>Qualidade & Distinção</span>
            <h2>Giannu Carnes</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-6 col-md-12 col-sm-12 mb-5 text-center"
              styie="margin-bottom:30px"
            >
              <div id="content_block_2">
                <div className="content-box">
                  <img className="img-fluid" src="../assets/images/giannulogo.png" />
                </div>
              </div>

              <div className="testimonial-block-one" style={{marginTop: '10px'}}>
                <div className="">
                  <p style={{color:'black'}}>
                    
                      A
                      
                        Giannu Carnes
                      representa o nosso segmento de serviços para particulares
                      no qual focamos em proporcionar a melhor experiencia de
                      compras alimentares aos nossos clientes
                      particulares.
                  </p>

                  <div className="more-btn centred" style={{marginTop: '20px'}}>
                    <a href="#shop-1.html" className="theme-btn">Saber Mais</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 text-center">
              <div id="content_block_2">
                <div className="content-box">
                  <img className="img-fluid" src="../assets/images/giannulogocoprate.png"  />
                </div>
              </div>
              <div className="testimonial-block-one" style={{marginTop: '10px'}}>
                <div>
                  <p style={{color:'black'}}>
                    A
                    Giannu Corporate
                    representa o nosso segmento de serviços para empresas no
                    qual focamos a nossa estratégia de atendimento aos
                    refeitórios, restaurantes, e talhos.
                    </p>
                  <div className="more-btn centred" style={{marginTop: '20px'}}>
                    <a href="#shop-1.html" className="theme-btn">Saber Mais</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
  </>)
}

