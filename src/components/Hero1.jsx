import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useContext } from "react";
import { Badge, Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { ProductContext } from "./ProductContext";
import { CartContext } from "../context/CartContext";

const pcolor = { color: "#1a1a1a" };
const textfont = {
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  fontSize: "12px",
  fontWeight: 700,
};
const h2font = { fontSize: "2rem", fontWeight: 700, lineHeight: 1.2, color: "#1a1a1a" };
const h1font = { fontSize: "3rem", fontWeight: 800, lineHeight: 1.1, color: "#1a1a1a" };
const h4font = { fontSize: "1.5rem", fontWeight: 700, color: "#111111" };
const pfont = { fontSize: "0.9rem", color: "#5f6368", marginBottom: 0 };
const spanColor = { color: "#fd9636" };
const btnColor1 = { backgroundColor: "#fd9636", color: "#fff" };
const btnColor2 = { backgroundColor: "#101828", color: "#fff" };

const featureItems = [
  { icon: "bi-truck", title: "Free Delivery", text: "Free shipping on selected orders", color: "#2878ff", bg: "#edf4ff" },
  { icon: "bi-shield-check", title: "Secure Payment", text: "100% secure payment methods", color: "#15966a", bg: "#e9f8f1" },
  { icon: "bi-arrow-repeat", title: "Easy Returns", text: "Hassle-free return experience", color: "#8b5cf6", bg: "#f2edff" },
  { icon: "bi-headset", title: "24/7 Support", text: "We're here whenever you need", color: "#e99519", bg: "#fff5e4" },
  { icon: "bi-gift", title: "Special Offers", text: "Discover deals made for you", color: "#e84b78", bg: "#fff0f4" },
];

const blogPosts = [
  {
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-5.jpg",
    category: "Development",
    title: "HTML5 – The Future of Mobile App Development",
    meta: "August 12, 2022 · 9 mins read",
  },
  {
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-1.jpg",
    category: "Technology",
    title: "The latest technologies to be used for VR in 2022",
    meta: "September 02, 2022 · 4 mins read",
  },
  {
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-2.jpg",
    category: "Technology",
    title: "How can Web 3.0 Bring Changes to the Gaming?",
    meta: "August 30, 2022 · 5 mins read",
  },
  {
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/blog/blog-4.jpg",
    category: "Blockchain",
    title: "Gaming And Its Three Challenges",
    meta: "August 15, 2022 · 7 mins read",
  },
];

function Hero1() {
  const { filteredProducts } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <main className="container my-5">
      <Container fluid className="px-0">
        <Row className="g-3 align-items-stretch">
          <Col lg={8}>
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              loop
              pagination={{ clickable: true }}
              style={{ "--swiper-pagination-color": "#fd9636" }}
              autoplay={{
                enabled: true,
                delay: 3000,
              }}
            >
              <SwiperSlide>
                <div
                  className="card p-5 text-start mt-5 border-0"
                  style={{
                    ...pcolor,
                    backgroundColor: "#d4f7ff",
                    backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage1/banner.png")`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span style={textfont}>HOT RIGHT NOW</span>
                  <h2 style={h2font}>Sale Up to 50% off</h2>
                  <h1 style={h1font}>Mobile Devices</h1>
                  <p className="w-50">
                    Curabitur id lectus in felis hendrerit efficitur quis quis lectus.
                    Donec sollicitudin elit eu ipsum maximus blandit. Curabitur blandit
                    tempus consectetur.
                  </p>
                  <div className="d-flex gap-2">
                    <button type="button" className="text-white border-0 btn fw-bold rounded-2" style={btnColor1}>
                      Shop now
                    </button>
                    <button type="button" className="border-0 btn rounded-2" style={{ ...pcolor, backgroundColor: "transparent" }}>
                      Learn more
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="card p-5 text-start mt-5 border-0 "
                  style={{
                    ...pcolor,
                    backgroundColor: "#dcf4e0",
                    backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage1/banner-hero-2.png")`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span style={textfont}>TRENDING NOW</span>
                  <h2 style={h2font}>BIG Sale 25%</h2>
                  <h1 style={h1font}>Laptop & PC</h1>
                  <p className="w-50">
                    Curabitur id lectus in felis hendrerit efficitur quis quis lectus.
                    Donec sollicitudin elit eu ipsum maximus blandit. Curabitur blandit
                    tempus consectetur.
                  </p>
                  <div className="d-flex gap-2">
                    <button type="button" className="text-white border-0 btn fw-bold rounded-2" style={btnColor1}>
                      Shop now
                    </button>
                    <button type="button" className="border-0 btn rounded-2" style={{ ...pcolor, backgroundColor: "transparent" }}>
                      Learn more
                    </button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div
                  className="card p-5 text-start mt-5 border-0"
                  style={{
                    ...pcolor,
                    backgroundColor: "#dcf4e0",
                    backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage1/banner-hero-2.png")`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <span style={textfont}>TOP SALE THIS MONTH</span>
                  <h2 style={h2font}>Hot Collection</h2>
                  <h1 style={h1font}>Virtual Glasses</h1>
                  <p className="w-50">
                    Curabitur id lectus in felis hendrerit efficitur quis quis lectus.
                    Donec sollicitudin elit eu ipsum maximus blandit. Curabitur blandit
                    tempus consectetur.
                  </p>
                  <div className="d-flex gap-2">
                    <button type="button" className="text-white border-0 btn fw-bold rounded-2" style={btnColor1}>
                      Shop now
                    </button>
                    <button type="button" className="border-0 btn rounded-2" style={{ ...pcolor, backgroundColor: "transparent" }}>
                      Learn more
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>

          <Col lg={4} className="mt-5 pb-3 d-flex ps-2 pe-0 row row-gap-3">
            <Col lg={12} md={6}>
              <div
                className="card text-start border-0 py-4 ps-3"
                style={{
                  ...pcolor,
                  backgroundColor: "#fff4f6",
                  backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage1/banner-small-1.png")`,
                  backgroundSize: "60% auto",
                  backgroundPosition: "right bottom",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <p className="mb-0">
                  <span style={spanColor}>10% </span>
                  <span style={textfont}>SALE OFF</span>
                </p>
                <h4 style={h4font}>Apple Watch Serial 7</h4>
                <p className="w-50" style={pfont}>
                  Don&apos;t miss the last opportunity.
                </p>
                <button
                  type="button"
                  className="btn fw-bold text-white border-0"
                  style={{
                    ...btnColor2,
                    ...textfont,
                    backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/icons/arrow-white.svg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center right 18px",
                    width: "124px",
                  }}
                >
                  Shop Now
                </button>
              </div>
            </Col>

            <Col lg={12} md={6}>
              <div
                className="card text-start py-4 ps-3 border-0"
                style={{
                  ...pcolor,
                  backgroundColor: "#f0f2ee",
                  backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage1/banner-small-2.png")`,
                  backgroundSize: "60% auto",
                  backgroundPosition: "right bottom",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <p className="mb-0">
                  <span style={{ ...spanColor, ...textfont }}>LATEST COLLECTION</span>
                </p>
                <h4 style={h4font}>Apple Devices &amp; Software</h4>
                <p className="w-50" style={pfont}>
                  Don&apos;t miss the last opportunity.
                </p>
                <button
                  type="button"
                  className="btn fw-bold text-white border-0"
                  style={{
                    ...btnColor1,
                    ...textfont,
                    backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/icons/arrow-white.svg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center right 18px",
                    width: "124px",
                  }}
                >
                  Shop Now
                </button>
              </div>
            </Col>
          </Col>
        </Row>

        <Row className="g-3 g-lg-4 my-5 px-2 px-lg-3 align-items-stretch">
          {featureItems.map((item, index) => (
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
                  <h6 className="feature-title mb-2">{item.title}</h6>
                  <p className="feature-text mb-0">{item.text}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="d-flex justify-content-around align-items-center my-5 g-3">
          <Col
            lg={3}
            md={12}
            sm={12}
            xs={12}
            style={{ backgroundColor: "#a2afec" }}
            className="p-3 rounded-4 d-flex justify-content-center align-items-center"
          >
            <div
              className="py-3 d-flex flex-column justify-content-center align-items-start"
              style={{
                background: "url(https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage3/water.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right bottom",
                backgroundSize: "50% auto",
                height: "200px",
              }}
            >
              <h3>World’s BestRO Water Purifiers</h3>
              <p>Water 100% Pure</p>
              <ul className="list-unstyled mb-0 ps-0">
                <li className="fw-bold">Makes Water 100% Pure</li>
                <li className="fw-bold">Multiple Purification Process</li>
                <li className="fw-bold">Retains Essential Minerals</li>
              </ul>
            </div>
          </Col>

          <Col
            lg={3}
            md={12}
            sm={12}
            xs={12}
            style={{ backgroundColor: "#b2f387" }}
            className="p-3 rounded-4 d-flex justify-content-center align-items-center my-5"
          >
            <div
              className="py-3 d-flex flex-column justify-content-center align-items-start"
              style={{
                background: "url(https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage3/kitchen.png)",
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
            className="p-3 rounded-4 d-flex justify-content-center align-items-center"
          >
            <div
              className="p-3"
              style={{
                background: "url(https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage3/electric.png)",
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
          </Col>
        </Row>

        <Row className="g-4">
          {filteredProducts.map((item) => (
            <Col key={item.id} lg={3} md={6} sm={12} className="d-flex justify-content-center align-items-center">
              <Card className="p-3 shadow-lg border-0 position-relative mb-3 mx-0 w-100" style={{ maxWidth: "300px" }}>
                <Badge
                  bg="danger"
                  className="position-absolute top-0 start-0 m-3 rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "45px", height: "45px", backgroundColor: "#e65c00" }}
                >
                  {item.offer}
                </Badge>

                <div className="text-center my-4">
                  <Card.Img src={item.img} alt={item.name} style={{ maxHeight: "180px", objectFit: "contain" }} />
                </div>

                <Card.Body className="p-0 pt-2">
                  <span className="text-muted small">{item.name}</span>
                  <Card.Title className="fw-bold my-1" style={{ fontSize: "1rem", color: "#333" }}>
                    {item.description}
                  </Card.Title>

                  <div className="d-flex align-items-center my-1 text-warning" style={{ fontSize: "0.85rem" }}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <span className="text-muted ms-1">(65)</span>
                  </div>

                  <div className="d-flex align-items-baseline gap-2 my-2">
                    <span className="fw-bold text-dark fs-5">{item.price}</span>
                    <span className="text-muted text-decoration-line-through small">{item.oldprice}</span>
                  </div>

                  <ProgressBar
                    now={34}
                    variant="warning"
                    style={{ height: "6px", backgroundColor: "#e9ecef" }}
                    className="my-2"
                  />

                  <div className="d-flex justify-content-between text-muted" style={{ fontSize: "0.75rem" }}>
                    <span>
                      Available: <b>563</b>
                    </span>
                    <span>
                      Sold: <b>289</b>
                    </span>
                  </div>

                  <div className="mt-3">
                    <button
                      type="button"
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
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col xs={12}>
            <Swiper
              className="w-100 h-100"
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
              {blogPosts.map((post) => (
                <SwiperSlide key={post.title} className="my-5 p-3">
                  <div className="d-flex flex-column h-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ height: "200px", objectFit: "cover" }}
                      className="mb-3 rounded"
                    />
                    <span className="bg-secondary me-auto px-2 py-1 rounded-1 pSize text-info">{post.category}</span>
                    <h3 className="mt-3 me-auto h5 mb-2">{post.title}</h3>
                    <p className="lead mb-0">{post.meta}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Hero1;


