import { useState } from "react";
import styles from "./VendorListing.module.css";
import VendorCard from "./VendorCard";

const vendors = [
  {
    id: 1,
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/futur.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 2,
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/elmado.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 3,
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/costctrl.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 4,
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/fasfox.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 5,
     image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/elmado.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 6,
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/fasfox.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 7,
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/aslan.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 8,
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/asembly.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 9,
   image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/futur.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 10,
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/market.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 11,
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/tropper.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 12,
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/elmado.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 13,
     image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/costctrl.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 14,
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/market.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 15,
     image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/fasfox.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 16,
     image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/costctrl.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 17,
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/futur.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
  {
    id: 18,
    image: "https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/vendor/asembly.png",
    products: 360,
    reviews: 65,
    memberSince: 2012,
    address: "5171 W Campbell Ave, Utah, United States",
    phone: "(+91) - 540-025-124553",
  },
];

function VendorListing() {
  const [showMore, setShowMore] = useState(false);
  return (
    <main className="container"> <div className={styles.page}>

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <span>
          <a href="./Home">Home</a>
        </span>
        <span>›</span>
        <span>Vendor listing</span>
      </div>

      {/* Title Section */}
      <div className={styles.titleSection}>

        <div>
          <h1>Vendors Listing</h1>
          <p>
            We have <strong>780</strong> vendors now
          </p>
        </div>

        <div className={styles.actions}>
          <a href="#">Support Ticket</a>
          <a href="#">Become an Affiliate</a>
          <button>Open a Shop</button>
        </div>

      </div>

      {/* Vendors Cards */}
     <div className="container-fluid py-4">
  <div className="row g-4">

    {/* Sidebar */}
    <div className="col-12 col-lg-3 order-2 order-lg-1">
      <div className={styles.sidebar}>
  <h5>Vendor by industry</h5>

  <ul className={styles.industryList}>

    <li>
      <a href="./VendorListing">
        <span className={styles.categoryName}>
          <i className="bi bi-chevron-left"></i>
          Beauty
        </span>
        <span className={styles.count}>09</span>
      </a>
    </li>

    <li>
      <a href="./VendorListing">
        <span className={styles.categoryName}>
          <i className="bi bi-chevron-left"></i>
          Clothing
        </span>
        <span className={styles.count}>12</span>
      </a>
    </li>

    <li>
      <a href="./VendorListing">
        <span className={styles.categoryName}>
          <i className="bi bi-chevron-left"></i>
          Electronics
        </span>
        <span className={styles.count}>24</span>
      </a>
    </li>

    <li>
      <a href="./VendorListing">
        <span className={styles.categoryName}>
          <i className="bi bi-chevron-left"></i>
          Food
        </span>
        <span className={styles.count}>34</span>
      </a>
    </li>

    <li>
      <a href="./VendorListing">
        <span className={styles.categoryName}>
          <i className="bi bi-chevron-left"></i>
          Furniture
        </span>
        <span className={styles.count}>65</span>
      </a>
    </li>

    <li className={styles.hiddenItem}>
      <a href="./VendorListing">
        <span className={styles.categoryName}>
          <i className="bi bi-chevron-left"></i>
          Health
        </span>
        <span className={styles.count}>15</span>
      </a>
    </li>

    <li className={styles.hiddenItem}>
      <a href="./VendorListing">
        <span className={styles.categoryName}>
          <i className="bi bi-chevron-left"></i>
          Jewelry
        </span>
        <span className={styles.count}>67</span>
      </a>
    </li>

    <li className={styles.hiddenItem}>
      <a href="./VendorListing">
        <span className={styles.categoryName}>
          <i className="bi bi-chevron-left"></i>
          Shoes
        </span>
        <span className={styles.count}>89</span>
      </a>
    </li>

    <li className={styles.hiddenItem}>
      <a href="./VendorListing">
        <span className={styles.categoryName}>
          <i className="bi bi-chevron-left"></i>
          Sports
        </span>
        <span className={styles.count}>23</span>
      </a>
    </li>

    <li className={styles.hiddenItem}>
      <a href="./VendorListing">
        <span className={styles.categoryName}>
          <i className="bi bi-chevron-left"></i>
          Beauty Care
        </span>
        <span className={styles.count}>98</span>
      </a>
    </li>

    <li className={showMore ? styles.hiddenItem : ""}>
      <a href="./VendorListing">
        <span className={styles.categoryName}>
          <i className="bi bi-chevron-left"></i>
          Automotive
        </span>
        <span className={styles.count}>98</span>
      </a>
    </li>

     <li className={showMore ? styles.hiddenItem : ""}>
      <a href="./VendorListing">
        <span className={styles.categoryName}>
          <i className="bi bi-chevron-left"></i>
          Books
        </span>
        <span className={styles.count}>104</span>
      </a>
    </li>

    <li className={showMore ? styles.hiddenItem : ""}>
      <a href="./VendorListing">
        <span className={styles.categoryName}>
          <i className="bi bi-chevron-left"></i>
          Toys
        </span>
        <span className={styles.count}>56</span>
      </a>
    </li>

   <li className={showMore ? styles.hiddenItem : ""}>
      <a href="./VendorListing">
        <span className={styles.categoryName}>
          <i className="bi bi-chevron-left"></i>
          Home Decor
        </span>
        <span className={styles.count}>78</span>
      </a>
    </li>

     <li className={showMore ? styles.hiddenItem : ""}>
      <a href="./VendorListing">
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
      </div>
       {/* tags */}
      <h5 className={styles.tagsTitle}>Vendor by tags</h5>

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
{/* make money with us */}
<h5 className={styles.moneyTitle}>
  Make Money with Us
</h5>

<ul className={styles.moneyList}>
  <li>
    <a href="./VendorListing">
      <i className="bi bi-chevron-left"></i>
      <span>Open Shop on ecom</span>
    </a>
  </li>

  <li>
    <a href="./VendorListing">
      <i className="bi bi-chevron-left"></i>
      <span>Sell Your Service on ecom</span>
    </a>
  </li>

  <li>
    <a href="./VendorListing">
      <i className="bi bi-chevron-left"></i>
      <span>Sell on ecom Business</span>
    </a>
  </li>

  <li>
    <a href="./VendorListing">
      <i className="bi bi-chevron-left"></i>
      <span>Sell Your Apps on ecom</span>
    </a>
  </li>

  <li>
    <a href="./VendorListing">
      <i className="bi bi-chevron-left"></i>
      <span>Become an Affiliate</span>
    </a>
  </li>

  <li>
    <a href="./VendorListing">
      <i className="bi bi-chevron-left"></i>
      <span>Advertise Your Product</span>
    </a>
  </li>

  <li>
    <a href="./VendorListing">
      <i className="bi bi-chevron-left"></i>
      <span>Sell Publish with Us</span>
    </a>
  </li>
</ul>
    </div>
   
   
    {/* Cards */}
    <div className="col-12 col-lg-9 order-1 order-lg-2">
      <div className={styles.filterBar}>
  <button className={styles.filterButton}>
    <i className="bi bi-sliders"></i>
    All Filters
  </button>

  <div className={styles.results}>
    Showing 1 to 16 of 17 results
  </div>

  <div className={styles.sort}>
    <span>Sort by</span>
    <select>
      <option>Latest</option>
      <option>Oldest</option>
    </select>
  </div>

  <div className={styles.showGroup}>
    Show 30 items
  </div>

  <button className={styles.viewButton}>
    <i className="bi bi-list"></i>
  </button>

  <button className={styles.viewButton}>
    <i className="bi bi-grid-3x3-gap"></i>
  </button>
</div>
      <div className="row g-4">
        {vendors.map((vendor) => (
          <div className="col-12 col-md-6 col-xl-4" key={vendor.id}>
            <VendorCard vendor={vendor} />
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

    </div></main>
   
  );
}

export default VendorListing;