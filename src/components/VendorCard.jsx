import styles from "./VendorCard.module.css";

function VendorCard({ vendor }) {
  return (
    <div className={`${styles.card} card h-100`}>
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-start">

          <div className="d-flex flex-column align-items-start">

            <img
              src={vendor.image}
              className={styles.logo}
            />

            <div className={styles.rating}>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>

              <span>({vendor.reviews})</span>
            </div>

          </div>

          <div className="text-end">

            <span className={styles.products}>
              {vendor.products} Products
            </span>

            <div className={styles.member}>
              Member since
              <br />
              <strong>{vendor.memberSince}</strong>
            </div>

          </div>

        </div>

        <hr />

        <div className={styles.info}>
          <i className="bi bi-geo-alt"></i>
          <span>{vendor.address}</span>
        </div>

        <div className={styles.info}>
          <i className="bi bi-telephone"></i>
          <span>{vendor.phone}</span>
        </div>

      </div>
    </div>
  );
}

export default VendorCard;