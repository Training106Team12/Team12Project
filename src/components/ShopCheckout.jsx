import { Row, Col, Container } from "react-bootstrap";

export default ShopCheckout;
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { FavContext } from "../context/FavContext";
function ShopCheckout() {
    
  const { cart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-11 col-md-8 col-lg-6">
            <div className="text-center py-5">

              <div
                className="d-flex align-items-center justify-content-center bg-light rounded-circle mx-auto mb-4"
                style={{
                  width: "90px",
                  height: "90px",
                }}
              >
                <i className="bi bi-cart3 fs-1 text-secondary"></i>
              </div>

              <h3 className="fw-bold text-dark mb-2">
                Your cart is empty.
              </h3>

              <p className="text-secondary mb-0">
                Add products to your cart to see them here.
              </p>

            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Container>
      <Row className=" my-5">
        <Col lg={6} md={8} sm={10} xs={12}>
          <form className="border rounded p-4">
            <Row className="mb-4">
              <Col lg={4} md={4} sm={4} xs={12} className="mb-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100"
                >
                  <img
                    src="https://cdn.simpleicons.org/googlepay"
                    style={{
                      height: "60px",
                      width: "auto",
                    }}
                    alt="Google Pay"
                  />
                </button>
              </Col>

              <Col lg={4} md={4} sm={4} xs={12} className="mb-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100"
                >
                  <img
                    src="https://cdn.simpleicons.org/paypal"
                    alt="PayPal"
                    style={{
                      height: "60px",
                      width: "auto",
                    }}
                  />
                </button>
              </Col>

              <Col lg={4} md={4} sm={4} xs={12} className="mb-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary w-100"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="Amazon"
                    style={{
                      height: "60px",
                      width: "80%",
                    }}
                  />
                </button>
              </Col>
            </Row>

            <div className="text-center mb-4">
              <span>Or</span>
            </div>

            <Row className="mb-3 align-items-center">
              <Col lg={6} md={6} sm={6} xs={12}>
                <h5>Contact information</h5>
              </Col>

              <Col lg={6} md={6} sm={6} xs={12} className="text-lg-end">
                Already have an account? <a href="/Login">Login</a>
              </Col>
            </Row>

            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email*"
                  />
                </div>
              </Col>
            </Row>

            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="newsletterCheck"
              />
              <label className="form-check-label" htmlFor="newsletterCheck">
                Keep me up to date on news and exclusive offers
              </label>
            </div>

            <h5 className="mb-3">Shipping address</h5>

            <Row>
              <Col lg={6} md={6} sm={6} xs={12}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name*"
                  />
                </div>
              </Col>

              <Col lg={6} md={6} sm={6} xs={12}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name*"
                  />
                </div>
              </Col>

              <Col lg={12} md={12} sm={12} xs={12}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address 1*"
                  />
                </div>
              </Col>

              <Col lg={12} md={12} sm={12} xs={12}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address 2"
                  />
                </div>
              </Col>

              <Col lg={6} md={6} sm={6} xs={12}>
                <div className="mb-3">
                  <select className="form-select">
                    <option>Select an option...</option>
                    <option>Syria</option>
                    <option>USA</option>
                    <option>Turkey</option>
                  </select>
                </div>
              </Col>

              <Col lg={6} md={6} sm={6} xs={12}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City*"
                  />
                </div>
              </Col>

              <Col lg={12} md={12} sm={12} xs={12}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="PostCode / ZIP*"
                  />
                </div>
              </Col>

              <Col lg={6} md={6} sm={6} xs={12}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company name"
                  />
                </div>
              </Col>

              <Col lg={6} md={6} sm={6} xs={12}>
                <div className="mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone*"
                  />
                </div>
              </Col>

              <Col lg={12} md={12} sm={12} xs={12}>
                <div className="mb-4">
                  <textarea
                    className="form-control"
                    rows={4}
                    placeholder="Additional information"
                  ></textarea>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col lg={6} md={6} sm={6} xs={12} className="mb-2">
                <a href="/Cart" className="text-decoration-none">
                  ← Return to Cart
                </a>
              </Col>

              <Col lg={6} md={6} sm={6} xs={12} className="text-lg-end">
                <button type="submit" className="btn btn-primary">
                  Place an Order →
                </button>
              </Col>
            </Row>
          </form>
        </Col>
        <Col lg={6} md={8} sm={10} xs={12}>
  <div className="container py-4 py-sm-5">

      {/* Header */}
      <div className="row mb-4">
        <div className="col-12 col-sm-12 col-md-8 col-lg-8">

          <h2 className="fw-bold text-dark mb-1">
            Shopping Cart
          </h2>

          <p className="text-secondary mb-0">
            Review your products before checkout
          </p>

        </div>
      </div>

      <div className="row g-4 g-lg-5 align-items-start ">

        {/* Products */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 gap-5 ">

          <div className="card border-0 shadow-sm rounded-3 ">

            {/* Headings */}
            <div className="d-none d-md-block px-3 px-lg-4 pt-3">

              <div className="row align-items-center d-flex justify-content-between text-secondary small fw-semibold">

                <div className="col-12 col-md-4 col-lg-4">
                  Product
                </div>

                <div className="col-6 col-md-2 col-lg-2">
                  Price
                </div>

                <div className="col-6 col-md-2 col-lg-2">
                  Quantity
                </div>

                <div className="col-12 col-md-2 col-lg-2 text-md-end">
                  Total
                </div>

              </div>

            </div>

            {/* Products */}
            <div className="px-3 px-sm-4">

              <table className="w-100">
                <tbody>

                  {cart.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                    />
                  ))}

                </tbody>
              </table>

            </div>

          </div>

        </div>

        {/* Cart */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 shadow-lg rounded-3">



        </div>

      </div>
    </div>        </Col>
      </Row>
    </Container>
  );
}
