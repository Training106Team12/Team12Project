import React, { useContext, useEffect, useRef, useState } from "react";
import { Container, Row, Col, Card, Badge, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { CartContext } from "../context/CartContext";
function Hero5() {
  const cartContext = useContext(CartContext);

  const { addToCart } = cartContext;

  const CardProductTime = [
    { label: "Day", value: "00" },
    { label: "Hour", value: "00" },
    { label: "Min", value: "00" },
    { label: "Sec", value: "00" },
  ];
  const cartProduct = [
    {
      id: 1,
      img: " /home5/safety2.png",
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
      img: " /home5/site.png",
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
      img: " /home5/sp1.png",
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
      img: " /home5/sp2.png",
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
      img: " /home5/sp3.png",
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
      img: " /home5/sp4.png",
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
      img: " /home5/sp5.png",
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
      img: " /home5/sp6.png",
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
    {
      id: 9,
      img: " /home5/sp7.png",
      name: "Cordless Tool Set",
      description: "20V, 5 accessories",
      oldprice: "220$",
      footer: "55 min ago",
      price: 143,
      star: "5",
      offer: "35%",
      catagory: "tools",
      quantity: 1,
    },
    {
      id: 10,
      img: " /home5/sp8.png",
      name: "Workshop Equipment",
      description: "75 pieces, metal case",
      oldprice: "310$",
      footer: "1 day ago",
      price: 217,
      star: "5",
      offer: "30%",
      catagory: "workshop",
      quantity: 1,
    },
    {
      id: 11,
      img: " /home5/sp9.png",
      name: "Mechanical Tool Kit",
      description: "94 pieces, chrome steel",
      oldprice: "275$",
      footer: "40 min ago",
      price: 179,
      star: "4",
      offer: "35%",
      catagory: "mechanical",
      quantity: 1,
    },
    {
      id: 12,
      img: " /home5/sp10.png",
      name: "Complete Tool Kit",
      description: "128 pieces, steel case",
      oldprice: "420$",
      footer: "2 hours ago",
      price: 294,
      star: "5",
      offer: "30%",
      catagory: "tools",
      quantity: 1,
    },
    {
      id: 13,
      img: " /home5/staple.png",
      name: "Heavy Duty Staple Gun",
      description: "Steel body, adjustable power",
      oldprice: "85$",
      footer: "25 min ago",
      price: 55,
      star: "4",
      offer: "35%",
      catagory: "tools",
      quantity: 1,
    },
    {
      id: 14,
      img: " /home5/abra.png",
      name: "Portable Abrasive Tool",
      description: "900W, 6 speed settings",
      oldprice: "175$",
      footer: "4 hours ago",
      price: 119,
      star: "5",
      offer: "32%",
      catagory: "equipment",
      quantity: 1,
    },
    {
      id: 15,
      img: " /home5/air.png",
      name: "Air Compressor",
      description: "24L, 8 bar pressure",
      oldprice: "320$",
      footer: "3 hours ago",
      price: 224,
      star: "5",
      offer: "30%",
      catagory: "equipment",
      quantity: 1,
    },
    {
      id: 16,
      img: " /home5/appliance.png",
      name: "Workshop Power Machine",
      description: "1500W, heavy duty motor",
      oldprice: "450$",
      footer: "1 day ago",
      price: 315,
      star: "4",
      offer: "30%",
      catagory: "equipment",
      quantity: 1,
    },
    {
      id: 17,
      img: " /home5/bit.png",
      name: "Drill Bit Collection",
      description: "42 pieces, titanium coated",
      oldprice: "95$",
      footer: "15 min ago",
      price: 62,
      star: "5",
      offer: "35%",
      catagory: "accessories",
      quantity: 1,
    },
    {
      id: 18,
      img: " /home5/blades.png",
      name: "Precision Blade Set",
      description: "18 blades, hardened steel",
      oldprice: "80$",
      footer: "50 min ago",
      price: 52,
      star: "4",
      offer: "35%",
      catagory: "accessories",
      quantity: 1,
    },
    {
      id: 19,
      img: " /home5/box-tool.png",
      name: "Professional Tool Box",
      description: "3 levels, reinforced metal",
      oldprice: "190$",
      footer: "2 days ago",
      price: 133,
      star: "5",
      offer: "30%",
      catagory: "tools",
      quantity: 1,
    },
    {
      id: 20,
      img: " /home5/cordless.png",
      name: "Cordless Screwdriver Pro",
      description: "20V, 2 batteries, LED",
      oldprice: "150$",
      footer: "30 min ago",
      price: 99,
      star: "5",
      offer: "34%",
      catagory: "tools",
      quantity: 1,
    },
    {
      id: 21,
      img: " /home5/cutting.png",
      name: "Electric Cutting Tool",
      description: "1200W, 125mm blade",
      oldprice: "180$",
      footer: "6 hours ago",
      price: 126,
      star: "4",
      offer: "30%",
      catagory: "cutting",
      quantity: 1,
    },
    {
      id: 22,
      img: " /home5/electric.png",
      name: "Electric Power Tool",
      description: "950W, variable speed",
      oldprice: "160$",
      footer: "1 hour ago",
      price: 112,
      star: "5",
      offer: "30%",
      catagory: "electric",
      quantity: 1,
    },
    {
      id: 23,
      img: " /home5/entertainment.png",
      name: "Portable Work Light",
      description: "LED, rechargeable, 20W",
      oldprice: "90$",
      footer: "40 min ago",
      price: 59,
      star: "4",
      offer: "34%",
      catagory: "electric",
      quantity: 1,
    },
    {
      id: 24,
      img: " /home5/hand.png",
      name: "Professional Hand Tools",
      description: "86 pieces, hardened steel",
      oldprice: "200$",
      footer: "3 hours ago",
      price: 139,
      star: "5",
      offer: "30%",
      catagory: "hand-tools",
      quantity: 1,
    },
    {
      id: 25,
      img: " /home5/img1.png",
      name: "Universal Repair Machine",
      description: "1000W, multi purpose",
      oldprice: "290$",
      footer: "2 hours ago",
      price: 203,
      star: "5",
      offer: "30%",
      catagory: "repair",
      quantity: 1,
    },
    {
      id: 26,
      img: " /home5/outdoor.png",
      name: "Outdoor Power Equipment",
      description: "40V, rechargeable battery",
      oldprice: "340$",
      footer: "1 day ago",
      price: 238,
      star: "4",
      offer: "30%",
      catagory: "outdoor",
      quantity: 1,
    },
    {
      id: 27,
      img: " /home5/safety.png",
      name: "Industrial Safety Equipment",
      description: "Helmet, gloves, protective gear",
      oldprice: "140$",
      footer: "35 min ago",
      price: 91,
      star: "5",
      offer: "35%",
      catagory: "safety",
      quantity: 1,
    },
  ];

  const categoriesData = [
    {
      id: 1,
      name: "Cordless Screwdrivers",
      items: "348 items",
      icon: " /home5/cordless.png",
    },
    {
      id: 2,
      name: "Power Drills",
      items: "726 items",
      icon: " /home5/bit.png",
    },
    {
      id: 3,
      name: "Hand Tools",
      items: "512 items",
      icon: " /home5/hand.png",
    },
    {
      id: 4,
      name: "Cutting Tools",
      items: "284 items",
      icon: " /home5/cutting.png",
    },
    {
      id: 5,
      name: "Electric Tools",
      items: "631 items",
      icon: " /home5/electric.png",
    },
    {
      id: 6,
      name: "Blades",
      items: "197 items",
      icon: " /home5/blades.png",
    },
    {
      id: 7,
      name: "Tool Boxes",
      items: "443 items",
      icon: " /home5/box-tool.png",
    },
    {
      id: 8,
      name: "Staple Guns",
      items: "365 items",
      icon: " /home5/staple.png",
    },
    {
      id: 9,
      name: "Air Tools",
      items: "218 items",
      icon: " /home5/air.png",
    },
    {
      id: 10,
      name: "Outdoor Equipment",
      items: "584 items",
      icon: " /home5/outdoor.png",
    },
    {
      id: 11,
      name: "Safety Equipment",
      items: "472 items",
      icon: " /home5/safety.png",
    },
    {
      id: 12,
      name: "Safety Accessories",
      items: "329 items",
      icon: " /home5/safety2.png",
    },
    {
      id: 13,
      name: "Home Appliances",
      items: "815 items",
      icon: " /home5/appliance.png",
    },
    {
      id: 14,
      name: "Entertainment",
      items: "246 items",
      icon: " /home5/entertainment.png",
    },
    {
      id: 15,
      name: "Drill Bits",
      items: "693 items",
      icon: " /home5/bit.png",
    },
    {
      id: 16,
      name: "Screwdriver Sets",
      items: "421 items",
      icon: " /home5/sp1.png",
    },
    {
      id: 17,
      name: "Power Screwdrivers",
      items: "358 items",
      icon: " /home5/sp2.png",
    },
    {
      id: 18,
      name: "Tool Accessories",
      items: "547 items",
      icon: " /home5/sp3.png",
    },
    {
      id: 19,
      name: "Workshop Tools",
      items: "731 items",
      icon: " /home5/sp4.png",
    },
    {
      id: 20,
      name: "Repair Tools",
      items: "286 items",
      icon: " /home5/sp5.png",
    },
    {
      id: 21,
      name: "Professional Tools",
      items: "619 items",
      icon: " /home5/sp6.png",
    },
    {
      id: 22,
      name: "Electric Screwdrivers",
      items: "394 items",
      icon: " /home5/sp7.png",
    },
    {
      id: 23,
      name: "Construction Tools",
      items: "845 items",
      icon: " /home5/sp8.png",
    },
    {
      id: 24,
      name: "Mechanical Tools",
      items: "527 items",
      icon: " /home5/sp9.png",
    },
    {
      id: 25,
      name: "Tool Kits",
      items: "672 items",
      icon: " /home5/sp10.png",
    },
    {
      id: 26,
      name: "Electrical Accessories",
      items: "315 items",
      icon: " /home5/site.png",
    },
    {
      id: 27,
      name: "General Equipment",
      items: "458 items",
      icon: " /home5/img1.png",
    },
  ];
  const TimerProduct = [
    { label: "Day", value: "20" },
    { label: "Hour", value: "20" },
    { label: "Min", value: "00" },
    { label: "Sec", value: "00" },
  ];

  const pcolor = { color: "#0d2d73" };
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
        <Col lg={12} md={12} sm={12} className="d-flex">
          <Swiper
            className="w-100 h-100"
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
            }}
          >
            <SwiperSlide className="h-100">
              <div
                className="card h-100 p-2 text-start border-0 text-center mx-auto"
                style={{
                  ...pcolor,
                  backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage5/banner.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h2
                  style={pSize}
                  className="my-3 bg-success rounded-pill px-3 py-1 mx-auto "
                >
                  New Arrival
                </h2>

                <h1 style={h1Size} className="mx-auto w-75 my-5 p-xm-1  h1home5">
                  Get The Best Collection Of Hand Tools Right{" "}
                </h1>

                <div className="d-flex gap-2 mx-auto">
                  <a
                    href="#"
                    className="text-white border-0 btn fw-bold rounded-2"
                    style={btnColorBlue}
                  >
                    <i className="bi bi-shop"></i> Shop now
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
                className="card h-100 p-2 text-start border-0 text-center mx-auto"
                style={{
                  ...pcolor,
                  backgroundImage: `url("https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage5/banner-2.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h2
                  style={pSize}
                  className="my-3 bg-success rounded-pill px-3 py-1 mx-auto "
                >
                  New Arrival
                </h2>

                <h1 style={h1Size} className="mx-auto w-75 my-5 p-xm-1  h1home5">
                  Get The Best Collection Of Hand Tools Right{" "}
                </h1>

                <div className="d-flex gap-2 mx-auto my-2">
                  <a
                    href="#"
                    className="text-white border-0 btn fw-bold rounded-2"
                    style={btnColorBlue}
                  >
                    <i className="bi bi-shop"></i> Shop now
                  </a>

                  <a
                    href="#"
                    className="border-0 btn rounded-2 "
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
              Featured Categories
            </h2>
            <p className="text-muted small mb-0">
              Choose your necessary products from this feature categories.
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
                  <img
                    src={category.icon}
                    alt=""
                    style={{
                      maxWidth: "150px",
                      height: "64px",
                      objectFit: "contain",
                    }}
                  />
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
        <div className="d-flex justify-content-between align-items-center mb-4 mt-5">
          <div>
            <h2
              className="fw-bold text-dark mb-1"
              style={{ fontSize: "1.5rem" }}
            >
              Latest News & Events
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

      <Row>
        <Col md={6} className="mb-3 mb-md-0">
          <div
            className="p-4 rounded d-flex flex-column justify-content-center"
            style={{
              backgroundImage: `url(' /home5/ads2.png')`,
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
              backgroundImage: `url(' /home5/ads3.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "220px",
              color: "#333",
            }}
          ></div>
        </Col>
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
              src=" /home5/news1.png"
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
              src=" /home5/news2.png"
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
              src=" /home5/news3.png"
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
              src=" /home5/news4.png"
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
      
      <Row>
        <Col md={6} className="mb-3 mb-md-0">
          <div
            className="p-4 rounded d-flex flex-column justify-content-center"
            style={{
              backgroundImage: `url(' /home5/ads4.png')`,
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
              backgroundImage: `url(' /home5/ads5.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "220px",
              color: "#333",
            }}
          ></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero5;
