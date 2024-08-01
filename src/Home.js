function Home()
{
    return(<>
     <div className="hero_area">
    <section className="slider_section ">
      <div className="slider_bg_box">
        <img src="images/slider-bg.jpg" alt="" />
      </div>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 ">
                  <div className="detail-box">
                    <h1>
                      We Provide best <br/>
                      Transport Service
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 ">
                  <div className="detail-box">
                    <h1>
                      We Provide best <br />
                      Transport Service
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container ">
              <div className="row">
                <div className="col-md-7 ">
                  <div className="detail-box">
                    <h1>
                      We Provide best <br />
                      Transport Service
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum magnam, voluptates distinctio, officia architecto tenetur debitis hic aspernatur libero commodi atque fugit adipisci, blanditiis quidem dolorum odit voluptas? Voluptate, eveniet?
                    </p>
                    <div className="btn-box">
                      <a href="" className="btn1">
                        Get A Quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>

    </section>
    </div>
        <section className="service_section layout_padding">
    <div className="service_container">
      <div className="container ">
        <div className="heading_container">
          <h2>
            Our <span>Services</span>
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <div className="box ">
              <div className="img-box">
                <img src="images/s1.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Air Transport
                </h5>
                <p>
                  fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The
                  point of using
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="box ">
              <div className="img-box">
                <img src="images/s2.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Cargo Transport
                </h5>
                <p>
                  fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The
                  point of using
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="box ">
              <div className="img-box">
                <img src="images/s3.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Trucks Transport
                </h5>
                <p>
                  fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The
                  point of using
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="box ">
              <div className="img-box">
                <img src="images/s4.png" alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  Train Transport
                </h5>
                <p>
                  fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The
                  point of using
                </p>
                <a href="">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="contact_section">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4 col-md-5 offset-md-1">
          <div className="heading_container">
            <h2>
              Contact Us
            </h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-5 offset-md-1">
          <div className="form_container contact-form">
            <form action="">
              <div>
                <input type="text" placeholder="Your Name" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" className="message-box" placeholder="Message" />
              </div>
              <div className="btn_box">
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-7 col-md-6 px-0">
          <div className="map_container">
            <div className="map">
              <div id="googleMap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>)
}
export default Home;