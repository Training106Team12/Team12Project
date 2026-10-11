import { Container, Row, Col, Card, Badge, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import styles from "./ShopGrid.module.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import BestSeller from "./BestSeller";
import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { ProductContext } from "./ProductContext";
import { CartContext } from "../context/CartContext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Hero4() {
  const { cartProduct } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [showMore, setShowMore] = useState(false);
  const [price, setPrice] = useState([0, 150]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [hoveredColor, setHoveredColor] = useState(null);
  const pcolor = { color: "white" };

  const h1Size = { fontSize: "4rem" };
  const h4Size = { fontSize: "1.5rem" };
  const pSize = { fontSize: "1rem" };
  const bgSlide = { backgroundColor: "#425a8b" };
  const btnColorBlue = { backgroundColor: "#0e2f65" };

  const brands = [
    { name: "Asus", logo: " /img/assus.svg" },
    { name: "Sony", logo: " /img/casio.svg" },
    { name: "Acer", logo: " /img/acer.svg" },
    { name: "Nokia", logo: " /img/nokia.svg" },
    { name: "Asus", logo: " /img/assus.svg" },
    { name: "Sony", logo: " /img/casio.svg" },
  ];

  const offer = {
    backgroundColor: "#ffbf00",
    position: "absolute",
    top: "5px",
    left: "5px",
    padding: "10px",
    color: "black",
    boxShadow:
      "-5px 4px 12px rgba(0, 0, 0, 0.91), inset -5px 4px 12px rgba(172, 150, 23, 0.9)",
  };
  return (
    <Container className="mt-5">
      <Row className="g-4 align-items-stretch">
        {/*My Left Slide*/}
        <Col lg={7} md={12} sm={12} className="d-flex">
          <Swiper
            className="w-100 h-100"
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
            }}
          >
            <SwiperSlide className="h-100">
              <div
                className="card h-100 p-5 text-start border-0"
                style={{
                  ...pcolor,
                  ...bgSlide,
                  backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage4/bg-banner.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <span style={offer} className="rounded-pill">
                  -25%
                </span>

                <h2
                  style={pSize}
                  className="my-3 bg-success rounded-pill px-3 py-1  me-auto"
                >
                  Best Sale
                </h2>

                <h1 style={h1Size} className="w-100 w-lg-75 p-xm-1">
                  Omos Mobile KMSZ 14 2022
                </h1>

                <ul>
                  <li>6.8" WQHD+ Edge Screen.</li>
                  <li>5,000mAh (45W Charging)</li>
                  <li>8GB RAM | 128GB Storage</li>
                </ul>

                <div className="d-flex gap-2">
                  <a
                    href="#"
                    className="text-white border-0 btn fw-bold rounded-2"
                    style={btnColorBlue}
                  >
                    Shop now
                  </a>

                  <a
                    href="#"
                    className="border-0 btn rounded-2"
                    style={{
                      ...pcolor,
                      backgroundColor: "transparent",
                    }}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="h-100">
              <div
                className="card h-100 p-5 text-start border-0"
                style={{
                  ...pcolor,
                  ...bgSlide,
                  backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage4/bg-banner-2.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <span style={offer} className="rounded-pill">
                  -25%
                </span>

                <h2
                  style={pSize}
                  className="my-3 bg-success rounded-pill px-3 py-1 d-table me-auto"
                >
                  Best Sale
                </h2>

                <h1 style={h1Size} className="w-100 w-lg-75">
                  Omos Mobile KMSZ 14 2022
                </h1>

                <ul>
                  <li>6.8" WQHD+ Edge Screen.</li>
                  <li>5,000mAh (45W Charging)</li>
                  <li>8GB RAM | 128GB Storage</li>
                </ul>

                <div className="d-flex gap-2">
                  <a
                    href="#shop"
                    className="text-white border-0 btn fw-bold rounded-2"
                    style={btnColorBlue}
                  >
                    Shop now
                  </a>

                  <a
                    href="#learn-more"
                    className="border-0 btn rounded-2"
                    style={{
                      ...pcolor,
                      backgroundColor: "transparent",
                    }}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="h-100">
              <div
                className="card h-100 p-5 text-start border-0"
                style={{
                  ...pcolor,
                  ...bgSlide,
                  backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage4/bg-banner-3.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <span style={offer} className="rounded-pill">
                  -25%
                </span>

                <h2
                  style={pSize}
                  className="my-3 bg-success rounded-pill px-3 py-1 d-table me-auto"
                >
                  Best Sale
                </h2>

                <h1 style={h1Size} className="w-100 w-lg-75">
                  Omos Mobile KMSZ 14 2022
                </h1>

                <ul>
                  <li>6.8" WQHD+ Edge Screen.</li>
                  <li>5,000mAh (45W Charging)</li>
                  <li>8GB RAM | 128GB Storage</li>
                </ul>

                <div className="d-flex gap-2">
                  <a
                    href="#shop"
                    className="text-white border-0 btn fw-bold rounded-2"
                    style={btnColorBlue}
                  >
                    Shop now
                  </a>

                  <a
                    href="#learn-more"
                    className="border-0 btn rounded-2"
                    style={{
                      ...pcolor,
                      backgroundColor: "transparent",
                    }}
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>

        {/* My Right slide */}
        <Col lg={5} className="d-flex justify-content-center">
          <Row className="g-4 w-100">
            <Col lg={6} md={6} sm={6} xs={6}>
              <Row className=" ">
                <Col lg={12} md={12} sm={12} xs={12} className="d-flex">
                  <div
                    className="card text-center border-0 py-2 w-100 h-100"
                    style={{
                      ...pcolor,
                      minHeight: "150px",
                      backgroundColor: "#90b8cc",
                      backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage1/metaverse.png")`,
                      backgroundPosition: "right bottom",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "auto 70%",
                    }}
                  >
                    <p className="my-0 text-black">New Arrivals</p>
                    <h4 className="mb-0 text-black" style={h4Size}>
                      Tables Collection
                    </h4>
                  </div>
                </Col>

                <Col
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  className="h-100 mt-5 pb-0 d-flex"
                >
                  <div
                    className="card p-4 border-0 py-2 w-100 h-100 d-flex flex-column justify-content-between"
                    style={{
                      ...pcolor,
                      minHeight: "325px",
                      backgroundColor: "#78c96d",
                      backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/headphone.png")`,
                      backgroundPosition: "bottom",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 70%",
                    }}
                  >
                    <div>
                      <p className="my-0 text-black">Headphone</p>
                      <h4 className="mb-0 text-black" style={h4Size}>
                        Rockez 547
                      </h4>
                    </div>

                    <p className="mb-3 text-black text-uppercase fw-semibold">
                      Music everywhere anytime
                    </p>

                    <button className="btn btn-warning w-75 mt-auto">
                      Shop Now
                    </button>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={6} md={6} sm={6} xs={6}>
              <Row>
                <Col
                  lg={12}
                  className="d-flex justify-content-between align-items-center gap-2 flex-column flex-lg-row flex-md-row flex-sm-row flex-xs-row"
                >
                  <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    autoplay={{
                      delay: 5000,
                    }}
                    speed={2000}
                    className=" border-3 border border-danger rounded-1"
                    style={{
                      width: "100%",
                      minHeight: "100%",
                    }}
                  >
                    <SwiperSlide className="d-flex align-items-center justify-content-center flex-column gap-1  ">
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion1.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion2.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion3.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion4.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion5.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion6.png"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex align-items-center justify-content-center flex-column gap-1  ">
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion6.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion5.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion4.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion3.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion2.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion1.png"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex align-items-center justify-content-center flex-column  gap-1 ">
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion1.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion2.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion3.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion4.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion5.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion6.png"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex align-items-center justify-content-center flex-column  gap-1 ">
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion6.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion5.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion4.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion3.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion2.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion1.png"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex align-items-center justify-content-center flex-column gap-1  ">
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion1.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion2.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion3.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion4.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion5.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion6.png"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide className="d-flex align-items-center justify-content-center flex-column  gap-1 ">
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion6.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion5.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion4.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion3.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion2.png"
                        alt=""
                      />
                      <img
                        className="p-1 w-100"
                        src=" /home4/promotion1.png"
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>
                  <button className="btn btn-outline-danger w-100 d-block  d-xl-none d-lg-none d-md-none  d-sm-none">
                    {" "}
                    See All
                  </button>
                </Col>{" "}
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Swiper
        modules={[Autoplay]}
        speed={1000}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="align-items-center mt-5"
      >
        {brands.map((brand, index) => (
          <SwiperSlide
            key={index}
            className="text-center d-flex justify-content-center align-items-center"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="img-fluid brand-logo "
              style={{
                width: "100%",
                maxWidth: "150px",
                height: "64px",
                objectFit: "contain",
                filter: "grayscale(100%)",
                opacity: 0.6,
                transition: "all 0.3s",
              }}
              onMouseOver={(hover) => {
                hover.currentTarget.style.filter = "grayscale(0%)";
                hover.currentTarget.style.opacity = "1";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.filter = "grayscale(100%)";
                e.currentTarget.style.opacity = "0.6";
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Row className="g-4">
        <Col xs={12}>
          <Swiper
            className="w-100"
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={1000}
            breakpoints={{
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {cartProduct.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <Card
                  className="p-3  border-0 position-relative mb-3 mx-auto w-100 h-100"
                  style={{ maxWidth: "300px" }}
                >
                  <Badge
                    bg="danger"
                    className="position-absolute top-0 start-0 m-3 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "45px",
                      height: "45px",
                      backgroundColor: "#e65c00",
                    }}
                  >
                    {item.offer}
                  </Badge>

                  <div className="text-center my-4">
                    <Card.Img
                      src={item.img}
                      alt={item.name}
                      style={{ maxHeight: "180px", objectFit: "contain" }}
                    />
                  </div>

                  <Card.Body className="p-0 pt-2">
                    <span className="text-muted small">{item.name}</span>
                    <Card.Title
                      className="fw-bold my-1"
                      style={{ fontSize: "1rem", color: "#333" }}
                    >
                      {item.description}
                    </Card.Title>

                    <div
                      className="d-flex align-items-center my-1 text-warning"
                      style={{ fontSize: "0.85rem" }}
                    >
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <span className="text-muted ms-1">(65)</span>
                    </div>

                    <div className="d-flex align-items-baseline gap-2 my-2">
                      <span className="fw-bold text-dark fs-5">
                        {item.price}
                      </span>
                      <span className="text-muted text-decoration-line-through small">
                        {item.oldprice}
                      </span>
                    </div>

                    <ProgressBar
                      now={34}
                      variant="warning"
                      style={{ height: "6px", backgroundColor: "#e9ecef" }}
                      className="my-2"
                    />

                    <div
                      className="d-flex justify-content-between text-muted"
                      style={{ fontSize: "0.75rem" }}
                    >
                      <span>
                        Available: <b>563</b>
                      </span>
                      <span>
                        Sold: <b>289</b>
                      </span>
                    </div>

                    <div>
                      <button
                        className="btn btn-outline-primary rounded-2 w-100"
                        onClick={() => addToCart(item, 1)}
                        name={item.id}
                        id={item.id}
                      >
                        Add to Cart
                      </button>
                    </div>

                    <hr className="my-2 text-muted" />

                    <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                      <ul className="list-unstyled mb-0 ps-0">
                        <li>{item.footer}</li>
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Col>
      </Row>
      
      <div className={`${styles.shop} row g-4 align-items-start mt-5`}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <span>
            <a href="./Home">Home</a>
          </span>
          <span>›</span>
          <span>Elcetronics</span>
          <span>›</span>
          <span>cell phone</span>
          <span>›</span>
          <span>accessories</span>
        </div>

        {/* Sidebar */}
        <div className="col-12 col-lg-3 order-2 order-lg-1">
          <div className={styles.sidebar}>
            <h5>Vendor by industry</h5>

            <ul className={styles.industryList}>
              <li>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Beauty
                  </span>
                  <span className={styles.count}>09</span>
                </a>
              </li>

              <li>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Clothing
                  </span>
                  <span className={styles.count}>12</span>
                </a>
              </li>

              <li>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Electronics
                  </span>
                  <span className={styles.count}>24</span>
                </a>
              </li>

              <li>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Food
                  </span>
                  <span className={styles.count}>34</span>
                </a>
              </li>

              <li>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Furniture
                  </span>
                  <span className={styles.count}>65</span>
                </a>
              </li>

              <li className={styles.hiddenItem}>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Health
                  </span>
                  <span className={styles.count}>15</span>
                </a>
              </li>

              <li className={styles.hiddenItem}>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Jewelry
                  </span>
                  <span className={styles.count}>67</span>
                </a>
              </li>

              <li className={styles.hiddenItem}>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Shoes
                  </span>
                  <span className={styles.count}>89</span>
                </a>
              </li>

              <li className={styles.hiddenItem}>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Sports
                  </span>
                  <span className={styles.count}>23</span>
                </a>
              </li>

              <li className={styles.hiddenItem}>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Beauty Care
                  </span>
                  <span className={styles.count}>98</span>
                </a>
              </li>

              <li className={showMore ? styles.hiddenItem : ""}>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Automotive
                  </span>
                  <span className={styles.count}>98</span>
                </a>
              </li>

              <li className={showMore ? styles.hiddenItem : ""}>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Books
                  </span>
                  <span className={styles.count}>104</span>
                </a>
              </li>

              <li className={showMore ? styles.hiddenItem : ""}>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Toys
                  </span>
                  <span className={styles.count}>56</span>
                </a>
              </li>

              <li className={showMore ? styles.hiddenItem : ""}>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Home Decor
                  </span>
                  <span className={styles.count}>78</span>
                </a>
              </li>

              <li className={showMore ? styles.hiddenItem : ""}>
                <a href="./ShopGrid">
                  <span className={styles.categoryName}>
                    <i className="bi bi-chevron-left"></i>
                    Accessories
                  </span>
                  <span className={styles.count}>36</span>
                </a>
              </li>
            </ul>
            <button
              type="button"
              className={styles.learnMore}
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "Laern More" : "Learn More"}
            </button>

            {/* tags */}
            <h5 className={styles.tagsTitle}>Products tags</h5>

            <div className={styles.tags}>
              <button>Games Electronics</button>
              <button>Video</button>
              <button>Cell Phone</button>

              <button>Indoor</button>
              <button>VGA Card</button>

              <button>USB</button>
              <button>Lighting</button>
              <button>Camera</button>

              <button>Window</button>
              <button>Air Vent</button>
              <button>Bedroom</button>

              <button>Laptop</button>
              <button>Dashboard</button>

              <button>Keyboard</button>
            </div>
            {/* product filter */}
            <div className={styles.productFilter}>
              <h5>Price</h5>

              <div className="pt-5 w-50 mx-auto">
                {" "}
                <Slider
                  range
                  min={0}
                  max={300}
                  value={price}
                  onChange={setPrice}
                  railStyle={{ backgroundColor: "#dde4f0" }}
                  trackStyle={{ backgroundColor: "#Fd9636" }}
                  handleStyle={[
                    {
                      backgroundColor: "#Fd9636",
                      borderColor: "#Fd9636",
                    },
                    {
                      backgroundColor: "#Fd9636",
                      borderColor: "#Fd9636",
                    },
                  ]}
                ></Slider>
              </div>

              <p className={styles.priceText}>Price Range:</p>
              <strong>
                ${price[0]} - ${price[1]}
              </strong>

              {/* Price checkboxes */}
              <div className={styles.priceOptions}>
                <div className="d-flex justify-content-between align-items-center">
                  <label>
                    <input type="checkbox" />
                    <span>Free - $100</span>
                  </label>
                  <span className={styles.countt}>145</span>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <label>
                    <input type="checkbox" />
                    <span>$100 - $200</span>
                  </label>
                  <span className={styles.countt}>56</span>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <label>
                    <input type="checkbox" />
                    <span>$200 - $400</span>
                  </label>
                  <span className={styles.countt}>23</span>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <label>
                    <input type="checkbox" />
                    <span>$400 - $600</span>
                  </label>
                  <span className={styles.countt}>43</span>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <label>
                    <input type="checkbox" />
                    <span>$600 - $800</span>
                  </label>
                  <span className={styles.countt}>65</span>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <label>
                    <input type="checkbox" />
                    <span>Over $1000</span>
                  </label>
                  <span className={styles.countt}>56</span>
                </div>
              </div>
            </div>

            {/* Brands */}
            <div className={styles.brandFilter}>
              <h5>Brands</h5>

              <div className="d-flex justify-content-between align-items-center">
                <label>
                  <input type="checkbox" />
                  <span>Apple</span>
                </label>
                <span className={styles.countt}>12</span>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <label>
                  <input type="checkbox" />
                  <span>Sony</span>
                </label>
                <span className={styles.countt}>34</span>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <label>
                  <input type="checkbox" />
                  <span>Toshiba</span>
                </label>
                <span className={styles.countt}>56</span>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <label>
                  <input type="checkbox" />
                  <span>Asus</span>
                </label>
                <span className={styles.countt}>78</span>
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <label>
                  <input type="checkbox" />
                  <span>Samsung</span>
                </label>
                <span className={styles.countt}>23</span>
              </div>
            </div>
            {/* color */}
            <div className="mt-4">
              <h5 className="mb-4">Color</h5>

              <div className="row row-cols-5 gx-5 gy-3">
                {[
                  { name: "Red", color: "#F53658" },
                  { name: "Green", color: "#5BC694" },
                  { name: "Blue", color: "#1AAEED" },
                  { name: "Purple", color: "#9C79FF" },
                  { name: "Black", color: "#050505" },
                  { name: "Gray", color: "#DDE4F0" },
                  { name: "Pink", color: "#FF94BC" },
                  { name: "Brown", color: " #AB5F3E" },
                  { name: "Yellow", color: " #F9D915" },
                ].map((item) => {
                  const isSelected = selectedColors.includes(item.name);
                  const isHovered = hoveredColor === item.name;

                  return (
                    <div
                      className="col d-flex flex-column align-items-center gap-2"
                      key={item.name}
                    >
                      <button
                        type="button"
                        className={styles.colorCircle}
                        style={{ backgroundColor: item.color }}
                        onMouseEnter={() => setHoveredColor(item.name)}
                        onMouseLeave={() => setHoveredColor(null)}
                        onClick={() => {
                          setSelectedColors((prev) =>
                            prev.includes(item.name)
                              ? prev.filter((color) => color !== item.name)
                              : [...prev, item.name],
                          );
                        }}
                      >
                        {(isSelected || isHovered) && (
                          <i className="bi bi-check"></i>
                        )}
                      </button>

                      <span className="small">{item.name}</span>
                    </div>
                  );
                })}
              </div>

              <button
                type="button"
                className="btn d-flex align-items-center gap-2 mx-auto mt-4"
                style={{
                  backgroundColor: "#eef5fc",
                  color: "#315f9f",
                  border: "none",
                  padding: "5px 10px",
                }}
              >
                <i className="bi bi-sliders"></i>
                More Filters
              </button>
            </div>
          </div>
          <BestSeller />

          <div className={styles.featureBox}>
            <div className={styles.featureContent}>
              <span className={styles.featureNumber}>No.9</span>

              <h3>
                Sensitive Touch
                <br />
                without fingerprint
              </h3>

              <p>Smooth handle and accurate click</p>

              <a href="#">View Details</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-9 order-1 order-lg-2">
          {/* Banner */}
          <div className={styles.shopBanner}>
            <div className={styles.bannerContent}></div>
          </div>

          {/* filtter bar */}
          <div className={styles.filterBar}>
            <button className={styles.filterButton}>
              <i className="bi bi-sliders"></i>
              All Filters
            </button>

            <div className={styles.results}>Showing 1-16 of 17 results</div>

            <div className={styles.sort}>
              <span>Sort by :</span>
              <select>
                <option>Latest</option>
                <option>Oldest</option>
              </select>
            </div>

            <div className={styles.showGroup}>
              <span> Show</span>
              <select>
                <option>30 items</option>
              </select>
            </div>

            <button className={styles.viewButton}>
              <i className="bi bi-list"></i>
            </button>

            <button className={styles.viewButton}>
              <i className="bi bi-grid-3x3-gap"></i>
            </button>
          </div>

          <Row>
            {cartProduct.map((item) => (
              <Col
                key={item.id}
                lg={3}
                md={6}
                sm={12}
                className="d-flex justify-content-center align-item-center"
              >
                <Card
                  className="p-3 shadow-lg border-0 position-relative mb-3 mx-0 w-100  "
                  style={{ maxWidth: "300px" }}
                >
                  <Badge
                    bg="danger"
                    className="position-absolute top-0 start-0 m-3 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "45px",
                      height: "45px",
                      backgroundColor: "#e65c00",
                    }}
                  >
                    {item.offer}
                  </Badge>

                  <div className="text-center my-4">
                    <Card.Img
                      src={item.img}
                      alt={item.name}
                      style={{ maxHeight: "180px", objectFit: "contain" }}
                    />
                  </div>

                  <div className="d-flex justify-content-center gap-1 my-2"></div>

                  <Card.Body className="p-0 pt-2">
                    <span className="text-muted small">{item.name}</span>
                    <Card.Title
                      className="fw-bold my-1"
                      style={{ fontSize: "1rem", color: "#333" }}
                    >
                      {item.description}
                    </Card.Title>

                    <div
                      className="d-flex align-items-center my-1 text-warning"
                      style={{ fontSize: "0.85rem" }}
                    >
                      <FaStar />

                      <FaStar />

                      <FaStar />

                      <FaStar />

                      <FaStar />

                      <span className="text-muted ms-1">(65)</span>
                    </div>

                    <div className="d-flex align-items-baseline gap-2 my-2">
                      <span className="fw-bold text-dark fs-5">
                        {item.price}
                      </span>
                      <span className="text-muted text-decoration-line-through small">
                        {item.oldprice}
                      </span>
                    </div>

                    <ProgressBar
                      now={34}
                      variant="warning"
                      style={{ height: "6px", backgroundColor: "#e9ecef" }}
                      className="my-2"
                    />

                    <div
                      className="d-flex justify-content-between text-muted"
                      style={{ fontSize: "0.75rem" }}
                    >
                      <span>
                        Available: <b>563</b>
                      </span>
                      <span>
                        Sold: <b>289</b>
                      </span>
                    </div>

                    <div>
                      <button
                        className="btn btn-outline-primary rounded-2 w-100"
                        onClick={() => addToCart(item, 1)}
                        name={item.id}
                        id={item.id}
                      >
                        Add to Cart
                      </button>
                    </div>

                    <hr className="my-2 text-muted" />

                    <div className="text-muted" style={{ fontSize: "0.75rem" }}>
                      <ul className="list-unstyled mb-0 ps-0">
                        <li>{item.footer}</li>
                      </ul>
                    </div>
                  </Card.Body>
                </Card>{" "}
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Row>
        
                <Swiper
                  className="w-100 h-100 "
                  modules={[Pagination, Autoplay]}
                  slidesPerView={1}
                  autoplay={{ delay: 5000 }}
                  speed={100}
                  breakpoints={{
                    576: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                  }}
                >
                  <SwiperSlide className="my-5 p-3">
                    <div className="d-flex flex-column h-100">
                      <img
                        src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-5.jpg"
                        alt=""
                        style={{ height: "200px", backgroundSize: "cover" }}
                        className="mb-3 rounded  "
                      />
                      <span className="bg-secondary me-auto px-2 py-1 rounded-1 pSize text-info">
                        Development
                      </span>
                      <h3 className="mt-3 me-auto h5 mb-2">
                        HTML5 – The Future of Mobile App Development
                      </h3>
                      <p className="lead mb-0">August 12, 20229 Mins read</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="my-5 p-3">
                    <div className="d-flex flex-column h-100">
                      <img
                        src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-1.jpg"
                        alt=""
                        style={{ height: "200px", backgroundSize: "cover" }}
                        className="mb-3 rounded"
                      />
                      <span className="bg-secondary me-auto px-2 py-1 rounded-1 pSize text-info">
                        Technology
                      </span>
                      <h3 className="mt-3 me-auto h5 mb-2">
                        The latest technologies to be used for VR in 2022
                      </h3>
                      <p className="lead mb-0">September 02, 20224 Mins read</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="my-5 p-3">
                    <div className="d-flex flex-column h-100">
                      <img
                        src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-2.jpg"
                        alt=""
                        style={{ height: "200px", backgroundSize: "cover" }}
                        className="mb-3 rounded"
                      />
                      <span className="bg-secondary me-auto px-2 py-1 rounded-1 pSize text-info">
                        Technology
                      </span>
                      <h3 className="mt-3 me-auto h5 mb-2">
                        How can Web 3.0 Bring Changes to the Gaming?
                      </h3>
                      <p className="lead mb-0">August 30, 20225 Mins read</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="my-5 p-3">
                    <div className="d-flex flex-column h-100">
                      <img
                        src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-4.jpg"
                        alt=""
                        style={{ height: "200px", backgroundSize: "cover" }}
                        className="mb-3 rounded"
                      />
                      <span className="bg-secondary me-auto px-2 py-1 rounded-1 pSize text-info">
                        Blockchain
                      </span>
                      <h3 className="mt-3 me-auto h5 mb-2">
                        Gaming And Its Three Challenges
                      </h3>
                      <p className="lead mb-0">August 15, 20227 Mins read</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
      </Row>
    </Container>
  );
}
export default Hero4;
