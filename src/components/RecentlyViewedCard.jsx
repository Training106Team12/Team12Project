import "./RecentlyViewedCard.css";

function RecentlyViewedCard({ product }) {
  return (
    <div className="card recently-card h-100 p-2">
      <div className="row g-2 align-items-center h-100">
        <div className="col-5">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid recently-image"
          />
        </div>

        <div className="col-7">
          <p className="text-secondary small mb-1">Apple</p>

          <h6 className="recently-name mb-2">
            {product.name}
          </h6>

          <div className="text-nowrap mb-2">
            <span className="text-warning">★★★★★</span>
            <small className="text-secondary">(65)</small>
          </div>

          <div className="d-flex align-items-center flex-wrap gap-2">
            <strong className="recently-price">
              ${product.price}
            </strong>
            <del className="text-secondary small">
              ${product.oldPrice}
            </del>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentlyViewedCard;