import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useContext } from "react";
import { Badge, Card, Col, ProgressBar, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { ProductContext } from "./ProductContext";
import { CartContext } from "../context/CartContext";

function Hero3() {
const { cartProduct , filteredProducts } = useContext(ProductContext);
const { addToCart } = useContext(CartContext);
  return (
    <main className="container my-5">
      <Swiper
        speed={600}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide className="w-100">
          <Col
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{
              background:
                "linear-gradient(90deg, rgba(131, 220, 220, 0.55), rgba(82, 189, 252, 0.55))",
            }}
            className="rounded-3"
          >
            <div className="bg-home3">
              <div className="row">
                <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12 p-3 m-2 my-2">
                  <span className="badge bg-success mb-3">new arrival</span>
                  <h1>
                    Pre-Order Home Appliances new arrival Pre-Order Home
                    Appliances
                  </h1>
                  <ul>
                    <li>Free Shipping. Secure Payment</li>
                    <li>Contact us 24hrs a day</li>
                    <li>Support gift service</li>
                  </ul>
                  <button className="btn btn-primary rounded-2">
                    <span className="text-white">Shop Now</span>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </SwiperSlide>

        <SwiperSlide>
          <Col
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{
              background:
                "linear-gradient(90deg, rgba(131, 220, 220, 0.55), rgba(82, 189, 252, 0.55))",
            }}
            className="rounded-3"
          >
            <div className="bg-home3">
              <div className="row">
                <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12 p-3 m-2 my-2">
                  <span className="badge bg-success mb-3">new arrival</span>
                  <h1>
                    Pre-Order Home Appliances new arrival Pre-Order Home
                    Appliances
                  </h1>
                  <ul>
                    <li>Free Shipping. Secure Payment</li>
                    <li>Contact us 24hrs a day</li>
                    <li>Support gift service</li>
                  </ul>
                  <button className="btn btn-primary rounded-2">
                    <span className="text-white">Shop Now</span>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </SwiperSlide>

        <SwiperSlide>
          <Col
            lg={12}
            md={12}
            sm={12}
            xs={12}
            style={{
              background:
                "linear-gradient(90deg, rgba(131, 220, 220, 0.55), rgba(82, 189, 252, 0.55))",
            }}
            className="rounded-3"
          >
            <div className="bg-home3">
              <div className="row">
                <div className="col-md-12 col-lg-6 col-sm-12 col-xs-12 p-3 m-2 my-2">
                  <span className="badge bg-success mb-3">new arrival</span>
                  <h1>
                    Pre-Order Home Appliances new arrival Pre-Order Home
                    Appliances
                  </h1>
                  <ul>
                    <li>Free Shipping. Secure Payment</li>
                    <li>Contact us 24hrs a day</li>
                    <li>Support gift service</li>
                  </ul>
                  <button className="btn btn-primary rounded-2">
                    <span className="text-white">Shop Now</span>
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </SwiperSlide>
      </Swiper>
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

      <Row className="d-flex justify-content-around align-items-center my-5  ">
        <Col
          lg={3}
          md={12}
          sm={12}
          xs={12}
          style={{ backgroundColor: "#a2afec" }}
          className="p-3 rounded-4   d-flex justify-content-center align-items-center "
        >
          <div
            className="py-3 d-flex flex-column justify-content-center align-items-start "
            style={{
              background:
                "url(https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage3/water.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
              backgroundSize: "50% auto",
              height: "200px",
            }}
          >
            <h3>World’s BestRO Water Purifiers</h3>
            <p>Water 100% Pure</p>
            <ul className="list-unstyled mb-0 ps-0">
              <li className="fw-bold ">Makes Water 100% Pure</li>
              <li className="fw-bold ">Multiple Purification Process</li>
              <li className="fw-bold ">Retains Essential Minerals</li>
            </ul>
          </div>
        </Col>
        <Col
          lg={3}
          md={12}
          sm={12}
          xs={12}
          style={{ backgroundColor: "#b2f387" }}
          className="p-3 rounded-4   d-flex justify-content-center align-items-center my-5"
        >
          <div
            className="py-3 d-flex flex-column justify-content-center align-items-start"
            style={{
              background:
                "url(https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage3/kitchen.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
              backgroundSize: "90% auto",
              height: "200px",
            }}
          >
            <h3>Smart Kitchen Appliances</h3>
            <p>Cook Smart, Cook Tasty and Cook Easy</p>
          </div>
        </Col>
        <Col
          lg={3}
          md={12}
          sm={12}
          xs={12}
          style={{ backgroundColor: "#b56d6d" }}
          className="p-3 rounded-4    d-flex justify-content-center align-items-center"
        >
          <div
            className="p-3 "
            style={{
              background:
                "url(https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage3/electric.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right bottom",
              backgroundSize: "50% auto",
              height: "200px",
            }}
          >
            <p>Starting from $82</p>
            <h3>Electric Kettles</h3>
            <p>High capacity electric kettles for boiling water</p>
          </div>
        </Col>{" "}
      </Row>
      
      <Row>
        {filteredProducts.map((item) => (
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

              <div className="d-flex justify-content-center gap-1 my-2">
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
    </main>
  );
}

export default Hero3;
