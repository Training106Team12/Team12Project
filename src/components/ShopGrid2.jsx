import { useState } from "react";
import styles from "./ShopGrid2.module.css";
import NewProductCard from "./NewProductCard";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import BestSeller from "./BestSeller";
import "swiper/css";
import "swiper/css/pagination";
import { useContext } from "react";
import { Badge, Card, Col, Container, ProgressBar, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { ProductContext } from "./ProductContext";
import { CartContext } from "../context/CartContext";

function ShopGrid2(){
  
  const { cartProduct } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
    const [showMore, setShowMore]=
    useState(false);
    const [price , setPrice]= 
    useState([0,150]);
    const [selectedColors, setSelectedColors] = useState([]);
const [hoveredColor, setHoveredColor] = useState(null);
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
    <Container className="mt-5"> <div className={`${styles.shop} row g-4 align-items-start`}>

    {/* Breadcrumb */}
    <div className={styles.breadcrumb}>
      <span>
        <a href="./Home">Home</a>
      </span>
      <span>›</span>
      <span>Elcetronics</span>
      <span>›</span>
      <span>cell phone</span>
      <span>›</span>
      <span>accessories</span>
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
    <span className={styles.dealBadge}>BIG DEAL</span>

    <h3>Electronic</h3>

    <p>Hot Devices, Let's sit trending</p>

    <div className={styles.electronicImage}></div>
  </div>

  <div className={styles.shopBanner}>
    <div className={styles.bannerContent}></div>
  </div>

</div>


    {/* Sidebar */}
    <div className="col-12 col-lg-3 order-2 order-lg-1">

      <div className={styles.sidebar}>

        <h5>Vendor by industry</h5>

        <ul className={styles.industryList}>

          <li>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Beauty
              </span>
              <span className={styles.count}>09</span>
            </a>
          </li>

          <li>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Clothing
              </span>
              <span className={styles.count}>12</span>
            </a>
          </li>

          <li>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Electronics
              </span>
              <span className={styles.count}>24</span>
            </a>
          </li>

          <li>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Food
              </span>
              <span className={styles.count}>34</span>
            </a>
          </li>

          <li>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Furniture
              </span>
              <span className={styles.count}>65</span>
            </a>
          </li>

          <li className={styles.hiddenItem}>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Health
              </span>
              <span className={styles.count}>15</span>
            </a>
          </li>

          <li className={styles.hiddenItem}>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Jewelry
              </span>
              <span className={styles.count}>67</span>
            </a>
          </li>

          <li className={styles.hiddenItem}>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Shoes
              </span>
              <span className={styles.count}>89</span>
            </a>
          </li>
          <li className={styles.hiddenItem}>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Sports
              </span>
              <span className={styles.count}>23</span>
            </a>
          </li>

          <li className={styles.hiddenItem}>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Beauty Care
              </span>
              <span className={styles.count}>98</span>
            </a>
          </li>

          <li className={showMore ? styles.hiddenItem : ""}>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Automotive
              </span>
              <span className={styles.count}>98</span>
            </a>
          </li>

          <li className={showMore ? styles.hiddenItem : ""}>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Books
              </span>
              <span className={styles.count}>104</span>
            </a>
          </li>

          <li className={showMore ? styles.hiddenItem : ""}>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Toys
              </span>
              <span className={styles.count}>56</span>
            </a>
          </li>

          <li className={showMore ? styles.hiddenItem : ""}>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Home Decor
              </span>
              <span className={styles.count}>78</span>
            </a>
          </li>

          <li className={showMore ? styles.hiddenItem : ""}>
            <a href="./ShopGrid">
              <span className={styles.categoryName}>
                <i className="bi bi-chevron-left"></i>
                Accessories
              </span>
              <span className={styles.count}>36</span>
            </a>
          </li>

        </ul>

        <button
          type="button"
          className={styles.learnMore}
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Laern More" : "Learn More"}
        </button>


        {/* Tags */}
        <h5 className={styles.tagsTitle}>Products tags</h5>

        <div className={styles.tags}>
          <button>Games Electronics</button>
          <button>Video</button>
          <button>Cell Phone</button>

          <button>Indoor</button>
          <button>VGA Card</button>

          <button>USB</button>
          <button>Lighting</button>
          <button>Camera</button>

          <button>Window</button>
          <button>Air Vent</button>
          <button>Bedroom</button>

          <button>Laptop</button>
          <button>Dashboard</button>

          <button>Keyboard</button>
        </div>


        {/* Product Filter */}
        <div className={styles.productFilter}>

          <h5>Price</h5>

          <div className="pt-5 w-50 mx-auto">
            {" "}
            <Slider
              range
              min={0}
              max={300}
              value={price}
              onChange={setPrice}
              railStyle={{ backgroundColor: "#dde4f0" }}
              trackStyle={{ backgroundColor: "#Fd9636" }}
              handleStyle={[
                {
                  backgroundColor: "#Fd9636",
                  borderColor: "#Fd9636",
                },
                {
                  backgroundColor: "#Fd9636",
                  borderColor: "#Fd9636",
                },
              ]}
            ></Slider>
          </div>

          <p className={styles.priceText}>
            Price Range:
          </p>
          <strong>
            ${price[0]} - ${price[1]}
          </strong>


          {/* Price checkboxes */}
          <div className={styles.priceOptions}>

            <div className="d-flex justify-content-between align-items-center">
              <label>
                <input type="checkbox" />
                <span>Free - $100</span>
              </label>
              <span className={styles.countt}>145</span>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <label>
                <input type="checkbox" />
                <span>$100 - $200</span>
              </label>
              <span className={styles.countt}>56</span>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <label>
                <input type="checkbox" />
                <span>$200 - $400</span>
              </label>
              <span className={styles.countt}>23</span>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <label>
                <input type="checkbox" />
                <span>$400 - $600</span>
              </label>
              <span className={styles.countt}>43</span>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <label>
                <input type="checkbox" />
                <span>$600 - $800</span>
              </label>
              <span className={styles.countt}>65</span>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <label>
                <input type="checkbox" />
                <span>Over $1000</span>
              </label>
              <span className={styles.countt}>56</span>
            </div>

          </div>
        </div>


        {/* Brands */}
        <div className={styles.brandFilter}>

          <h5>Brands</h5>

          <div className="d-flex justify-content-between align-items-center">
            <label>
              <input type="checkbox" />
              <span>Apple</span>
            </label>
            <span className={styles.countt}>12</span>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <label>
              <input type="checkbox" />
              <span>Sony</span>
            </label>
            <span className={styles.countt}>34</span>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <label>
              <input type="checkbox" />
              <span>Toshiba</span>
            </label>
            <span className={styles.countt}>56</span>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <label>
              <input type="checkbox" />
              <span>Asus</span>
            </label>
            <span className={styles.countt}>78</span>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <label>
              <input type="checkbox" />
              <span>Samsung</span>
            </label>
            <span className={styles.countt}>23</span>
          </div>

        </div>


        {/* Color */}
        <div className="mt-4">

          <h5 className="mb-4">Color</h5>

          <div className="row row-cols-5 gx-5 gy-3">

            {[
              { name: "Red", color: "#F53658" },
              { name: "Green", color: "#5BC694" },
              { name: "Blue", color: "#1AAEED" },
              { name: "Purple", color: "#9C79FF" },
              { name: "Black", color: "#050505" },
              { name: "Gray", color: "#DDE4F0" },
              { name: "Pink", color: "#FF94BC" },
              { name: "Brown", color: " #AB5F3E" },
              { name: "Yellow", color: " #F9D915" },
            ].map((item) => {const isSelected = selectedColors.includes(item.name);
              const isHovered = hoveredColor === item.name;

              return (
                <div
                  className="col d-flex flex-column align-items-center gap-2"
                  key={item.name}
                >

                  <button
                    type="button"
                    className={styles.colorCircle}
                    style={{ backgroundColor: item.color }}
                    onMouseEnter={() => setHoveredColor(item.name)}
                    onMouseLeave={() => setHoveredColor(null)}
                    onClick={() => {
                      setSelectedColors((prev) =>
                        prev.includes(item.name)
                          ? prev.filter((color) => color !== item.name)
                          : [...prev, item.name]
                      );
                    }}
                  >
                    {(isSelected || isHovered) && (
                      <i className="bi bi-check"></i>
                    )}
                  </button>

                  <span className="small">{item.name}</span>

                </div>
              );
            })}

          </div>

          <button
            type="button"
            className="btn d-flex align-items-center gap-2 mx-auto mt-4"
            style={{
              backgroundColor: "#eef5fc",
              color: "#315f9f",
              border: "none",
              padding: "5px 10px",
            }}
          >
            <i className="bi bi-sliders"></i>
            More Filters
          </button>

        </div>

      </div>


      <BestSeller />

      <div className={styles.featureBox}>

        <div className={styles.featureContent}>

          <span className={styles.featureNumber}>No.9</span>

          <h3>
            Sensitive Touch
            <br />
            without fingerprint
          </h3>

          <p>Smooth handle and accurate click</p>

          <a href="#">View Details</a>

        </div>

      </div>

    </div>


    {/* Right Content */}
    <div className="col-12 col-lg-9 order-1 order-lg-2">

      {/* Filter Bar */}
      <div className={styles.filterBar}>

        <button className={styles.filterButton}>
          <i className="bi bi-sliders"></i>
          All Filters
        </button>

        <div className={styles.results}>
          Showing 1-16 of 17 results
        </div>

        <div className={styles.sort}>
          <span>Sort by :</span>

          <select>
            <option>Latest</option>
            <option>Oldest</option>
          </select>
        </div>

        <div className={styles.showGroup}>

          <span> Show</span>

          <select>
            <option>30 items</option>
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

    </div>

  </div></Container>
 
);
}

export default ShopGrid2;