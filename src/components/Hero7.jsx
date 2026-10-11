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

const Toy2 = " /home7/sale1.png";
const Toy3 = " /home7/sale2.png";
const Toy4 = " /home7/toy1.png";
const Toy5 = " /home7/toy2.png";
const Toy6 = " /home7/toy3.png";
const Toy7 = " /home7/toy4.png";
const Toy8 = " /home7/toy8.png";
const Toy9 = " /home7/kid1.png";
const Toy10 = " /home7/kid2.png";
const Toy11 = " /home7/kid3.png";
const Toy12 = " /home7/kid4.png";
const Toy13 = " /home7/kid5.png";
const Toy14 = " /home7/kid6.png";
const Toy15 = " /home7/kid7.png";
const Toy16 = " /home7/kid8.png";
const Toy17 = " /home7/kid9.png";
const lego = " /home7/banner-ads.png";
   



 const LastSectionImg1 =" /home7/news1.png";
 const LastSectionImg2 =" /home7/news2.png";
 const LastSectionImg3 =" /home7/news3.png";
 const LastSectionImg4 =" /home7/news4.png";
  const cartProduct = [
  {
    id: 1,
    img: Toy2,
    name: "Samsung Galaxy Watch 6",
    description: "1.5-inch AMOLED, 2GB RAM",
    oldprice: "420$",
    footer: "12 min ago",
    price: 315,
    star: "5",
    offer: "25%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 2,
    img: Toy3,
    name: "Samsung Galaxy S22 Ultra",
    description: "6.8-inch, 12GB RAM, 256GB",
    oldprice: "950$",
    footer: "2 hours ago",
    price: 665,
    star: "5",
    offer: "30%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 3,
    img: Toy4,
    name: "Samsung Galaxy S22 Ultra",
    description: "6.8-inch, 8GB RAM, 128GB",
    oldprice: "900$",
    footer: "35 min ago",
    price: 630,
    star: "4",
    offer: "30%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 4,
    img: Toy5,
    name: "PlayStation 4 Slim",
    description: "500GB, 8GB RAM, HDR",
    oldprice: "420$",
    footer: "1 day ago",
    price: 294,
    star: "5",
    offer: "30%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 5,
    img: Toy6,
    name: "Samsung Galaxy Watch Active",
    description: "1.4-inch AMOLED, GPS",
    oldprice: "350$",
    footer: "50 min ago",
    price: 245,
    star: "4",
    offer: "30%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 6,
    img: Toy7,
    name: "LG OLED 43 Smart TV",
    description: "43-inch OLED, 4K UHD",
    oldprice: "850$",
    footer: "3 hours ago",
    price: 680,
    star: "5",
    offer: "20%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 7,
    img: Toy8,
    name: "JBL Wave Wireless",
    description: "Bluetooth 5.3, 32h battery",
    oldprice: "180$",
    footer: "25 min ago",
    price: 126,
    star: "4",
    offer: "30%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 8,
    img: Toy9,
    name: "ASUS ROG Strix G15",
    description: "15.6-inch, 16GB RAM, 512GB SSD",
    oldprice: "1350$",
    footer: "5 hours ago",
    price: 1080,
    star: "5",
    offer: "20%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 9,
    img: Toy10,
    name: "Samsung Galaxy Watch Pro",
    description: "1.6-inch AMOLED, GPS, 32GB",
    oldprice: "500$",
    footer: "40 min ago",
    price: 350,
    star: "5",
    offer: "30%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 10,
    img: Toy11,
    name: "Smart AI Security Camera",
    description: "2K video, AI detection, Wi-Fi",
    oldprice: "260$",
    footer: "2 days ago",
    price: 169,
    star: "4",
    offer: "35%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 11,
    img: Toy12,
    name: "Philips Cocktail Blender",
    description: "1200W, 1.5L, 6 accessories",
    oldprice: "210$",
    footer: "15 min ago",
    price: 147,
    star: "5",
    offer: "30%",
    catagory: "kitchen",
    quantity: 1,
  },
  {
    id: 12,
    img: Toy13,
    name: "Sony Party Microphone Set",
    description: "Wireless, dual microphones",
    oldprice: "320$",
    footer: "4 hours ago",
    price: 208,
    star: "5",
    offer: "35%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 13,
    img: Toy14,
    name: "Moulinex Power Blender",
    description: "1000W, 1.8L, 5 accessories",
    oldprice: "190$",
    footer: "45 min ago",
    price: 133,
    star: "4",
    offer: "30%",
    catagory: "kitchen",
    quantity: 1,
  },
  {
    id: 14,
    img: Toy15,
    name: "Kenwood Multi Blender",
    description: "800W, 1.5L, 4 accessories",
    oldprice: "170$",
    footer: "1 hour ago",
    price: 119,
    star: "5",
    offer: "30%",
    catagory: "kitchen",
    quantity: 1,
  },
  {
    id: 15,
    img: Toy16,
    name: "Philips Air Fryer XL",
    description: "6.2L, 1700W, Digital",
    oldprice: "280$",
    footer: "3 days ago",
    price: 196,
    star: "5",
    offer: "30%",
    catagory: "kitchen",
    quantity: 1,
  },
  {
    id: 16,
    img: Toy17,
    name: "LG TwinWash Washer",
    description: "9kg, Inverter, 1400RPM",
    oldprice: "920$",
    footer: "6 hours ago",
    price: 736,
    star: "5",
    offer: "20%",
    catagory: "kitchen",
    quantity: 1,
  },
  {
    id: 17,
    img: Toy2,
    name: "Tefal Pro Blender",
    description: "1200W, 2L, 7 accessories",
    oldprice: "240$",
    footer: "30 min ago",
    price: 156,
    star: "4",
    offer: "35%",
    catagory: "kitchen",
    quantity: 1,
  },
  {
    id: 18,
    img: Toy3,
    name: "Samsung Twin Door Refrigerator",
    description: "520L, Digital Inverter, No Frost",
    oldprice: "1250$",
    footer: "1 day ago",
    price: 1000,
    star: "5",
    offer: "20%",
    catagory: "kitchen",
    quantity: 1,
  },
  {
    id: 19,
    img: Toy4,
    name: "Samsung Galaxy S22 Ultra",
    description: "6.8-inch, 12GB RAM, 256GB",
    oldprice: "980$",
    footer: "2 hours ago",
    price: 686,
    star: "5",
    offer: "30%",
    catagory: "tecnol",
    quantity: 1,
  },
  
];
 
 

function Hero7() {
  
const img1 = " /home7/banner.png";
const img2 = " /home7/banner2.png";
const img3 = " /home7/banner-2.png";
const img4 = " /home7/banner-3.png";
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


  const productTimer = [
    { value: "02", label: "Days" },
    { value: "08", label: "Hrs" },
    { value: "36", label: "Min" },
    { value: "42", label: "Sec" },
  ];
  const imgToy = [
    { name: "toy img", logo: Toy2 },
    { name: "toy img", logo: Toy3 },
    { name: "toy img", logo: Toy4 },
    { name: "toy img", logo: Toy5 },
    { name: "toy img", logo: Toy6 },
    { name: "toy img", logo: Toy7 },
    { name: "toy img", logo: Toy8 },
    { name: "toy img", logo: Toy9},
    { name: "toy img", logo: Toy10 },
    { name: "toy img", logo: Toy11 },
    { name: "toy img", logo: Toy12 },
    { name: "toy img", logo: Toy13 },
    { name: "toy img", logo: Toy14 },
    { name: "toy img", logo: Toy15 },
    { name: "toy img", logo: Toy16 },
    { name: "toy img", logo: Toy17 },
  ];














  const brands = [
    { name: "Logo Game prand", logo: " /home7/logo10.png    " },
    { name: "Logo Game prand", logo: " /home7/logo11.png    " },
    { name: "Logo Game prand", logo: " /home7/logo12.png    " },
    { name: "Logo Game prand",logo:" /home7/logo13.png    " },
    { name: "Logo Game prand", logo: " /home7/logo14.png    " },
    { name: "Logo Game prand", logo: " /home7/logo15.png    " },
    { name: "Logo Game prand", logo: " /home7/logo1.png    " },
    { name: "Logo Game prand", logo: " /home7/logo2.png    " },
    { name: "Logo Game prand", logo: " /home7/logo3.png    " },
    { name: "Logo Game prand", logo: " /home7/logo4.png    " },
    { name: "Logo Game prand", logo: " /home7/logo5.png    " },
    { name: "Logo Game prand", logo: " /home7/logo6.png    " },
    { name: "Logo Game prand", logo: " /home7/logo7.png    " },
    { name: "Logo Game prand", logo: " /home7/logo8.png    " },
    { name: "Logo Game prand", logo: " /home7/logo9.png    " },
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
    <Container className="mt-2">
      <Row className="g-4 align-items-stretch">
        {/*My Left Slide*/}
        <Col lg={8} md={12} sm={12} className="d-flex">
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
                  backgroundImage: `url(${img1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  minHeight:"450px",
                }}
              >
               
              </div>
            </SwiperSlide>

            <SwiperSlide className="h-100">
              <div
                className="card h-100 p-5 text-start border-0"
                style={{
                  ...pcolor,
                  ...bgSlide,
                  backgroundImage: `url(${img4})`,
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  minHeight:"450px",
                }}
              >
          </div>
            </SwiperSlide>

            <SwiperSlide className="h-100">
              <div
                className="card h-100 p-5 text-start border-0"
                style={{
                  ...pcolor,
                  ...bgSlide,
                  backgroundImage: `url("${img3}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  minHeight:"450px",
                }}
              >


                
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>

        {/* My Right slide */}
        <Col lg={4} className="d-flex justify-content-center">
          <Row className="g-4 w-100">
            
               <div
                className="card h-100 p-5 text-start border-0"
                style={{
                  ...pcolor,
                  ...bgSlide,
                  backgroundImage: `url("${img2}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  minHeight:"450px",
                }}
              >


                
              </div>
              
          </Row>
        </Col>
      </Row>
      <Swiper
        modules={[Autoplay]}
        speed={1000}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          576: { slidesPerView: 3 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 12 },
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
              }}
             
            />
          </SwiperSlide>
        ))}
      </Swiper>
<Row className="justify-content-center align-item-center mt-5">
  <Col lg={4} className="text-center justify-content-center align-item-center">
  <h2 >
    Most Popular Categories

  </h2>
  </Col>
  <Col lg={12}>
  
      <Swiper
        modules={[Autoplay]}
                slidesPerView={3}

        speed={1000}
        autoplay={{
          delay: 2000,
        }}
        breakpoints={{
          576: { slidesPerView: 5 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="align-items-center mt-5"
      >
        {imgToy.map((brand, index) => (
          <SwiperSlide
            key={index}
            className="text-center d-flex justify-content-center align-items-center d-flex flex-column"
          style={{
                width: "100%",
                height: "200px",
              }} >
            <div className="bg-light rounded-circle p-4 shadow-lg justify-content-center align-items-center "  style={{
                
              }}>
            <img
              src={brand.logo}
              alt={brand.name}
              className="img-fluid brand-logo "
              style={{
                width: "100%",
                Width: "150px",
                height: "64px",
                objectFit: "contain",
              }}
             
            
            /></div>
              <div>
                <h5 className="text-dark mt-1">
                  Toy
                </h5>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
  </Col>
</Row>
      <Row className="g-4 mt-5 " style={{
          backgroundColor :"#f1e888",
        }}>
          <Col lg={12}><Row>
            
        <Col lg={4}>
        <h2 className="ms-2">SHOCKING DEAL
</h2>
<p className="lead ms-2">The opportunity will quickly pass. Take it!</p>
        </Col>
        <Col lg={6} className="ms-auto d-flex justify-content-center align-items-center">
        <div className="d-flex align-items-center gap-1 bg-white rounded-pill px-5  py-3 shadow-sm " aria-label="Deal countdown">
         <Row>
          <Col lg={6} className="justify-content-center align-items-center text-center"><i className="bi bi-stopwatch-fill text-danger fs-4 me-2" aria-hidden="true"></i>
          <p className="mx-1 mt-1">Hurry up!<br/>
Offers end in: </p></Col>
          <Col lg={6} className=" justify-content-center align-items-center text-center">
          <div className="d-flex gap-2 justify-content-center align-items-center text-center mt-3">
            {productTimer.map((time) => (
              <div key={time.label} className="text-center bg-white border border-black rounded-3 px-2 py-2 text-black justify-content-center align-items-center text-center" style={{ minWidth: "52px" }}>
                <div className="fw-bold lh-1">{time.value}</div>
                <small>{time.label}</small>
              </div>
            ))}
          </div></Col>
         </Row>
          
        </div>
        </Col>
        </Row></Col>
        <Col xs={12} >
        
              <Swiper
                modules={[Autoplay]}
                slidesPerView={3}
                speed={4000}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                }}
              >
                {cartProduct.map((item) => (
                  <SwiperSlide key={item.id} className="d-flex justify-content-center">
                    <Card
                      className="p-3 border border-1 border-warning position-relative mb-3 mx-0 w-100  "
                      style={{ maxWidth: "300px" }}
                    >
                      <Badge
                        bg="#e65c00"
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
        
                      <div className="d-flex justify-content-center gap-1 my-2">
                        {productTimer.map((item, id) => (
                          <div
                            key={id}
                            className="text-center p-1 rounded-3 bg-white border border-warning text-warning"
                            style={{ minWidth: "45px" }}
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
                  </SwiperSlide>
                ))}
              </Swiper>
        </Col>
      </Row>
      
      <Row className="my-5">
        <Col md={6} className="mb-3 mb-md-0">
          <div
            className="p-4 rounded d-flex flex-column justify-content-center"
            style={{
              backgroundImage: `url(' /home7/ads2.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "220px",
              color: "#333",
            }}
          ></div>
        </Col>

        <Col md={6}>
          <div
            className="p-4 rounded d-flex flex-column justify-content-center"
            style={{
              backgroundImage: `url(' /home7/ads1.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "220px",
              color: "#333",
            }}
          ></div>
        </Col>
      </Row>
      <div className={`${styles.shop} row g-4 align-items-start mt-5`}>
        

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
          <div
            className={styles.shopBanner}
            style={{ backgroundImage: `url(${lego})` }}
          >
            <div></div>
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

          {/* مكان استدعاء الكاردات */}
          <Row>
            {cartProduct.map((item, id) => (
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
      
                    <div className="d-flex justify-content-center gap-1 my-2">
                      {productTimer.map((item, id) => (
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
            
      <Row className="my-5">
        <Col md={6} className="mb-3 mb-md-0">
          <div
            className="p-4 rounded d-flex flex-column justify-content-center"
            style={{
              backgroundImage: `url(' /home7/ads2.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "220px",
              color: "#333",
            }}
          ></div>
        </Col>

        <Col md={6}>
          <div
            className="p-4 rounded d-flex flex-column justify-content-center"
            style={{
              backgroundImage: `url(' /home7/ads1.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "220px",
              color: "#333",
            }}
          ></div>
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
                  <SwiperSlide className="my-5 p-3">
                    <div className="d-flex flex-column h-100">
                      <img
                        src={LastSectionImg1}
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
                        src={LastSectionImg2}
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
                        src={LastSectionImg3}
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
                        src={LastSectionImg4}
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
    </Container>
  );
}
export default Hero7;
