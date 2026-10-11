import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
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
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 gap-5 ">

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


            <div className="card-body p-3 p-sm-4">

              <h4 className="fw-bold text-dark mb-4">
                Cart Totals
              </h4>

              <div className="d-flex justify-content-between align-items-center mb-3">

                <span className="text-secondary">
                  Subtotal
                </span>

                <span className="fw-semibold text-dark">
                  ${totalPrice.toFixed(2)}
                </span>

              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">

                <span className="text-secondary">
                  Shipping
                </span>

                <span className="fw-semibold text-success">
                  Free
                </span>

              </div>  <div className="d-flex justify-content-between align-items-center mb-3">

                <span className="text-secondary">
Estimate for
                </span>

                <span className="fw-semibold ">
                  United Kingdom

                </span>

              </div>
              <hr />

              <div className="d-flex justify-content-between align-items-center mb-4">

                <span className="fs-5 fw-bold text-dark">
                  Total
                </span>

                <span className="fs-5 fw-bold text-dark">
                  ${totalPrice.toFixed(2)}
                </span>

              </div>

              <Link
                to="/ShopCheckout"
                className="btn btn-dark w-100 py-3 fw-semibold rounded-2"
              >
                Proceed to Checkout
              </Link>

            </div>


        </div>

      </div>
    </div>
  );
}

export default Cart;