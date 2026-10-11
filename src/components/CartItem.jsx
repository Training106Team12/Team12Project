import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  const tableContent = {
    fontSize: "15px",
    fontFamily: "Poppins",
    color: "#555",
  };

  const QuanIn = {
    width: "48px",
    minWidth: "48px",
    maxWidth: "48px",
    height: "42px",
    color: "#555",
    borderRadius: 0,
    flex: "0 0 48px",
  };

  const [isHover, setIsHover] = useState(false);

  return (
    <tr>
      <td colSpan="4" className="p-0 border-0">
        <div className="py-3 py-sm-4 border-bottom">
          <div className="container-fluid px-0">
            <div className="row align-items-center justify-content-between g-3 g-sm-4">

              {/* Product */}
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="d-flex align-items-center ">

                  <div
                    className="position-relative flex-shrink-0 bg-light rounded-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "88px",
                      height: "88px",
                    }}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="img-fluid"
                      style={{
                        width: "75px",
                        height: "75px",
                        objectFit: "contain",
                      }}
                    />

                    {isHover && (
                      <button
                        className="btn btn-danger position-absolute top-0 end-0 rounded-circle d-flex align-items-center justify-content-center p-0 border-0"
                        style={{
                          width: "28px",
                          height: "28px",
                          transform: "translate(25%, -25%)",
                        }}
                        onClick={() => removeFromCart(item.id)}
                      >
                        ×
                      </button>
                    )}
                  </div>

                  <div className="ms-3 ms-sm-4">
                   

                    <div
                      className="fw-semibold text-dark"
                      style={{
                        fontSize: "15px",
                        lineHeight: "1.5",
                      }}
                    >
                      {item.name}
                    </div>
                  </div>

                </div>
              </div>

              {/* Price */}
              <div className="col-6 col-sm-4 col-md-2 col-lg-2">
                <div className="small text-secondary mb-1">
                  Price
                </div>

                <div
                  style={tableContent}
                  className="fw-semibold text-dark"
                >
                  ${item.price.toFixed(2)}
                </div>
              </div>

              {/* Quantity */}
              <div className="col-12 col-sm-4 col-md-2 col-lg-2">
                

                <div
                  className="d-flex"
                  style={{
                    ...tableContent,
                    justifyContent: "flex-start",
                    overflow: "visible",
                  }}
                >
                  <div
                    className="d-flex align-items-stretch border rounded-2 bg-white"
                    style={{ overflow: "visible" }}
                  >

                    <button
                      style={{
                        ...QuanIn,
                        border: "0",
                        borderRight: "1px solid #dee2e6",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                        lineHeight: 1,
                        borderRadius: 0,
                      }}
                      className=" text-dark fw-semibold btn btn-outline-danger "
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                    >
                      −
                    </button>

                    <Form.Control
                      type="text"
                      inputMode="numeric"
                      style={{
                        ...QuanIn,
                        border: "0",
                        boxShadow: "none",
        				      textAlign: "center",
                        padding: 0,
                        minWidth: "48px",
                        maxWidth: "48px",
                        borderRadius: 0,
                      }}
                      value={item.quantity}
                      onChange={(e) => {
                        const next = parseInt(
                          e.target.value,
                          10
                        );

                        if (!Number.isNaN(next)) {
                          updateQuantity(item.id, next);
                        }
                      }}
                    />

                    <button
                      style={{
                        ...QuanIn,
                        border: "0",
                        borderLeft: "1px solid #dee2e6",
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                        lineHeight: 1,
                        borderRadius: 0,
                      }}
                      className="btn btn-outline-success text-dark fw-semibold "
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>

                  </div>
                </div>
              </div>

              {/* Total + Delete */}
              <div className="col-12 col-sm-4 col-md-2 col-lg-2">
                <div className="d-flex align-items-end justify-content-between justify-content-md-end gap-3">

                  <div>
                    <div className="small text-secondary mb-1">
                      Total
                    </div>

                    <div
                      style={tableContent}
                      className="fw-bold text-dark"
                    >
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>

                

                </div>
              </div>

            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default CartItem;