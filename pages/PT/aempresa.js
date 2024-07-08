import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useRef, useState, useEffect } from "react";


export default function Empresa() {
  const router = useRouter();


  return( <> 
   <section
        className="page-title"
        style={{
          backgroundImage: 'url("../assets/images/background/page-title.jpg")'
        }}
      >
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box">
              <h1>Sobre nós</h1>
            </div>
            <ul className="bread-crumb clearfix">
              <li>Giannu Carnes</li>
              <li>Qualidade e Distinção</li>
            </ul>
          </div>
        </div>
      </section>
      

     
      <section className="about-style-two">
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div id="content_block_2">
                <div className="content-box">
                  <div className="sec-title style-two">
                    <span>Giannu Carnes</span>
                    <h2>Quem somos</h2>
                  </div>
                  <div className="text">
                    <p>
                      A Giannu Carnes é uma marca registada da
                      empresa
                     
                        ZHA Serviços e Investimentos LDA, empresa de direito angolano que, de entre outras
                      actividades dedica-se a comercialização de
                      carnes
                      exclusivamente nacionais de origem nobre.
                    </p>
                    <p>Orgulhamo-nos de atender a mais de 2.250 clientes, garantindo carnes
                      frescas
                    e
                   
                    saudáveis
                    de 
                    qualidade superior
                   .
                    </p>
                    <br />
                    <p>
                      Comercializamos carne Bovina, Suína, Caprina (Cabrito e Borrego) e Aves cujos
                      processos de criação, abate, desmanche, comercialização até a entrega ao cliente,
                      cumprem todos os requisitos de Bio-Segurança e HSA, bem como, a certificação
                      do Laboratório Nacional de Control  de dos nossos lotes.
                    </p>
                    
                    <p>Resulta do acima exposto, que a carne entregue aos nossos clientes é de qualidade
                    irrepreensível, uma vez que o os animais estão apenas sujeitos a pasto livre e não
                    ao confinamento, o que previne por um lado a dissipação de doenças, por outro
                    lado a alimentação 100% natural promove grandes vantagens para a saúde
                    designadamente altos teores de omega 3, baixos niveis de colesterol, portanto a
                    nossa carne é considerada uma carne biológica, com grandes vantagens para a
                   saúde.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text-center">
              <div id="content_block_2">
                <div className="content-box">
                  <img src="/assets/images/guiniimage.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
  
  </>)
}
