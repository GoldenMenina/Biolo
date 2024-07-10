export default function Services() {
  

  return( <>
  
  <section
        className="page-title"
        style=
        {{  backgroundImage:' url(/assets/images/background/page-title.jpg)'}}
      >
        <div className="auto-container">
          <div className="content-box">
            <div className="title-box">
              <h1>Our Services</h1>
            </div>
            <ul className="bread-crumb clearfix">
              <li>Giannu Meats</li>
              <li>Quality and Distinction</li>
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
            <span>Quality & Distinction</span>
            <h2>Giannu Meats</h2>
          </div>
          <div className="row">
            <div
              className="col-lg-6 col-md-12 col-sm-12 mb-5 text-center"
              style={{marginBottom:"30px"}}
            >
              <div id="content_block_2">
                <div className="content-box">
                  <img className="img-fluid" src="/assets/images/giannulogo.png" />
                </div>
              </div>

              <div className="testimonial-block-one" style={{marginTop: '10px'}}>
                <div className="">
                  <p style={{color:'black'}}>
                    Giannu Meats represents our segment of services for individuals,
                    focusing on providing the best grocery shopping experience for our private customers.
                  </p>

                  <div className="more-btn centred" style={{marginTop: '20px'}}>
                    <a href="#shop-1.html" className="theme-btn">Learn More</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 col-sm-12 text-center">
              <div id="content_block_2">
                <div className="content-box">
                  <img className="img-fluid" src="/assets/images/giannulogocoprate.png"  />
                </div>
              </div>
              <div className="testimonial-block-one" style={{marginTop: '10px'}}>
                <div>
                  <p style={{color:'black'}}>
                    Giannu Corporate represents our segment of services for businesses,
                    focusing our strategy on serving cafeterias, restaurants, and butcher shops.
                  </p>
                  <div className="more-btn centred" style={{marginTop: '20px'}}>
                    <a href="#shop-1.html" className="theme-btn">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  </>)}