import { useContext, useState } from "react";
import { Container, Row, Col, Card, Badge, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CartContext } from "../context/CartContext";
import React from "react";
import { FavContext } from "../context/FavContext";

function Hero6() {
      const favContext = useContext(FavContext);

      const { addToFav } = favContext;
      const h3Style = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#111827",
};

const h4Style = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#111827",
};

const pStyle = {
  color: "#6b7280",
};

const textStyle = {
  color: "#2563eb",
};
  const cartProduct = [
    {
      id: 1,
      img: " /home6/sp1.png",
      name: "Professional Safety Kit",
      description: "Helmet, glasses, gloves",
      oldprice: "120$",
      footer: "18 min ago",
      price: 78,
      star: "5",
      offer: "35%",
      catagory: "safety",
      quantity: 1,
    },
    {
      id: 2,
      img: " /home6/sp2.png",
      name: "Construction Tool Set",
      description: "56 pieces, steel tools",
      oldprice: "210$",
      footer: "2 hours ago",
      price: 147,
      star: "4",
      offer: "30%",
      catagory: "construction",
      quantity: 1,
    },
    {
      id: 3,
      img: " /home6/sp3.png",
      name: "Compact Power Tool",
      description: "18V, 2 batteries",
      oldprice: "165$",
      footer: "35 min ago",
      price: 109,
      star: "5",
      offer: "34%",
      catagory: "tools",
      quantity: 1,
    },
    {
      id: 4,
      img: " /home6/sp4.png",
      name: "Electric Screwdriver",
      description: "21V, LED light, charger",
      oldprice: "180$",
      footer: "1 hour ago",
      price: 126,
      star: "5",
      offer: "30%",
      catagory: "tools",
      quantity: 1,
    },
    {
      id: 5,
      img: " /home6/sp5.png",
      name: "Multi Function Drill",
      description: "20V, 8 accessories",
      oldprice: "235$",
      footer: "45 min ago",
      price: 164,
      star: "4",
      offer: "30%",
      catagory: "tools",
      quantity: 1,
    },
    {
      id: 6,
      img: " /home6/sp6.png",
      name: "Heavy Duty Screwdriver",
      description: "24V, metal chuck",
      oldprice: "195$",
      footer: "3 hours ago",
      price: 137,
      star: "5",
      offer: "30%",
      catagory: "tools",
      quantity: 1,
    },
    {
      id: 7,
      img: " /home6/sp7.png",
      name: "Precision Repair Kit",
      description: "64 pieces, magnetic tips",
      oldprice: "135$",
      footer: "20 min ago",
      price: 87,
      star: "5",
      offer: "36%",
      catagory: "repair",
      quantity: 1,
    },
    {
      id: 8,
      img: " /home6/sp8.png",
      name: "Professional Drill",
      description: "1100W, 13mm chuck",
      oldprice: "260$",
      footer: "5 hours ago",
      price: 182,
      star: "4",
      offer: "30%",
      catagory: "equipment",
      quantity: 1,
    },
  ];
  const CardProductTime = [
    { value: "02", label: "Days" },
    { value: "08", label: "Hrs" },
    { value: "36", label: "Min" },
    { value: "42", label: "Sec" },
  ];

  const Rooms = [
    { imgRoom: " /home6/banner-bottom-2.png" },
    { imgRoom: " /home6/bed-room.png" },
    { imgRoom: " /home6/decoration.png" },
    { imgRoom: " /home6/kitchen.png" },
    { imgRoom: " /home6/living-room.png" },
    { imgRoom: " /home6/news1.png" },
    { imgRoom: " /home6/news2.png" },
    { imgRoom: " /home6/news3.png" },
    { imgRoom: " /home6/news4.png" },
    { imgRoom: " /home6/reading-room.png" },
    { imgRoom: " /home6/banner-bottom-1.png" },
  ];
  const cartContext = useContext(CartContext);

  const { addToCart } = cartContext;

  const [slide, setSlide] = useState(0);

  const slides = [
    {
      image:
        "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage6/banner2.png",
      smallTitle: "Big & Fresh Offers",
      title: "DECORA & CRAFTS",
      button: "Sale On This Weekend",
    },
    {
      image:
        "      https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage6/banner2-2.png",

      smallTitle: "Best Collection",
      title: "MODERN FURNITURE",
      button: "Shop This Week",
    },
  ];

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const sections = [
    {
      id: 1,
      title: "Kitchen sets from $9.99",
      subtitle: "Upto 30% offer",
      image: " /home6/living-room.png",
    },
    {
      id: 2,
      title: "Livingroom sets from $9.99",
      subtitle: "Upto 30% offer",
      image: " /home6/kitchen.png",
    },
  ];
  return (
    <Container className="my-4">
      <Row className="g-4 align-items-stretch">
        {/* LEFT - 3 */}
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="d-flex">
          <div className="position-relative w-100 overflow-hidden">
            <img
              src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage6/banner1.png"
              className="w-100 h-100 object-fit-cover"
              alt="Office Collection"
            />

            <div
              className="position-absolute bg-white p-3"
              style={{
                left: "10px",
                bottom: "10px",
                minWidth: "70%",
              }}
            >
              <h5 className="mb-1 fw-semibold">Office Collection</h5>

              <a href="#" className="text-warning text-decoration-none small">
                Shop Now
              </a>
            </div>
          </div>
        </Col>

        {/* CENTER  */}
        <Col xs={12} sm={12} md={12} lg={8} xl={6} className="d-flex">
          <div className="position-relative w-100 overflow-hidden">
            <img
              src={slides[slide].image}
              className="w-100 h-100 object-fit-cover"
              alt={slides[slide].title}
            />

            <div
              className="position-absolute top-0 start-0 p-4 p-md-5"
              style={{ maxWidth: "65%" }}
            >
              <p className="text-primary fw-semibold mb-2">
                {slides[slide].smallTitle}
              </p>

              <h2 className="fw-bold text-primary mb-3">
                {slides[slide].title}
              </h2>

              <span className="bg-warning text-white px-2 py-1 fw-semibold">
                {slides[slide].button}
              </span>
            </div>

            <div
              className="position-absolute bottom-0 start-0 d-flex"
              style={{ margin: "20px" }}
            >
              <button
                onClick={prevSlide}
                className="btn btn-light rounded-0 fs-4 px-3"
              >
                ‹
              </button>

              <button
                onClick={nextSlide}
                className="btn btn-light rounded-0 fs-4 px-3"
              >
                ›
              </button>
            </div>
          </div>
        </Col>

        {/* RIGHT  */}
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className="d-flex">
          <div className="position-relative w-100 overflow-hidden">
            <img
              src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage6/banner3.png"
              className="w-100 h-100 object-fit-cover"
              alt="Comfort Chair"
            />

            <div
              className="position-absolute bg-white p-3"
              style={{
                left: "10px",
                bottom: "10px",
                minWidth: "70%",
              }}
            >
              <h5 className="mb-1 fw-semibold">Comfort Chair</h5>

              <a href="#" className="text-warning text-decoration-none small">
                Shop Now
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="g-3 g-lg-4 my-5 px-2 px-lg-3 align-items-stretch">

  {[
    {
      icon: "bi-truck",
      title: "Free Delivery",
      text: "Free shipping on selected orders",
      color: "#2878ff",
      bg: "#edf4ff",
    },
    {
      icon: "bi-shield-check",
      title: "Secure Payment",
      text: "100% secure payment methods",
      color: "#15966a",
      bg: "#e9f8f1",
    },
    {
      icon: "bi-arrow-repeat",
      title: "Easy Returns",
      text: "Hassle-free return experience",
      color: "#8b5cf6",
      bg: "#f2edff",
    },
    {
      icon: "bi-headset",
      title: "24/7 Support",
      text: "We're here whenever you need",
      color: "#e99519",
      bg: "#fff5e4",
    },
    {
      icon: "bi-gift",
      title: "Special Offers",
      text: "Discover deals made for you",
      color: "#e84b78",
      bg: "#fff0f4",
    },
  ].map((item, index) => (
    <Col
      key={item.title}
      lg={index === 4 ? 12 : 3}
      md={6}
      sm={6}
      xs={12}
      className={index === 4 ? "d-lg-none d-xl-block" : ""}
    >
      <div
        className="feature-card h-100 d-flex align-items-center gap-3 p-3 p-xl-4 rounded-4"
        style={{
          "--feature-color": item.color,
          "--feature-bg": item.bg,
        }}
      >
        <div className="feature-icon flex-shrink-0 d-flex align-items-center justify-content-center rounded-4">
          <i className={`bi ${item.icon}`}></i>
        </div>

        <div className="flex-grow-1">
          <h6 className="feature-title mb-2">
            {item.title}
          </h6>

          <p className="feature-text mb-0">
            {item.text}
          </p>
        </div>
      </div>
    </Col>
  ))}

</Row>

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
        {Rooms.map((item) => (
          <SwiperSlide key={item.imgRoom} className="my-5 p-3">
            <div className="d-flex flex-column h-100">
              <img
                src={item.imgRoom}
                alt=""
                style={{ height: "200px", backgroundSize: "cover" }}
                className="mb-3 rounded  "
              />
              <span className="bg-secondary me-auto px-2 py-1 rounded-1 pSize text-info">
                Room
              </span>
              <h3 className="mt-3 me-auto h5 mb-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </h3>
              <p className="lead mb-0">400$ For day</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Row>
        {cartProduct.map((item) => (
          <Col
            lg={3}
            md={6}
            sm={12}
            className="d-flex justify-content-center align-item-center"
          >
            <Card
              key={item.id}
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

              <div className="d-flex justify-content-center gap-1 my-2">
                {CardProductTime.map((item, id) => (
                  <div
                    key={id}
                    className="text-center p-1 rounded text-white"
                    style={{ backgroundColor: "#1d2a44", minWidth: "45px" }}
                  >
                    <div
                      className="fw-bold lh-1"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {item.value}
                    </div>
                    <div style={{ fontSize: "0.6rem" }}>{item.label}</div>
                  </div>
                ))}
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
                  <span className="fw-bold text-dark fs-5">{item.price}</span>
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
      <Row>
        <Col lg={12}>
          {" "}
          <div className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3">
            <h3 className="fw-bold m-0 text-dark">Weekly selection</h3>
            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-secondary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "36px", height: "36px" }}
              >
                &lt;
              </button>
              <button
                className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "36px", height: "36px" }}
              >
                &gt;
              </button>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="row g-4">
        {sections.map((item) => (
          <Col
            key={item.id}
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
          >
            <div className="card h-100 border-0 rounded-3 shadow-sm overflow-hidden group-hover">
              <div className="card-header bg-light border-0 py-2 px-3 d-flex gap-2 align-items-center">
                <span className="fw-bold text-dark">$2,856</span>
                <span className="text-muted text-decoration-line-through small">
                  $3,225
                </span>
              </div>

              <div
                className="position-relative overflow-hidden"
                style={{ height: "280px" }}
              >
                <img
                  src={item.image}
                  className="w-100 h-100 object-fit-cover "
                  alt={item.title}
                />
              </div>

              <div className="card-body text-center p-4">
                <h5 className="card-title fw-bold text-dark mb-1">
                  {item.title}
                </h5>
                <p className="card-text text-secondary small mb-0">
                  {item.subtitle}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      
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
                          
              <div className="position-absolute top-0 end-0 d-flex flex-column">
                <a href="" className="btn">
                  <img
                    src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/icons/trend.svg"
                    alt=""
                  />
                </a>
                <a href="" className="btn" onClick={()=>addToFav(item)}>
                  <img
                    src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/icons/wishlist.svg "
                    alt=""
                  />
                </a>
                <a href="" className="btn">
                  <img
                    src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/icons/compare.svg"
                    alt=""
                  />
                </a>
                <a href="" className="btn">
                  <img
                    src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/icons/view.svg"
                    alt=""
                  />
                </a>
              </div>
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
  <Row className="g-4 ">
    
    <Col lg={4} md={6} sm={12} xs={12}>
      <Row className="g-4">
        <Col xs={12}>
          <div style={{ height: '200px', borderRadius: '8px', padding: '20px', background: 'url(https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage6/reading-table.png) center/cover no-repeat', color: '#fff' }}>
            <h5 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Reading Table</h5>
            <p>Under $50</p>
          </div>
        </Col>
        <Col xs={12}>
          <div style={{ height: '200px', borderRadius: '8px', padding: '20px', background: 'url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage6/table-lamp.png") center/cover no-repeat', color: '#fff' }}>
            <h5 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Table Lamp Collection</h5>
            <p>Aqua Shift Special Edition</p>
          </div>
        </Col>
      </Row>
    </Col>

    <Col lg={4} md={6} sm={12} xs={12}>
      <div style={{ height: '424px', borderRadius: '8px', padding: '20px', background: ' url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage6/top-rate.png") center/cover no-repeat', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <h5 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Top Rated Chair</h5>
        <p>Under $120</p>
        <button className="btn btn-link p-0 text-decoration-none text-white text-start">Shop Now &gt;</button>
      </div>
    </Col>

    <Col lg={4} md={12} sm={12} xs={12}>
      <Row className="g-4">
        <Col lg={12} md={6} sm={12} xs={12}>
          <div style={{ height: '200px', borderRadius: '8px', padding: '20px', background: ' url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage6/sofa.png") center/cover no-repeat', color: 'white' }}>
            <h5 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Sofa Collection</h5>
            <p>Aqua Shift Special Edition</p>
          </div>
        </Col>
        <Col lg={12} md={6} sm={12} xs={12}>
          <div style={{ height: '200px', borderRadius: '8px', padding: '20px', background: ' url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage6/relax.png") center/cover no-repeat', color: 'white' }}>
            <h5 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Relaxing Chair</h5>
            <p>From $100, Free shipping</p>
          </div>
        </Col>
      </Row>
    </Col>

  </Row>
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
        {Rooms.map((item) => (
          <SwiperSlide key={item.imgRoom} className="my-5 p-3">
            <div className="d-flex flex-column h-100">
              
              <img
                src={item.imgRoom}
                alt=""
                style={{ height: "200px", backgroundSize: "cover" }}
                className="mb-3 rounded  "
              />
              <span className="bg-secondary me-auto px-2 py-1 rounded-1 pSize text-info">
                Room
              </span>
              <h3 className="mt-3 me-auto h5 mb-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </h3>
              <p className="lead mb-0">400$ For day</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
</Row>

      <Row className="g-3 g-lg-4 my-5 px-2 px-lg-3 align-items-stretch">

  {[
    {
      icon: "bi-truck",
      title: "Free Delivery",
      text: "Free shipping on selected orders",
      color: "#2878ff",
      bg: "#edf4ff",
    },
    {
      icon: "bi-shield-check",
      title: "Secure Payment",
      text: "100% secure payment methods",
      color: "#15966a",
      bg: "#e9f8f1",
    },
    {
      icon: "bi-arrow-repeat",
      title: "Easy Returns",
      text: "Hassle-free return experience",
      color: "#8b5cf6",
      bg: "#f2edff",
    },
    {
      icon: "bi-headset",
      title: "24/7 Support",
      text: "We're here whenever you need",
      color: "#e99519",
      bg: "#fff5e4",
    },
    {
      icon: "bi-gift",
      title: "Special Offers",
      text: "Discover deals made for you",
      color: "#e84b78",
      bg: "#fff0f4",
    },
  ].map((item, index) => (
    <Col
      key={item.title}
      lg={index === 4 ? 12 : 3}
      md={6}
      sm={6}
      xs={12}
      className={index === 4 ? "d-lg-none d-xl-block" : ""}
    >
      <div
        className="feature-card h-100 d-flex align-items-center gap-3 p-3 p-xl-4 rounded-4"
        style={{
          "--feature-color": item.color,
          "--feature-bg": item.bg,
        }}
      >
        <div className="feature-icon flex-shrink-0 d-flex align-items-center justify-content-center rounded-4">
          <i className={`bi ${item.icon}`}></i>
        </div>

        <div className="flex-grow-1">
          <h6 className="feature-title mb-2">
            {item.title}
          </h6>

          <p className="feature-text mb-0">
            {item.text}
          </p>
        </div>
      </div>
    </Col>
  ))}

</Row>
       <Row className="ps-5 py-5" style={{backgroundColor:"#f0f3f8"}}>
      <Col md={3}>
        <div className="text-md-start text-center mb-3">
          <h3 style={h3Style}>We‘d love to here from you</h3>
          <p style={pStyle}>Chat with our friendly team</p>
        </div>
      </Col>
      <Col md={3}>
        <div className="mb-3">
          <img src=" /chat.svg" alt="" />
          <h4 style={h4Style}>Chat to sales</h4>
          <p className="mb-0" style={pStyle}>
            Speak to our team.
          </p>
          <a href="" className="text-decoration-none" style={textStyle}>
            sales@ecom.com
          </a>
        </div>
      </Col>
      <Col md={3}>
        <div className="mb-3">
          <img src=" /call.svg" alt="" />
          <h4 style={h4Style}>Call us</h4>
          <p className="mb-0" style={pStyle}>
            Mon-Fri from 8am to 5pm
          </p>
          <a href="" className="text-decoration-none" style={textStyle}>
            +1(555)000-0000
          </a>
        </div>
      </Col>
      <Col md={3}>
        <div className="mb-3  mx-auto">
          <img src=" /map.svg" alt="" />
          <h4 style={h4Style}>Visit us</h4>
          <p className="mb-0" style={pStyle}>
            Visit our office
          </p>
          <a href="" className="text-decoration-none" style={textStyle}>
            205 North Michigan Avenue,<br></br> Suite 810  <br></br>Chicago, 60601, USA
          </a>
        </div>
      </Col>
    </Row>
    

    </Container>
  );
}

export default Hero6;
