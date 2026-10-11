import { useTranslation } from "react-i18next";

import { useEffect, useState } from "react";
import styles from "./BestSeller.module.css";

const bestSellerProducts = [
  {
    id: 1,
    image:
      "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-3.png",
    name: "PlayStation 4 Slim",
    rating: 5,
    reviews: 65,
    price: 294,
    oldPrice: 420,
  },
  {
    id: 2,
    image:
      "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-2.png",
    name: "Samsung Galaxy Watch Active",
    rating: 4,
    reviews: 42,
    price: 245,
    oldPrice: 350,
  },
  {
    id: 3,
    image:
      "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-1.png",
    name: "LG OLED 43 Smart TV",
    rating: 5,
    reviews: 38,
    price: 680,
    oldPrice: 850,
  },
  {
    id: 4,
    image:
      "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-7.png",
    name: "JBL Wave Wireless",
    rating: 4,
    reviews: 31,
    price: 126,
    oldPrice: 180,
  },
  {
    id: 5,
    image:
      "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/airpod.png",
    name: "ASUS ROG Strix G15",
    rating: 5,
    reviews: 56,
    price: 1080,
    oldPrice: 1350,
  },
  {
    id: 6,
    image:
      "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/clock.png",
    name: "Samsung Galaxy Watch Pro",
    rating: 5,
    reviews: 44,
    price: 350,
    oldPrice: 500,
  },
  {
    id: 7,
    image:
      "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/camera.png",
    name: "Smart AI Security Camera",
    rating: 4,
    reviews: 27,
    price: 169,
    oldPrice: 260,
  },
  {
    id: 8,
    image:
      "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage2/cat-img-8.png",
    name: "Philips Cocktail Blender",
    rating: 5,
    reviews: 49,
    price: 147,
    oldPrice: 210,
  },
];

function BestSeller() {
  const { t, i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState(0);

  const visibleProducts = bestSellerProducts.slice(
    currentPage * 4,
    currentPage * 4 + 4,
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextProducts = () => {
    setCurrentPage((prev) => (prev === 0 ? 1 : 0));
  };

  const previousProducts = () => {
    setCurrentPage((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <div className={styles.bestSeller}>
      <div className={styles.titleRow}>
        <h5>{t("bestseller.best_seller")}</h5>

        <div className={styles.arrows}>
          <button type="button" onClick={previousProducts}>
            <i className="bi bi-chevron-left"></i>
          </button>

          <button type="button" onClick={nextProducts}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      <div>
        {visibleProducts.map((product) => (
          <div className={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className={styles.info}>
              <h6>{product.name}</h6>

              <div className={styles.rating}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <i
                    key={index}
                    className={
                      index < product.rating ? "bi bi-star-fill" : "bi bi-star"
                    }
                  ></i>
                ))}

                <span>({product.reviews})</span>
              </div>

              <div className={styles.price}>
                <strong>${product.price}</strong>
                <span>${product.oldPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
