import Link from "next/link";
import BeefCutsMap from '../BeefCutsMap'

export default function Home() {
 
  return (
    <div>
      <section className="main-slider style-two">
        <div className="main-slider-carousel owl-theme owl-carousel owl-dots-none">
          <div className="slide-item">
            <div
              className="image-layer"
              style={{ backgroundImage: 'url("/assets/images/banner/banner-4.jpg")' }}
            ></div>
            <div className="auto-container">
              <div className="content-box centered">
                <h1>Fresh, Safe, and Quality Meats</h1>
                <p>
                  Food that matters - for you, for the farmers, and for the
                  planet we all share.
                </p>
                <div className="btn-box">
                  <a href="#index.html" className="theme-btn">
                    Learn More <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div
              className="image-layer"
              style={{ backgroundImage: "url('assets/images/banner/banner-5.jpg')" }}
            ></div>
            <div className="auto-container">
              <div className="content-box">
                <h1>Fresh, Safe, and Quality Meats</h1>
                <p>
                  Food that matters - for you, for the farmers, and for the
                  planet we all share.
                </p>
                <div className="btn-box">
                  <a href="#index.html" className="theme-btn">
                    Learn More <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div
              className="image-layer"
              style={{ backgroundImage: 'url("assets/images/banner/banner-6.jpg")' }}
            ></div>
            <div className="auto-container">
              <div className="content-box centered">
                <h1>Fresh, Safe, and Quality Meats</h1>
                <p>
                  Food that matters - for you, for the farmers, and for the
                  planet we all share.
                </p>
                <div className="btn-box">
                  <a href="#index.html" className="theme-btn">
                    Learn More <i className="fas fa-long-arrow-alt-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section bg-color-3">
        <div className="auto-container">
          <div
            className="inner-container clearfix wow slideInLeft animated"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box">
                  <img src="assets/images/categorias/bovino.png" style={{ height: "120px" }} />
                </div>
                <h3>Beef</h3>
                <p>Juicy, from cow or bull, perfectly prepared.</p>
              </div>
            </div>
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box">
                  <img src="assets/images/categorias/suinos.png" style={{ height: "100px" }} />
                </div>
                <h3>Pork</h3>
                <p>Flavorful, versatile, and rich in essential nutrients.</p>
              </div>
            </div>
            <div className="single-item">
              <div className="inner-box">
                <div className="icon-box">
                  <img src="assets/images/categorias/aves.png" style={{ height: "77px" }} />
                </div>
                <h3>Poultry</h3>
                <p>Tender, juicy, and full of flavor.</p>
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
              <span>About Us</span>
              <h2>Giannu Meats</h2>
            </div>
            <div className="text">
              <p>
                <strong>Giannu Meats</strong> is a registered brand of the company 
                <span style={{fontWeight: 'bold', fontStyle: 'italic'}}>
                  ZHA Services and Investments LDA</span>, an Angolan company that, among other activities, is dedicated to the commercialization of 
                <span style={{fontWeight: 'bold'}}>high-quality national meats</span>...
              </p>
            </div>
            <div className="link-box">
              <a href="PT/aempresa.html">
                Read More<i className="flaticon-right"></i>
              </a>
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
      <img className="img-fluid" src="/assets/images/produtos/foods/1.jpeg" style={{height:"600px"}} alt="Product 1" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/2.jpeg" style={{height:"600px"}} alt="Product 2" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/3.jpeg" style={{height:"600px"}} alt="Product 3" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/4.jpeg" style={{height:"600px"}} alt="Product 4" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/5.jpeg" style={{height:"600px"}} alt="Product 5" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/6.jpeg" style={{height:"600px"}} alt="Product 6" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/7.jpeg" style={{height:"600px"}} alt="Product 7" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/8.jpeg" style={{height:"600px"}} alt="Product 8" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/9.jpeg" style={{height:"600px"}} alt="Product 9" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/10.jpeg" style={{height:"600px"}} alt="Product 10" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/11.jpeg" style={{height:"600px"}} alt="Product 11" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/12.jpeg" style={{height:"600px"}} alt="Product 12" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/13.jpeg" style={{height:"600px"}} alt="Product 13" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/14.jpeg" style={{height:"600px"}} alt="Product 14" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/15.jpeg" style={{height:"600px"}} alt="Product 15" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/16.jpeg" style={{height:"600px"}} alt="Product 16" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/17.jpeg" style={{height:"600px"}} alt="Product 17" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/18.jpeg" style={{height:"600px"}} alt="Product 18" />
    </div>
  </div>
  <div className="service-block-one">
    <div className="">
      <img className="img-fluid" src="/assets/images/produtos/foods/19.jpeg" style={{height:"600px"}} alt="Product 19" />
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
              <li><a href="#">Add</a></li>
            </ul>
          </figure>
          <div className="lower-content">
            <div className="inner">
              <h6><a href="#">Barbecue Box</a></h6>
              <span className="price">78,026.00 Kz</span>
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
              <li><a href="#">Add</a></li>
            </ul>
          </figure>
          <div className="lower-content">
            <div className="inner">
              <h6><a href="#">Gulungo Box</a></h6>
              <span className="price">99,796.00 Kz</span>
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
              <li><a href="#">Add</a></li>
            </ul>
          </figure>
          <div className="lower-content">
            <div className="inner">
              <h6><a href="#">Kalandula Box</a></h6>
              <span className="price">55,507.00 Kz</span>
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
              <li><a href="#">Add</a></li>
            </ul>
          </figure>
          <div className="lower-content">
            <div className="inner">
              <h6><a href="#">Kandengue Box</a></h6>
              <span className="price">42,064.00 Kz</span>
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
              <li><a href="#">Add</a></li>
            </ul>
          </figure>
          <div className="lower-content">
            <div className="inner">
              <h6><a href="#">Kwanza Box</a></h6>
              <span className="price">71,967.00 Kz</span>
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
              <li><a href="#">Add</a></li>
            </ul>
          </figure>
          <div className="lower-content">
            <div className="inner">
              <h6><a href="#">Paty Pacheco Box</a></h6>
              <span className="price">63,018.00 Kz</span>
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
              <li><a href="#">Add</a></li>
            </ul>
          </figure>
          <div className="lower-content">
            <div className="inner">
              <h6><a href="#">Serra da Leba Box</a></h6>
              <span className="price">42,898 Kz</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="more-btn centred">
      <Link href="/EN/ourproducts"><a className="theme-btn">View All Products</a></Link>
    </div>
  </div>
</section>
<section className="service-section">
  <div className="auto-container">
    <div className="sec-title text-center">
      <span>The right choice</span>
      <h2>Our Valuable Partners</h2>
    </div>
    <div className="three-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
      {[
        "one.jpg",
        "two.jpg",
        "three.jpg",
        "four.jpg",
        "five.jpg",
        "six.jpg",
        "seven.jpg",
        "eight.jpg",
        "nine.jpg",
        "ten.jpg",
        "eleven.jpg",
        "twelve.jpg",
        "thirteen.jpg",
        "fourteen.jpg",
        "fifteen.jpg",
        "sixteen.jpg",
        "seventeen.jpg",
        "eighteen.jpg",
        "nineteen.jpg",
        "twenty.jpg"
      ].map((image, index) => (
        <div className="service-block-one" key={index}>
          <div className="">
            <img className="img-fluid" src={`assets/images/parceiros/${image}`} alt={`Parceiro ${index + 1}`} />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section style={{marginTop:"-100px"}}>
<BeefCutsMap />
</section>

</div>

)}