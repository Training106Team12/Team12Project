import { useContext } from "react";
import { Badge, Card, Col, ProgressBar, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { ProductContext } from "./ProductContext";
import { CartContext } from "../context/CartContext";

import styles from "./VendorSingle.module.css";

function VendorSingle() {
const { cartProduct  } = useContext(ProductContext);
const { addToCart } = useContext(CartContext);
  return (
 <main className="container">
    <div className={styles.page }>

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <span>Home</span>
        <i className="bi bi-chevron-right"></i>
        <span>Ecom JSC</span>
      </div>

      {/* Vendor Section */}
      <div className="container-fluid py-5">
        <div className="row g-4">

          {/* Left */}
          <div className="col-12 col-lg-9">

            <div className={styles.vendorCover}>
              <img
                src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/featured.png"
                
              />

              <div className={styles.vendorInfo}>

                <div className={styles.vendorLogo}>
                  <img
                    src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/fasfox.png"
                    
                  />

                  <span>360 Products</span>
                </div>

                <div className={styles.vendorDetails}>
                  <h1>Fasfox Corporation</h1>

                  <div className={styles.member}>
                    Member since 2012
                  </div>

                  <div className={styles.rating}>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>

                    <span>(65)</span>
                  </div>
                </div>

              </div>

              <div className={styles.contactInfo}>

                <div>
                  <i className="bi bi-geo-alt"></i>

                  <span>
                    5171 W Campbell Ave undefined Kent, Utah 53127
                    <br />
                    United States
                  </span>
                </div>

                <div>
                  <i className="bi bi-telephone"></i>

                  <span>
                    (+91) - 540-025-124553
                    <br />
                    (+91) - 540-025-235688
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* Right - Services */}
          <div className="col-12 col-lg-3">

            <div className={styles.services}>

              <div className={styles.service}>
                <i className="bi bi-send"></i>

                <div>
                  <strong>Free Delivery</strong>
                  <span>From all orders over $10</span>
                </div>
              </div>

              <div className={styles.service}>
                <i className="bi bi-headset"></i>

                <div>
                  <strong>Support 24/7</strong>
                  <span>Shop with an expert</span>
                </div>
              </div>

              <div className={styles.service}>
                <i className="bi bi-box-seam"></i>

                <div>
                  <strong>Return & Refund</strong>
                  <span>Free return over $200</span>
                </div>
              </div>

              <div className={styles.service}>
                <i className="bi bi-shield-check"></i>

                <div>
                  <strong>Secure payment</strong>
                  <span>100% Protected</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
    
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
      </Row>
      </main>
  );
}

export default VendorSingle;