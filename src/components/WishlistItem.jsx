import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { FavContext } from "../context/FavContext";

function WishlistItem({ item }) {
  const tableContent = {
    fontSize: "15px",
    fontFamily: "Poppins",
    color: "#555",
  };

  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;
  const { removeFromFav } = useContext(FavContext);
  const [isHover, setIsHover] = useState(false);

  const handleRemoveFromFav = () => {
    removeFromFav(item.id);
    window.location.reload();
  };

  return (
    <tr>
      <td colSpan="5" className="p-0 border-0">
        <div className="py-3 py-sm-4 border-bottom">
          <div className="container-fluid px-0">
            <div className="row align-items-center justify-content-between g-3 g-sm-4">

              {/* Product */}
              <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="d-flex align-items-center">

                  <input
                    type="checkbox"
                    className="form-check-input me-3"
                  />

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
                      <Button
                        className="btn-danger position-absolute top-0 end-0 rounded-circle d-flex align-items-center justify-content-center p-0 border-0"
                        style={{
                          width: "28px",
                          height: "28px",
                          transform: "translate(25%, -25%)",
                        }}
                        onClick={handleRemoveFromFav}
                      >
                        ×
                      </Button>
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

              {/* Stock Status */}
              <div className="col-6 col-sm-4 col-md-2 col-lg-2">
                <div className="small text-secondary mb-1">
                  Stock Status
                </div>

                <div className="fw-semibold text-success">
                  In Stock
                </div>
              </div>

              {/* Add To Cart */}
              <div className="col-12 col-sm-4 col-md-2 col-lg-2">
                <Button className="btn-dark"
                                    onClick={() => addToCart(item, 1)}

                >
                  Add to Cart
                </Button>
              </div>

              {/* Remove */}
              <div className="col-12 col-sm-4 col-md-2 col-lg-1">
                <div className="d-flex justify-content-end">
                  <Button
                    variant="link"
                    className="text-danger fs-4 p-0"
                    onClick={handleRemoveFromFav}
                  >
                    ×
                  </Button>
                </div>
              </div>
              </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default WishlistItem;