 import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function News() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-4">
      <div className="container">
        <div className="row align-items-start">


          <div className="col-md-9">

     

            <div className="row align-items-center border rounded p-3 mb-4">

              <div className="col-md-5">
                <img
                  src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage1/img-1.png"
                  alt=""
                  className="img-fluid w-100 rounded"
                  style={{
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="col-md-7">
                <span className="bg-secondary px-2 py-1 rounded-1 text-info">
                  Technology
                </span>

                <h3 className="mt-3 fw-bold">
                  Augmented and Virtual Reality Challenges and Future Trends
                  Virtual Reality Shopping
                </h3>

                <p className="text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-3 text-secondary">
                    <span>August 30, 2022</span>
                    <span>4Mins read</span>
                  </div>

                  <span className="text-warning fw-bold">
                    Read more
                  </span>
                </div>
              </div>

            </div>


           
            <div className="row">

             
              <div className="col-md-4 mb-4">
                <div className="d-flex flex-column h-100">

                  <img
                    src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-13.jpg"
                    alt=""
                    className="img-fluid w-100 rounded mb-3"
                    style={{
                      height: "260px",
                      objectFit: "cover",
                    }}
                  />

                  <span className="bg-secondary me-auto px-2 py-1 rounded-1 text-info">
                    Technology
                  </span>

                  <h3 className="h5 fw-bold mt-3">
                    The latest technologies to be used for VR in 2022
                  </h3>

                  <p className="text-secondary">
                    Donec rhoncus quis diam sit amet faucibus. Vivamus
                    pellentesque, sem sed consectetur.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3 text-secondary">
                      <small>August 30, 2022</small>
                      <small>3Mins read</small>
                    </div>

                    <span className="text-warning">
                      Read more
                    </span>
                  </div>

                </div>
              </div>


              <div className="col-md-4 mb-4">
                <div className="d-flex flex-column h-100">

                  <img
                    src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-14.jpg"
 alt=""
                    className="img-fluid w-100 rounded mb-3"
                    style={{
                      height: "260px",
                      objectFit: "cover",
                    }}
                  />

                  <span className="bg-secondary me-auto px-2 py-1 rounded-1 text-info">
                    Technology
                  </span>

                  <h3 className="h5 fw-bold mt-3">
                    How can Web 3.0 Bring Changes to the Gaming?
                  </h3>

                  <p className="text-secondary">
                    Donec rhoncus quis diam sit amet faucibus. Vivamus
                    pellentesque, sem sed consectetur.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3 text-secondary">
                      <small>August 30, 2022</small>
                      <small>4Mins read</small>
                    </div>

                    <span className="text-warning">
                      Read more
                    </span>
                  </div>

                </div>
              </div>


          
              <div className="col-md-4 mb-4">
                <div className="d-flex flex-column h-100">

                  <img
                    src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-15.jpg"
                    alt=""
                    className="img-fluid w-100 rounded mb-3"
                    style={{
                      height: "260px",
                      objectFit: "cover",
                    }}
                  />

                  <span className="bg-secondary me-auto px-2 py-1 rounded-1 text-info">
                    Technology
                  </span>

                  <h3 className="h5 fw-bold mt-3">
                    Gaming And Its Three Challenges
                  </h3>

                  <p className="text-secondary">
                    Donec rhoncus quis diam sit amet faucibus. Vivamus
                    pellentesque, sem sed consectetur.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3 text-secondary">
                      <small>August 15, 2022</small>
                      <small>5Mins read</small>
                    </div>

                    <span className="text-warning">
                      Read more
                    </span>
                  </div>

                </div>
              </div>


          
              <div className="col-md-4 mb-4">
                <div className="d-flex flex-column h-100">

                  <img
                    src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-5.jpg"
                    alt=""
                    className="img-fluid w-100 rounded mb-3"
                    style={{
                      height: "260px",
                      objectFit: "cover",
                    }}
                  />

                  <span className="bg-secondary me-auto px-2 py-1 rounded-1 text-info">
                    Development
                  </span>

                  <h3 className="h5 fw-bold mt-3">
                    HTML5 – The Future of Mobile App Development
                  </h3>

                  <p className="text-secondary">
                    Donec rhoncus quis diam sit amet faucibus. Vivamus
                    pellentesque, sem sed consectetur.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3 text-secondary">
                      <small>August 12, 2022</small>
                      <small>9Mins read</small>
                    </div>

                    <span className="text-warning">
                      Read more
                    </span>
                  </div>

                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="d-flex flex-column h-100">

                  <img
                    src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-4.jpg"
                    alt=""
                    className="img-fluid w-100 rounded mb-3"
                    style={{
                      height: "260px",
                      objectFit: "cover",
                    }}
                  />

                  <span className="bg-secondary me-auto px-2 py-1 rounded-1 text-info">
                    Technology
                  </span>

                  <h3 className="h5 fw-bold mt-3">
                    The Twitter-Musk trial is now on pause
                  </h3>

                  <p className="text-secondary">
                    Donec rhoncus quis diam sit amet faucibus. Vivamus
                    pellentesque, sem sed consectetur.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3 text-secondary">
                      <small>August 30, 2022</small>
                      <small>6Mins read</small>
                    </div>

                    <span className="text-warning">
                      Read more
                    </span>
                  </div>

                </div>
              </div>


          
              <div className="col-md-4 mb-4">
                <div className="d-flex flex-column h-100">

                  <img
                    src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-2.jpg"
                    alt=""
                    className="img-fluid w-100 rounded mb-3"
                    style={{
                      height: "260px",
                      objectFit: "cover",
                    }}
                  />

                  <span className="bg-secondary me-auto px-2 py-1 rounded-1 text-info">
                    Technology
                  </span>

                  <h3 className="h5 fw-bold mt-3">
                    Apple unveils iPhone 14 at far out event
                  </h3>

                  <p className="text-secondary">
                    Donec rhoncus quis diam sit amet faucibus. Vivamus
                    pellentesque, sem sed consectetur.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex gap-3 text-secondary">
                      <small>August 30, 2022</small>
                      <small>4Mins read</small>
                    </div>

                    <span className="text-warning">
                      Read more
                    </span>
                  </div>

                </div>
              </div>

            </div>

          </div>



          <div className="col-md-3">
            <div className="border rounded p-4">

              <h4 className="mb-3">
                Blog Categories
              </h4>

              <hr />

              <p>Technology Trending</p>
              <p>Entertainment</p>
              <p>Tech Reviews</p>
              <p>Gaming Blog</p>
              <p>Crypto news</p>

              {showMore && (
                <>
                  <p>Software Development</p>
                  <p>FinTech</p>
                  <p>Health Tech</p>
                  <p>Tips and Tricks</p>
                  <p>Make money online</p>
                  <p>Home theater</p>
                  <p>Cameras & drones</p>
                  <p>PC gaming</p>
                </>
              )}

              <button
                type="button"
                className="btn btn-link text-warning p-0 text-decoration-none fw-bold"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "See Less" : "See More"}
              </button>
 </div>




            <div className="mt-5">

              <h4 className="mb-2">
                Trending News
              </h4>

              <div
                style={{
                  width: "100px",
                  height: "3px",
                  backgroundColor: "#f0a15b",
                }}
              ></div>

              <hr />

              <Swiper
                modules={[Autoplay]}
                direction="vertical"
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={700}
                style={{
                  height: "330px",
                }}
              >

                {/* TREND 1 */}

                <SwiperSlide>
                  <div className="d-flex align-items-center">

                    <img
                      src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-1.jpg"
                      alt=""
                      style={{
                        width: "90px",
                        height: "70px",
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                      className="rounded me-3"
                    />

                    <div className="flex-grow-1">

                      <h6
                        className="mb-2 fw-normal"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.4",
                        }}
                      >
                        The latest technologies to be used for VR in 2022
                      </h6>

                      <div
                        className="d-flex align-items-center gap-2 text-secondary"
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span>August 30, 2022</span>
                        <span>3Mins read</span>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>


                {/* TREND 2 */}

                <SwiperSlide>
                  <div className="d-flex align-items-center">

                    <img
                      src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-2.jpg"
                      alt=""
                      style={{
                        width: "90px",
                        height: "70px",
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                      className="rounded me-3"
                    />

                    <div className="flex-grow-1">

                      <h6
                        className="mb-2 fw-normal"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.4",
                        }}
                      >
                        The fate of Elon Musks deal to buy Twitter
                      </h6>

                      <div
                        className="d-flex align-items-center gap-2 text-secondary"
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span>August 30, 2022</span>
                        <span>4Mins read</span>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>


                {/* TREND 3 */}

                <SwiperSlide>
                  <div className="d-flex align-items-center">
 <img
                      src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-4.jpg"
                      alt=""
                      style={{
                        width: "90px",
                        height: "70px",
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                      className="rounded me-3"
                    />

                    <div className="flex-grow-1">

                      <h6
                        className="mb-2 fw-normal"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.4",
                        }}
                      >
                        Binance blockchain hit by $570 million crypto
                      </h6>

                      <div
                        className="d-flex align-items-center gap-2 text-secondary"
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span>August 30, 2022</span>
                        <span>5Mins read</span>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>


                {/* TREND 4 */}

                <SwiperSlide>
                  <div className="d-flex align-items-center">

                    <img
                      src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-5.jpg"
                      alt=""
                      style={{
                        width: "90px",
                        height: "70px",
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                      className="rounded me-3"
                    />

                    <div className="flex-grow-1">

                      <h6
                        className="mb-2 fw-normal"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.4",
                        }}
                      >
                        The Twitter-Musk trial is now on pause
                      </h6>

                      <div
                        className="d-flex align-items-center gap-2 text-secondary"
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span>August 30, 2022</span>
                        <span>6Mins read</span>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>


                {/* TREND 5 */}

                <SwiperSlide>
                  <div className="d-flex align-items-center">

                    <img
                      src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-13.jpg"
                      alt=""
                      style={{
                        width: "90px",
                        height: "70px",
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                      className="rounded me-3"
                    />

                    <div className="flex-grow-1">

                      <h6
                        className="mb-2 fw-normal"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.4",
                        }}
                      >
                        New technology trends in virtual reality
                      </h6>

                      <div
className="d-flex align-items-center gap-2 text-secondary"
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span>August 30, 2022</span>
                        <span>3Mins read</span>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>
                
                {/* TREND 5 */}

                <SwiperSlide>
                  <div className="d-flex align-items-center">

                    <img
                      src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-13.jpg"
                      alt=""
                      style={{
                        width: "90px",
                        height: "70px",
                        objectFit: "cover",
                        flexShrink: 0,
                      }}
                      className="rounded me-3"
                    />

                    <div className="flex-grow-1">

                      <h6
                        className="mb-2 fw-normal"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.4",
                        }}
                      >
                        New technology trends in virtual reality
                      </h6>

                      <div
className="d-flex align-items-center gap-2 text-secondary"
                        style={{
                          fontSize: "12px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span>August 30, 2022</span>
                        <span>3Mins read</span>
                      </div>

                    </div>
                  </div>
                </SwiperSlide>


              </Swiper>

            </div>


            {/* POPULAR TAGS */}

            <div className="mt-5">

              <h4 className="mb-2">
                Popular Tags
              </h4>

              <div
                style={{
                  width: "100px",
                  height: "3px",
                  backgroundColor: "#f0a15b",
                }}
              ></div>

              <hr />

              <div className="d-flex flex-wrap gap-2">

                <span className="border rounded px-3 py-2">
               Games
                </span>

                <span className="border rounded px-3 py-2">
                Elctronics
                </span>

                <span className="border rounded px-3 py-2">
                  Video
                </span>

                <span className="border rounded px-3 py-2">
                  cellphone
                </span>

                <span className="border rounded px-3 py-2">
                  indoor
                </span>

                <span className="border rounded px-3 py-2">
                  VGA Card
                </span>
                
                <span className="border rounded px-3 py-2">
                  USB
                </span>
                
                <span className="border rounded px-3 py-2">
                  Lightning
                </span>
                
                <span className="border rounded px-3 py-2">
                  Camera
                </span>
                
                <span className="border rounded px-3 py-2">
                  Window
                </span>
                
                <span className="border rounded px-3 py-2">
                  AIr Vent
                </span>
                
                <span className="border rounded px-3 py-2">
                  Bedroom
                </span>
                <span className="border rounded px-3 py-2">
                  Laptop
                </span>
                
                <span className="border rounded px-3 py-2">
                  Dashbord
                </span>
                
                <span className="border rounded px-3 py-2">
                  Keyboard
                </span>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default News;