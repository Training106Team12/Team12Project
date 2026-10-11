import { useTranslation } from "react-i18next";

import { useState } from "react";
import styles from "./ShopFullWidth.module.css";
import NewProductCard from "./NewProductCard";


import { useContext } from "react";
import { Badge, Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { ProductContext } from "./ProductContext";
import { CartContext } from "../context/CartContext";

function ShopFullWidth(){
  const { t, i18n } = useTranslation();
  
  const { cartProduct } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
const [currentIndex, setCurrentIndex] = useState(0);
const newProducts = [
  {
    id: 1,
    name: "Apple Watch Series 8 [GPS 45mm] Smart Watch",
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-16.png",
    price: "2556.3",
    oldPrice: "3225.6"
  },
  {
    id: 2,
    name: "YSSOA Store Chair Mesh Ergonomic Adjustable Swivel",
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-6.png",
    price: "2556.3",
    oldPrice: "3225.6"
  },
  {
    id: 3,
    name: "Straight Talk Samsung Galaxy A03s, 32GB, Black",
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-9.png",
    price: "2556.3",
    oldPrice: "3225.6"
  },
  {
    id: 4,
    name: "iMac MNE92LL/A 27 Inch, 3.4 GHz Intel Core i5, 8GB RAM, 1TB Drive",
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-10.png",
    price: "2556.3",
    oldPrice: "3225.6"
  }
];
   return (
    <Container className="mt-5">
  <div className={`${styles.shop} row g-4 align-items-start`}>

    {/* Breadcrumb */}
    <div className={styles.breadcrumb}>
      <span>
        <a href="./Home">{t("shopfullwidth.home")}</a>
      </span>
      <span>›</span>
      <span>{t("shopfullwidth.elcetronics")}</span>
      <span>›</span>
      <span>{t("shopfullwidth.cell_phone")}</span>
      <span>›</span>
      <span>{t("shopfullwidth.accessories")}</span>
    </div>


    {/* New Products */}
    <div className={styles.newProductsSection}>

      <button
        className={styles.sliderButton}
        onClick={() => setCurrentIndex(currentIndex - 1)}
        disabled={currentIndex === 0}
      >
        <i className="bi bi-chevron-left"></i>
      </button>

      <div className={styles.newProducts}>
        {newProducts
          .slice(currentIndex, currentIndex + 3)
          .map((product) => (
            <NewProductCard
              key={product.id}
              product={product}
            />
          ))}
      </div>

      <button
        className={styles.sliderButton}
        onClick={() => setCurrentIndex(currentIndex + 1)}
        disabled={currentIndex === 1}
      >
        <i className="bi bi-chevron-right"></i>
      </button>

    </div>


    {/* Banners */}
<div className={styles.bannersRow}>

  <div className={styles.leftBanner}>
    <span className={styles.dealBadge}>{t("shopfullwidth.big_deal")}</span>

    <h3>{t("shopfullwidth.electronic")}</h3>

    <p>{t("shopfullwidth.hot_devices_lets_sit")}</p>

    <div className={styles.electronicImage}></div>
  </div>

  <div className={styles.shopBanner}>
    <div className={styles.bannerContent}></div>
  </div>

</div>

    {/* Right Content */}
    <div className="col-12 ">

      {/* Filter Bar */}
      <div className={styles.filterBar}>

        <button className={styles.filterButton}>
          <i className="bi bi-sliders"></i>
          {t("shopfullwidth.all_filters")}
        </button>

        <div className={styles.results}>
          {t("shopfullwidth.showing_116_of_17_re")}
        </div>

        <div className={styles.sort}>
          <span>{t("shopfullwidth.sort_by")}</span>

          <select>
            <option>{t("shopfullwidth.latest")}</option>
            <option>{t("shopfullwidth.oldest")}</option>
          </select>
        </div>

        <div className={styles.showGroup}>

          <span> {t("shopfullwidth.show")}</span>

          <select>
            <option>{t("shopfullwidth.30_items")}</option>
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
                        {t("shopfullwidth.available")} <b>563</b>
                      </span>
                      <span>
                        {t("shopfullwidth.sold")} <b>289</b>
                      </span>
                    </div>

                    <div>
                      <button
                        className="btn btn-outline-primary rounded-2 w-100"
                        onClick={() => addToCart(item, 1)}
                        name={item.id}
                        id={item.id}
                      >
                        {t("shopfullwidth.add_to_cart")}
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

  </div></Container>
);
}

export default ShopFullWidth;