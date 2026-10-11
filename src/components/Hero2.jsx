import { useTranslation } from "react-i18next";

import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Badge, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CartContext } from "../context/CartContext";
function Hero2() {
    const { t, i18n } = useTranslation();

  const cartContext = useContext(CartContext);

  const { addToCart } = cartContext;

  const CardProductTime = [
    { label: t("hero2.day"), value: "00" },
    { label: t("hero2.hour"), value: "00" },
    { label: t("hero2.min"), value: "00" },
    { label: t("hero2.sec"), value: "00" },
  ];

 

  const cartProduct = [
  {
    id: 1,
    img: " /img/smartwatches.png",
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
    img: " /home3/img-gallery-6.jpg",
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
    img: " /home3/img-gallery-7.jpg",
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
    img: " /home3/imgsp1.png",
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
    img: " /home3/imgsp2.png",
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
    img: " /home3/imgsp3.png",
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
    img: " /home3/imgsp4.png",
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
    img: " /home3/imgsp5.png",
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
    img: " /home3/imgsp6.png",
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
    img: " /home3/imgsp7.png",
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
    img: " /home3/sp3.png",
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
    img: " /home3/sp4.png",
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
    img: " /home3/sp5.png",
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
    img: " /home3/sp6.png",
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
    img: " /home3/sp7.png",
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
    img: " /home3/sp8.png",
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
    img: " /home3/sp9.png",
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
    img: " /home3/img-fridge.png",
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
    img: " /home3/img-gallery-1.jpg",
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
  {
    id: 20,
    img: " /home3/img-gallery-2.jpg",
    name: "Samsung Galaxy S22 Ultra",
    description: "6.8-inch, 8GB RAM, 128GB",
    oldprice: "920$",
    footer: "55 min ago",
    price: 644,
    star: "4",
    offer: "30%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 21,
    img: " /home3/img-gallery-3.jpg",
    name: "Samsung Galaxy S22 Ultra",
    description: "6.8-inch, 12GB RAM, 256GB",
    oldprice: "1000$",
    footer: "3 hours ago",
    price: 700,
    star: "5",
    offer: "30%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 22,
    img: " /home3/img-gallery-4.jpg",
    name: "Samsung Galaxy S22 Ultra",
    description: "6.8-inch, 8GB RAM, 128GB",
    oldprice: "890$",
    footer: "20 min ago",
    price: 623,
    star: "4",
    offer: "30%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 23,
    img: " /home3/img-gallery-5.jpg",
    name: "Samsung Galaxy S22 Ultra",
    description: "6.8-inch, 12GB RAM, 256GB",
    oldprice: "960$",
    footer: "7 hours ago",
    price: 624,
    star: "5",
    offer: "35%",
    catagory: "tecnol",
    quantity: 1,
  },
  {
    id: 24,
    img: " /home3/imgsp6.png",
    name: "Huawei Watch GT 4",
    description: "1.43-inch AMOLED, 32GB, GPS",
    oldprice: "380$",
    footer: "1 hour ago",
    price: 266,
    star: "5",
    offer: "30%",
    catagory: "tecnol",
    quantity: 1,
  },
];

  const [visibleProductCount, setVisibleProductCount] = useState(8);




  const categoriesData = [
    {
      id: 1,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 2,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 3,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 4,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 5,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 6,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 7,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 8,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 9,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 10,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 11,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 12,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 13,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 14,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 15,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 16,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 17,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 18,
      name: "Gaming Gear",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
    {
      id: 19,
      name: "teconlogia",
      items: "1025 items",
      icon: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-5.png",
    },
  ];
  const TimerProduct = [
    { label: t("hero2.day"), value: "20" },
    { label: t("hero2.hour"), value: "20" },
    { label: t("hero2.min"), value: "00" },
    { label: t("hero2.sec"), value: "00" },
  ];

  const pcolor = { color: "white" };
  const spanColor = { color: "#f53658" };

  const h1Size = { fontSize: "4rem" };
  const h2Size = { fontSize: "2.5rem" };
  const h4Size = { fontSize: "1.5rem" };
  const pSize = { fontSize: "1rem" };
  const textSize = { fontSize: "1rem" };
  const bgSlide = { backgroundColor: "#425a8b" };
  const btnColorBlue = { backgroundColor: "#0e2f65" };
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

  const brands = [
    { name: "Asus", logo: " /img/assus.svg" },
    { name: "Sony", logo: " /img/casio.svg" },
    { name: "Acer", logo: " /img/acer.svg" },
    { name: "Nokia", logo: " /img/nokia.svg" },
    { name: "Asus", logo: " /img/assus.svg" },
    { name: "Sony", logo: " /img/casio.svg" },
  ];

  

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
                  backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/bg-slide.png")`,
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
                    {t("hero2.best_sale")}
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
                   {t("hero2.shop_now")}
                  </a>

                  <a
                    href="#"
                    className="border-0 btn rounded-2"
                    style={{
                      ...pcolor,
                      backgroundColor: "transparent",
                    }}
                  >
                   {t("hero2.learn_more")}
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
                  backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/bg-slide-2.png")`,
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
                  {t("hero2.best_sale")}
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
                     {t("hero2.shop_now")}
                  </a>

                  <a
                    href="#learn-more"
                    className="border-0 btn rounded-2"
                    style={{
                      ...pcolor,
                      backgroundColor: "transparent",
                    }}
                  >
                    {t("hero2.learn_more")}
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
                  backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/bg-slide-3.png")`,
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
                   {t("hero2.best_sale")}
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
                     {t("hero2.shop_now")}
                  </a>

                  <a
                    href="#learn-more"
                    className="border-0 btn rounded-2"
                    style={{
                      ...pcolor,
                      backgroundColor: "transparent",
                    }}
                  >
                    {t("hero2.learn_more")}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>

        {/* My Right slide [4 Cards] */}
        <Col lg={5} className="d-flex justify-content-center">
          <Row className="g-4 w-100">
            <Col lg={6} md={6} sm={6} xs={6} className="d-flex">
              <div
                className="card text-center border-0 py-2 w-100 h-100"
                style={{
                  ...pcolor,
                  minHeight: "150px",
                  backgroundColor: "#90b8cc",
                  backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/laptop.png")`,
                  backgroundPosition: "right bottom",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "auto 50%",
                }}
              >
                <p className="my-0 text-black">{t("hero2.new_arrivals")}</p>
                <h4 className="mb-0 text-black" style={h4Size}>
                  {t("hero2.tables_collection")}
                </h4>
              </div>
            </Col>

            <Col lg={6} md={6} sm={6} xs={6} className="d-flex">
              <div
                className="card text-center border-0 py-2 w-100 h-100"
                style={{
                  ...pcolor,
                  minHeight: "150px",
                  backgroundColor: "#78c96d",
                  backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/player.png")`,
                  backgroundPosition: "bottom",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 70%",
                }}
              >
                <p className="my-0 text-black">{t("hero2.new_arrivals")}</p>
                <h4 className="mb-0 text-black" style={h4Size}>
                 {t("hero2.tables_collection")}
                </h4>
              </div>
            </Col>

            <Col lg={6} md={6} sm={6} xs={6} className="d-flex">
              <div
                className="card text-center border-0 py-4 w-100 h-100"
                style={{
                  ...pcolor,
                  minHeight: "150px",
                  backgroundColor: "#90b8cc",
                  backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/bg-newsletter.svg")`,
                  backgroundPosition: "bottom",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              >
                <p className="my-0 text-black">{t("hero2.new_arrivals")}</p>
                <h4 className="mb-0 text-black" style={h4Size}>
                   {t("hero2.tables_collection")}
                </h4>
              </div>
            </Col>

            <Col lg={6} md={6} sm={6} xs={6} className="d-flex">
              <div
                className="card text-center border-0 py-4 w-100 h-100"
                style={{
                  ...pcolor,
                  minHeight: "150px",
                  backgroundColor: "#90b8cc",
                  backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/samsung.png")`,
                  backgroundPosition: "bottom",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              >
                <p className="my-0 text-black">{t("hero2.new_arrivals")}</p>
                <h4 className="mb-0 text-black" style={h4Size}>
                  {t("hero2.tables_collection")}
                </h4>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="container-fluid py-4 my-3 border-top border-bottom bg-light">
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
          className="align-items-center"
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
      </div>
      <div className="container my-5 py-4 bg-white rounded-3 shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-4 px-2">
          <div>
            <h2
              className="fw-bold text-dark mb-1"
              style={{ fontSize: "1.5rem" }}
            >
             {t("hero2.featured_categories")}
            </h2>
            <p className="text-muted small mb-0">
              {t("hero2.choose_your_necessar")}
            </p>
          </div>

          <div className="d-flex gap-2">
            <button
              type="button"
              className="btn btn-light d-flex align-items-center justify-content-center rounded-circle border p-0"
              style={{ width: "36px", height: "36px" }}
            >
              <span
                className="text-secondary fw-bold"
                style={{ transform: "translateY(-1px)" }}
              >
                &lt;
              </span>
            </button>
            <button
              type="button"
              className="btn btn-light d-flex align-items-center justify-content-center rounded-circle border  p-0"
              style={{ width: "36px", height: "36px" }}
            >
              <span
                className="text-secondary fw-bold"
                style={{ transform: "translateY(-1px)" }}
              >
                &gt;
              </span>
            </button>
          </div>
        </div>

        <div
          className="row g-3 px-2 justify-content-start"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {categoriesData.map((category) => (
            <div
              className="col-lg-2 col-md-3 col-sm-6 col-6 "
              key={category.id}
            >
              <div
                className="card h-100 border text-center p-3 align-items-center justify-content-center category-card"
                style={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                <div
                  className="mb-3 fs-2 d-flex align-items-center justify-content-center"
                  style={{ height: "50px" }}
                >
                  <img src={category.icon} alt="" />
                </div>
                <h3
                  className="fw-semibold text-dark mb-1 text-truncate w-100"
                  style={{ fontSize: "0.85rem" }}
                >
                  {category.name}
                </h3>
                <span className="text-muted" style={{ fontSize: "0.75rem" }}>
                  {category.items}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Row>
        <Col lg={6}>
          <div className="card-container overflow-hidden border border-3 border-black">
            <div className="top-deals-badge">{t("hero2.top_deals")}</div>

            <div className="row align-items-center">
              <div className="col-md-4 text-center border-start">
                <div className="d-flex justify-content-center align-items-center gap-2 mb-4 mt-4">
                  <img
                    src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage1/screen-2.png"
                    alt="Mac Pro"
                    className="img-fluid"
                    style={{ maxHeight: "120px" }}
                  />
                </div>

                <div className="d-flex flex-wrap  justify-content-center gap-2 mt-3">
                  {TimerProduct.map((item) => (
                    <div key={item.label} className="flex-grow-1">
                      <div className="timer-box text-center">{item.value}</div>
                      <div className="timer-label text-center">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-md-8 ps-md-4 mt-3 mt-md-0" dir="ltr">
                <span className="text-muted d-block small mb-1">Apple</span>
                <h3
                  className="fw-normal text-dark mb-2"
                  style={{ fontSize: "1.6rem" }}
                >
                  2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB SSD
                </h3>

                <div className="d-flex align-items-center gap-1 mb-3">
                  <div className="star-rating">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <span className="text-muted small">(65)</span>
                </div>

                <div className="d-flex align-items-baseline gap-2 mb-3">
                  <span className="fs-1 fw-bold text-dark">$2856.3</span>
                  <span className="old-price">$3856.3</span>
                </div>

                <div className="mb-4" style={{ maxWidth: "450px" }}>
                  <div className="orang-line mb-2">
                    <div className="orang-line-bar" />
                  </div>
                  <div className="d-flex justify-content-between text-muted small">
                    <span>
                      {t("hero2.available")} <b>568</b>
                    </span>
                    <span>
                      {t("hero2.sold")} <b>289</b>
                    </span>
                  </div>
                </div>

                <ul className="spec-list">
                  <li className="mb-1">27-inch (diagonal) Retina 5K display</li>
                  <li className="mb-1">
                    3.1GHz 6-core 10th-generation Intel Core i5
                  </li>
                  <li>AMD Radeon Pro 5300 graphics</li>
                </ul>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={6}>
          <div className="card-container overflow-hidden border border-3 border-black">
            <div className="top-deals-badge">{t("hero2.top_deals")}</div>

            <div className="row align-items-center">
              <div className="col-md-4 text-center border-start">
                <div className="d-flex justify-content-center align-items-center gap-2 mb-4 mt-4">
                  <img
                    src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage1/screen-2.png"
                    alt="Mac Pro"
                    className="img-fluid"
                    style={{ maxHeight: "120px" }}
                  />
                </div>

                <div className="d-flex flex-wrap  justify-content-center gap-2 mt-3">
                  {[
                    { label: "Day", value: "00" },
                    { label: "Hour", value: "00" },
                    { label: "Min", value: "00" },
                    { label: "Sec", value: "00" },
                  ].map((item) => (
                    <div key={item.label} className="flex-grow-1">
                      <div className="timer-box text-center">{item.value}</div>
                      <div className="timer-label text-center">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-md-8 ps-md-4 mt-3 mt-md-0" dir="ltr">
                <span className="text-muted d-block small mb-1">Apple</span>
                <h3
                  className="fw-normal text-dark mb-2"
                  style={{ fontSize: "1.6rem" }}
                >
                  2022 Apple iMac with Retina 5K Display 8GB RAM, 256GB SSD
                </h3>

                <div className="d-flex align-items-center gap-1 mb-3">
                  <div className="star-rating">
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                    <i className="bi bi-star-fill" />
                  </div>
                  <span className="text-muted small">(65)</span>
                </div>

                <div className="d-flex align-items-baseline gap-2 mb-3">
                  <span className="fs-1 fw-bold text-dark">$2856.3</span>
                  <span className="old-price">$3856.3</span>
                </div>

                <div className="mb-4" style={{ maxWidth: "450px" }}>
                  <div className="orang-line mb-2">
                    <div className="orang-line-bar" />
                  </div>
                  <div className="d-flex justify-content-between text-muted small">
                    <span>
                      {t("hero2.available")} <b>568</b>
                    </span>
                    <span>
                      {t("hero2.sold")} <b>289</b>
                    </span>
                  </div>
                </div>

                <ul className="spec-list">
                  <li className="mb-1">27-inch (diagonal) Retina 5K display</li>
                  <li className="mb-1">
                    3.1GHz 6-core 10th-generation Intel Core i5
                  </li>
                  <li>AMD Radeon Pro 5300 graphics</li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        {cartProduct.slice(0, visibleProductCount).map((item) => (
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
                    {t("hero2.available")} <b>563</b>
                  </span>
                  <span>
                    {t("hero2.sold")} <b>289</b>
                  </span>
                </div>

                <div>
                  <button
                    className="btn btn-outline-primary rounded-2 w-100"
                    onClick={() => addToCart(item, 1)}
                    name={item.id}
                    id={item.id}
                  >
                    {t("hero2.add_to_cart")}
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
      {visibleProductCount < cartProduct.length && (
        <div className="text-center mb-4">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() =>
              setVisibleProductCount((count) =>
                Math.min(count + 8, cartProduct.length),
              )
            }
          >
            Load more
          </button>
        </div>
      )}
      <Row>
        <div className="d-flex justify-content-between align-items-center mb-4 mt-5">
          <div>
            <h2
              className="fw-bold text-dark mb-1"
              style={{ fontSize: "1.5rem" }}
            >
              {t("hero2.latest_news_events")}
            </h2>
            <p className="text-muted small mb-0">From our blog, forum </p>
          </div>

          <div className="d-flex gap-2 me-5">
            <button
              className="btn btn-light d-flex align-items-center justify-content-center rounded-circle border p-0"
              style={{ width: "36px", height: "36px" }}
            >
              <span
                className="text-secondary fw-bold"
                style={{ transform: "translateY(-1px)" }}
              >
                &lt;
              </span>
            </button>
            <button
              className="btn btn-light d-flex align-items-center justify-content-center rounded-circle border  p-0"
              style={{ width: "36px", height: "36px" }}
            >
              <span
                className="text-secondary fw-bold"
                style={{ transform: "translateY(-1px)" }}
              >
                &gt;
              </span>
            </button>
          </div>
        </div>

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
                {t("hero2.development")}
              </span>
              <h3 className="mt-3 me-auto h5 mb-2">
                {t( "hero2.html5_the_future_of_")}
              </h3>
              <p className="lead mb-0">{t("hero2.august_12_20229_mins")}</p>
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
                {t("hero2.technology")}
              </span>
              <h3 className="mt-3 me-auto h5 mb-2">
                {t("hero2.the_latest_technolog")}
              </h3>
              <p className="lead mb-0">{t("hero2.september_02_20224_m")}</p>
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
                {t("hero2.technology")}
              </span>
              <h3 className="mt-3 me-auto h5 mb-2">
                {t("hero2.how_can_web_30_bring")}
              </h3>
              <p className="lead mb-0">{t("hero2.august_30_20225_mins")}</p>
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
               {t("hero2.blockchain")}
              </span>
              <h3 className="mt-3 me-auto h5 mb-2">
               {t("hero2.gaming_and_its_three")}
              </h3>
              <p className="lead mb-0">{t("hero2.august_15_20227_mins")}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </Row>
    </Container>
  );
}

export default Hero2;
