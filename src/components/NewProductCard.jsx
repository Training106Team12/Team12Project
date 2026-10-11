import styles from "./NewProductCard.module.css";

function NewProductCard({ product }) {
  return (
    <div className={styles.newProductCard}>

      <div className={styles.productImage}>
        <img src={product.image} alt={product.name} />
      </div>

      <div className={styles.productInfo}>

        <span className={styles.discount}>-22%</span>

        <h6>{product.name}</h6>

        <div className={styles.rating}>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <span>(65)</span>
        </div>

        <div className={styles.price}>
          <strong>${product.price}</strong>
          <del>${product.oldPrice}</del>
        </div>

      </div>

    </div>
  );
}

export default NewProductCard;