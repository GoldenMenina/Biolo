export default function Contacto() {
  

  return( <> 
  
    <section
        className="page-title"
        style={{
          backgroundImage: 'url(/assets/images/background/page-title.jpg)'
        }}
      >
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box">
              <h1>Entre em Contacto</h1>
            </div>
            <ul className="bread-crumb clearfix">
              <li>Giannu Carnes</li>
              <li>Qualidade e Distinção</li>
            </ul>
          </div>
        </div>
      </section>

     
      <section className="contact-info-section centred">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                <div className="single-info">
                  <div className="inner-box">
                    <div className="big-icon">
                      <i className="flaticon-telephone"></i>
                    </div>
                    <div className="icon-box">
                      <i className="flaticon-telephone"></i>
                    </div>
                    <h3>Nº Telefone</h3>
                    <p>
                      <a href="tel:+244931781843">+244 931 781 843</a><br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                <div className="single-info">
                  <div className="inner-box">
                    <div className="big-icon"><i className="flaticon-mail"></i></div>
                    <div className="icon-box"><i className="flaticon-mail"></i></div>
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:clientes.particulares@giannu.co.ao"
                        >clientes.particulares@giannu.co.ao</a
                      ><br /><a href="mailto:clientes.corporate@giannu.co.ao"
                        >clientes.corporate@giannu.co.ao</a
                      >
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                <div className="single-info">
                  <div className="inner-box">
                    <div className="big-icon">
                      <i className="flaticon-maps-and-flags"></i>
                    </div>
                    <div className="icon-box">
                      <i className="flaticon-maps-and-flags"></i>
                    </div>
                    <h3>Endereço</h3>
                    <p>
                      Avendida Pedro de castro Van-Dúnem Loy, Talatona
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="contact-section centred">
        <div className="auto-container">
          <div className="sec-title">
            <span>Contacto</span>
            <h2>Envia uma Mensagem</h2>
          </div>
          <div className="form-inner">
            <form
              method="post"
              action="assets/inc/sendemail.php"
              id="contact-form"
              className="default-form"
            >
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <i className="far fa-user"></i>
                    <input
                      type="text"
                      name="username"
                      placeholder="Nome"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <i className="far fa-envelope"></i>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <i className="fas fa-phone-volume"></i>
                    <input
                      type="text"
                      name="phone"
                      required=""
                      placeholder="Telefone"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <i className="far fa-file-alt"></i>
                    <input
                      type="text"
                      name="subject"
                      required=""
                      placeholder="assunto"
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <i className="far fa-comment-alt"></i>
                    <textarea name="message" placeholder="Mensagem"></textarea>
                  </div>
                </div>

                <div
                  className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred"
                >
                  <button className="theme-btn" type="submit" name="submit-form">
                    Enviar Mensagem
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
  
  </>)
  
  
  
}