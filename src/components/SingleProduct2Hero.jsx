import { Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SingleProduct2.css";
import { useState } from "react";
import { TbBackground } from "react-icons/tb";
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from "react-icons/fa";
import RecentlyViewedCard from "./RecentlyViewedCard";

function SingleProduct2Hero() {
  const h3Style = { color: "#425a8b", fontSize: "32px" };
  const textStyle = { color: "#8c9ec5", fontSize: "12px" };
  const text2Style = { color: "#8c9ec5", fontSize: "20px" };
  const aStyle = { color: "#425a8b", fontSize: "12px" };
  const a2Style = { color: "#425a8b", fontSize: "14px" };
  const spanStyle = { color: "#425a8b", fontSize: "16px" };

  const [active, setActive] = useState(-1);
  const [color, setColor] = useState("Pink");
  const [active1, setActive1] = useState(-1);
  const [styleP, setStyleP] = useState("S22 Ultra");
  const [active2, setActive2] = useState(-1);
  const [size, setSize] = useState("1GB");
  const [ showDetails , setShowDetails]=
  useState(false);
  const recentlyViewedProducts = [
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
    <>
          <Row className="pt-5">
            <Col lg={5}>
              <div className=" d-flex justify-content-end">
                <Carousel
                  controls={false}
                  interval={null}
                  indicators={true}
                  touch={true}
                >
                  <Carousel.Item
                    className="border border-2 rounded-2 align-content-center position-relative"
                    style={{ width: "300px", height: "500px" }}
                  >
                    <div>
                      <img
                        src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/img-gallery-1.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item
                    className="border border-2 rounded-2 align-content-center position-relative"
                    style={{ width: "300px", height: "500px" }}
                  >
                    <div>
                      <img
                        src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/img-gallery-2.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item
                    className="border border-2 rounded-2 align-content-center position-relative"
                    style={{ width: "300px", height: "500px" }}
                  >
                    <div>
                      <img
                        src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/img-gallery-3.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item
                    className="border border-2 rounded-2 align-content-center position-relative"
                    style={{ width: "300px", height: "500px" }}
                  >
                    <div>
                      <img
                        src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/img-gallery-4.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item
                    className="border border-2 rounded-2 align-content-center position-relative"
                    style={{ width: "300px", height: "500px" }}
                  >
                    <div>
                      <img
                        src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/img-gallery-5.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item
                    className="border border-2 rounded-2 align-content-center position-relative"
                    style={{ width: "300px", height: "500px" }}
                  >
                    <div>
                      <img
                        src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/img-gallery-6.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item
                    className="border border-2 rounded-2 align-content-center position-relative"
                    style={{ width: "300px", height: "500px" }}
                  >
                    <div>
                      <img
                        src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/img-gallery-7.jpg"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
    
            <Col lg={7}>
              <div className="text-start pe-4">
                <h3 className="mt-1 mb-2 fw-bold" style={h3Style}>
                  Samsung Galaxy S22 Ultra, 8K Camera & Video, Brightest Display
                  Screen, S Pen Pro
                </h3>
                <Row className="justify-content-between border-bottom pb-3">
                  <Col lg={4} md={4} sm={3}>
                    <div>
                      <span style={textStyle}>by</span>
                      <a
                        href=""
                        className="text-decoration-none ms-1 fw-semibold"
                        style={aStyle}
                      >
                        Ecom Tech
                      </a>
                    </div>
                    <div>
                      <img src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/icons/star.svg" />
                      <img src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/icons/star.svg" />
                      <img src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/icons/star.svg" />
                      <img src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/icons/star.svg" />
                      <img src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/icons/star.svg" />
                      <span className="ms-1" style={textStyle}>
                        (65 reviews)
                      </span>
                    </div>
                  </Col>
                  <Col lg={8} md={8} sm={9}>
                    <div className=" text-end">
                      <span className="btn border border-1 rounded-1 px-2 me-2 ms-2">
                        <img
                          src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/icons/wishlist.svg"
                          alt=""
                        />
                      </span>
                      <span style={spanStyle}>Add to Wish list</span>
                      <span className="btn border border-1 rounded-1 px-2 me-2 ms-2">
                        <img
                          src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/template/icons/compare.svg"
                          alt=""
                        />
                      </span>
                      <span style={spanStyle}>Add to Compare</span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <div className="d-flex">
                      <h3 style={h3Style}>$2856.3</h3>
                      <span
                        className="text-decoration-line-through ms-2 mt-1"
                        style={text2Style}
                      >
                        $3225.6
                      </span>
                    </div>
                    <ul className="list-dot  ms-3" style={a2Style}>
                      <li className="w-100"> 8k super steady video</li>
                      <li className="w-100">Nightography plus portait mode</li>
                      <li className="w-100">
                        50mp photo resolution plus bright display
                      </li>
                      <li className="w-100">Adaptive color contrast</li>
                      <li className="w-100">premium design & craftmanship</li>
                      <li className="w-100">
                        Long lasting battery plus fast charging
                      </li>
                    </ul>
                     <Row>
           <Col lg={6}>
           <div className="fw-bold">
           <div>
        <span style={aStyle}>SKU: </span>
        <span style={textStyle}>iphone12pro128</span>
      </div>

      <div>
        <span style={aStyle}>Category: </span>
        <span style={textStyle}>Smartphones</span>
      </div>

      <div>
        <span style={aStyle}>Tags: </span>
        <span style={textStyle}>Blue, Smartphone</span>
      </div>
    </div>
  </Col>
  <Col lg={6}>
    <div>
      <span style={aStyle}>Free Delivery </span>
      <span style={textStyle}>Available for all locations. </span>
      <span style={textStyle}>Delivery Options &amp; Info</span>
    </div>
  </Col>
  <Col lg={6}>
    <div className="d-flex align-items-center gap-3">
      <span style={aStyle}>Share</span>

      <FaFacebookF style={{ color: textStyle.color, cursor: "pointer" }} />
      <FaPinterestP style={{ color: textStyle.color, cursor: "pointer" }} />
      <FaTwitter style={{ color: textStyle.color, cursor: "pointer" }} />
      <FaInstagram style={{ color: textStyle.color, cursor: "pointer" }} />
    </div>
  </Col>
</Row>
 </Col>
                  <Col md={6} className="border mt-2">
                    <ul
                      className="list-unstyled list-group ms-3 p-2"
                      style={{ fontSize: "14px" }}
                    >
                      <div className="d-flex gap-2 fw-semibold">
                        <span style={{ color: "#425a8b" }}>Color:</span>
                        <span style={{ color: "#fd9636" }}>{color}</span>{" "}
                      </div>
                      <div className="d-flex mt-2 gap-1">
                        <li className="list-group-item rounded-1 overflow-hidden  disabled p-0">
                          <img
                            src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/img-gallery-1.jpg"
                            alt=""
                            className="img-fluid"
                            style={{
                              width: "33px",
                              height: "33px",
                              opacity: "0.5",
                            }}
                          />
                        </li>
                        <li
                          className={`list-group-item rounded-1 overflow-hidden  p-0 ${active == 0 ? "active" : ""}`}
                          onClick={() => {
                            setColor("Pink");
                            setActive(0);
                          }}
                        >
                          <img
                            src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/img-gallery-2.jpg"
                            alt=""
                            className="img-fluid"
                            style={{ width: "33px", height: "33px" }}
                          />
                        </li>
                        <li
                          className={`list-group-item  rounded-1 overflow-hidden  p-0 ${active == 1 ? "active" : ""}`}
                          onClick={() => {
                            setColor("Gold");
                            setActive(1);
                          }}
                        >
                          <img
                            src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/img-gallery-3.jpg"
                            alt=""
                            className="img-fluid"
                            style={{ width: "33px", height: "33px" }}
                          />
                        </li>
                        <li
                          className={`list-group-item rounded-1 overflow-hidden   p-0 ${active == 2 ? "active" : ""}`}
                          onClick={() => {
                            setColor("Silver");
                            setActive(2);
                          }}
                        >
                          <img
                            src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/img-gallery-4.jpg"
                            alt=""
                            className="img-fluid"
                            style={{ width: "33px", height: "33px" }}
                          />
                        </li>
                        <li
                          className={`list-group-item rounded-1 overflow-hidden  p-0 ${active == 3 ? "active" : ""}`}
                          onClick={() => {
                            setColor("Pink Gold");
                            setActive(3);
                          }}
                        >
                          <img
                            src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/img-gallery-5.jpg"
                            alt=""
                            className="img-fluid"
                            style={{ width: "33px", height: "33px" }}
                          />
                        </li>
                        <li className="list-group-item rounded-1 overflow-hidden  disabled  p-0">
                          <img
                            src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/img-gallery-6.jpg"
                            alt=""
                            className="img-fluid "
                            style={{
                              width: "33px",
                              height: "33px",
                              opacity: "0.5",
                            }}
                          />
                        </li>
                        <li className="list-group-item rounded-1 overflow-hidden  disabled p-0">
                          <img
                            src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/img-gallery-7.jpg"
                            alt=""
                            className="img-fluid"
                            style={{
                              width: "33px",
                              height: "33px",
                              opacity: "0.5",
                            }}
                          />
                        </li>
                      </div>
                    </ul>
                    <ul
                      className="list-unstyled list-group ms-1 mt-2"
                      style={{ fontSize: "14px" }}
                    >
                      <div className="d-flex gap-2 fw-semibold">
                        <span style={{ color: "#425a8b" }}>Style:</span>
                        <span style={{ color: "#fd9636" }}>{styleP}</span>{" "}
                      </div>
                      <div className="d-flex mt-2 gap-1 ">
                        <li className="list-group-item rounded-1 px-2 my-1 disabled p-0">
                          <span
                            style={{
                              opacity: "0.5",
                            }}
                          >
                            S22 Ultra
                          </span>
                        </li>
                        <li
                          className={`list-group-item rounded-1 px-2 p-0 my-1  ${active1 == 0 ? "active" : ""}`}
                          onClick={() => {
                            setStyleP("S22");
                            setActive1(0);
                          }}
                        >
                          <span>S22</span>
                        </li>
                        <li
                          className={`list-group-item  rounded-1 px-1 my-1 p-0 ${active1 == 1 ? "active" : ""}`}
                          onClick={() => {
                            setStyleP("S22 + Standing Cover");
                            setActive1(1);
                          }}
                        >
                          <span>S22 + Standing Cover</span>
                        </li>
                      </div>
                    </ul>
                    <ul
                      className="list-unstyled list-group ms-1 mt-2"
                      style={{ fontSize: "14px" }}
                    >
                      <div className="d-flex gap-2 fw-semibold flex-wrap">
                        <span style={{ color: "#425a8b" }}>Size:</span>
                        <span style={{ color: "#fd9636" }}>{size}</span>{" "}
                      </div>
                      <div className="d-flex mt-2 gap-1 flex-wrap">
                        <li className="list-group-item rounded-1 px-2 my-1 disabled p-0">
                          <span
                            style={{
                              opacity: "0.5",
                            }}
                          >
                            1GB
                          </span>
                        </li>
                        <li
                          className={`list-group-item rounded-1 px-2 p-0 my-1  ${active2 == 0 ? "active" : ""}`}
                          onClick={() => {
                            setSize("512 GB");
                            setActive2(0);
                          }}
                        >
                          <span>512 GB</span>
                        </li>
                        <li
                          className={`list-group-item  rounded-1 px-1 my-1 p-0 ${active2 == 1 ? "active" : ""}`}
                          onClick={() => {
                            setSize("256 GB");
                            setActive2(1);
                          }}
                        >
                          <span>256 GB</span>
                        </li>
                        <li
                          className={`list-group-item  rounded-1 px-1 my-1 p-0 ${active2 == 2 ? "active" : ""}`}
                          onClick={() => {
                            setSize("128 GB");
                            setActive2(2);
                          }}
                        >
                          <span>128 GB</span>
                        </li>
                        <li className="list-group-item rounded-1 px-2 my-1 disabled p-0">
                          <span
                            style={{
                              opacity: "0.5",
                            }}
                          >
                            64GB
                          </span>
                        </li>
                      </div>
                    </ul>
                    
                   
                    <div className="d-flex gap-5 mb-5 pt-3 ">
                         <p className="fw-bold " style={a2Style}>
                      Quantity
                    </p>
                      <div className="position-relative">
                        <input
                          type="text"
                          name=""
                          id=""
                          className=" border-0 text-center quIn fw-bold"
                          placeholder="2"
                          style={spanStyle}
                        />
                        <span
                          className="position-absolute end-100"
                          style={{ marginRight: "-10px", ...spanStyle }}
                        >
                          -
                        </span>
                        <span
                          className="position-absolute start-100"
                          style={{ marginLeft: "-10px", ...spanStyle }}
                        >
                          +
                        </span>
                      </div>
                      
                    </div>
                    <Col xs={12}> 
                      <a href="" className=" d-block btn AddBtn mb-2">
                        Add to cart
                      </a>
                      <a href="" className="d-block btn BuyBtn mb-3 ">
                        Buy now
                      </a>
                      </Col>
                     
                  </Col>
          

            </Row>
          </div>
        </Col>
      </Row>
      {/* Frequently Bought Together */}
<section className="mt-5 frequentlyBought">
  <h4 className="frequently fw-semibold mb-4 pt-5 ">Frequently Bought Together</h4>

  <div className="row align-items-center g-4">
    <div className="col-12 col-lg-9">
      <div className="row align-items-center g-2">
        <div className="col">
          <div className="frequentlyImage">
            <img
              src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/sp1.png"
              alt="Headphones"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="col-auto">
          <span className="frequentlyPlus">+</span>
        </div>

        <div className="col">
          <div className="frequentlyImage">
            <img
              src="	https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/sp2.png"
              alt="Smart watch"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="col-auto">
          <span className="frequentlyPlus">+</span>
        </div>

        <div className="col">
          <div className="frequentlyImage">
            <img
              src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/sp3.png"
              alt="Wireless earbuds"
              className="img-fluid"
            />
          </div>
        </div>
         <div className="col-auto">
          <span className="frequentlyPlus">+</span>
        </div>

        <div className="col">
          <div className="frequentlyImage">
            <img
              src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/sp4.png"
              alt="Wireless earbuds"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="col-12 col-lg-2">
      <h3 className="frequentlyPrice fw-semibold mb-3">
        $2856.30 <span>(3 items)</span>
      </h3>

      <button type="button" className="btn frequentlyButton w-100">
        Add To Cart
      </button>
    </div>
  </div>

  <div className="d-flex flex-column gap-2 mt-4 frequentlyList">
    <label className="d-flex align-items-start gap-2">
      <input type="checkbox" defaultChecked />
      <span>
        This item: iPhone 12 Pro Max 128GB Pacific Blue - $1,099.00
      </span>
    </label>

    <label className="d-flex align-items-start gap-2">
      <input type="checkbox" defaultChecked />
      <span>
        Apple AirPods Pro, Active Noise Cancellation - $197.00
      </span>
    </label>

    <label className="d-flex align-items-start gap-2">
      <input type="checkbox" defaultChecked />
      <span>
        Apple iMac 24” All-In-One Computer - $1,599.00
      </span>
    </label>
  </div>
</section>
{/* Product Details Tabs */}
<section className="container-fluid mt-5 productDetails">
 <ul className="nav productTabs flex-wrap">
  <li className="nav-item">
    <a href="#description" className="nav-link active">Description</a>
  </li>

  <li className="nav-item">
    <a href="#specification" className="nav-link">Specification</a>
  </li>

  <li className="nav-item">
    <a href="#additional" className="nav-link">Additional information</a>
  </li>

  <li className="nav-item">
    <a href="#reviews" className="nav-link">Reviews (2)</a>
  </li>

  <li className="nav-item">
    <a href="#vendor" className="nav-link">Vendor</a>
  </li>
</ul>

 <div className="productDescription">
  <p>
    It is a paradisematic country, in which roasted parts of sentences fly
    into your mouth. Even the all-powerful Pointing has no control about
    the blind texts.
  </p>

  <p>
    When she reached the first hills of the Italic Mountains, she had a last view back
     on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and
      the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek
      , then she continued her way. On her way she met a copy. The copy warned the Little Blind Text,
       that where it came from it would have been rewritten a thousand times and everything that was
        left from its origin would be the word “and” and the Little Blind Text should turn around and return to its own, safe country.
         It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text
           by the name of Lorem Ipsum decided to leave for the far World of Grammar.
  </p>

  {showDetails && (
  <div className="productDescription mt-4">
    <div className="row">
      <div className="col-12">
        <img
          src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/product-banner.jpg"
          alt="Product details"
          className="detailsFullImage"
        />
      </div>
    </div>

    <p className="mt-4">
      It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
       Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
        life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
         wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
       She packed her seven versalia, put her initial into the belt and made herself on the way.
    </p>

    <div className="row mt-4">
      <div className="col-12">
        <img
          src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/product-banner-2.jpg"
          alt="Product details"
          className="detailsFullImage"
        />
      </div>
    </div>
  </div>
)}
  <div className="text-center mt-4">
    <button
      className="btn productMoreBtn"
      type="button"
      onClick={() => setShowDetails(!showDetails)}
    >
      {showDetails ? "Less" : "More Details"}
    </button>
  </div>
</div>
</section>
{/* Related Products */}
<section className="container-fluid productRelatedSection">
  <h3 className="relatedSectionTitle text-start">Related Products</h3>

  <div className="row">
    <div className="col-12">
     {/* مكان استدعاء الكاردات */}
    </div>
  </div>
</section>

<hr className="relatedSectionDivider" />

{/* You May Also Like */}
<section className="container-fluid productRelatedSection">
  <h3 className="relatedSectionTitle text-start">You May Also Like</h3>

  <div className="row">
    <div className="col-12">
     {/* مكان استدعاء الكاردات */}
    </div>
  </div>
</section>

<hr className="relatedSectionDivider" />

{/* Recently Viewed Items */}
<section className="container-fluid px-3 py-4">
  <h3 className=" relatedSectionTitle mb-4 text-start">Recently Viewed Items</h3>

  <div className="row g-3">
    {recentlyViewedProducts.map((product) => (
      <div className="col-12 col-sm-6 col-xl-3" key={product.id}>
        <RecentlyViewedCard product={product} />
      </div>
    ))}
  </div>
</section>

<hr className="relatedSectionDivider" />

{/* Similar Products to Compare */}
<section className="container-fluid productRelatedSection">
  <h3 className="relatedSectionTitle text-start">
    Similar Products to Compare
  </h3>

  <div className="row">
    <div className="col-12">
      {/* مكان استدعاء الكاردات */}
    </div>
  </div>
</section>

{/* iPhone 13 Series Banner */}
<section className="container productBannerSection">
  <div className="row">
    <div className="col-12">
      <img
        src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/product/banner-ads.png"
        alt="iPhone 13 Series"
        className="iphoneSeriesBanner"
      />
    </div>
  </div>
</section>
    </>
  );
}
export default SingleProduct2Hero;
