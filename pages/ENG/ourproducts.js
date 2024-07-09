export default function Products() {
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
              <li>Giannu Meats</li>
              <li>Quality and Distinction</li>
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
                      <template x-for="(item ,index) in categories">
                        <li>
                          <i className="flaticon-right"></i>
                          <a
                            className="item"
                            href="#category"
                          >
                            <span x-text="item.category"></span>
                          </a>
                        </li>
                      </template>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
              <div className="our-shop">
                <div className="row clearfix">
                  <template x-for="item in products">
                    <div className="col-lg-4 col-md-6 col-sm-12 shop-block">
                      <div className="shop-block-one">
                        <div className="inner-box">
                          <figure className="image-box">
                            <img
                              src="item.image"
                              alt=""
                            /> 
                          </figure>
                          <div className="lower-content">
                            <h6>
                              <a
                                href="shop-details.html"
                                style={{font: '15px'}}
                                x-text="item.cut"
                              >Whole Tenderloin</a>
                            </h6>
                            <div>
                              <span x-text="item.category"></span>
                            </div>
                            <span
                              className="price"
                            >$ 400.00</span>
                            <span>
                              <button
                                className="btn btn-success btn-sm add-to-cart-btn" 
                              >
                                Add <i className="fas fa-plus"></i>
                              </button>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}