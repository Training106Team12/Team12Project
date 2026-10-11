import { ProductContext } from "./ProductContext";

import { useTranslation } from "react-i18next";

import { useState, useContext } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FavContext } from "../context/FavContext";
import {
  UserRound,
  Heart,
  ShoppingCart,
  GitCompare,
  Menu,
  X,
  ChevronDown,
  Search,
} from "lucide-react";

function Header() {
  const { t, i18n } = useTranslation();
  const { totalItemsFav } = useContext(FavContext);
  const { totalItems } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const { setIsActive, setSearch, setSearchTerm } = useContext(ProductContext);

  const [mobileDropdown, setMobileDropdown] = useState({
    home: false,
    shop: false,
    vendors: false,
    pages: false,
    blog: false,
  });

  const toggleMobileDropdown = (name) => {
    setMobileDropdown((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <header
      className={{
        ...styles.header,
        ...(i18n.language === "ar" ? "text-end my-auto" : "text-start my-auto"),
      }}
    >
      <div className="container-fluid px-4">
        <div className="row align-items-center">
          {/* LOGO */}
          <div className="col-lg-2 col-6">
            <div className={styles.logo}>
              <Link to="/">
                <img src="./src/assets/img/logo.svg" alt="" className="mx-auto ms-lg-5 " />
              </Link>
            </div>
          </div>

          {/* SEARCH */}
          <div className="col-lg-4 d-none d-lg-block">
            <div className={styles.search}>
              {/* <button
                className={styles.category}
                onClick={() => setIsActive(0)}
              >
                <span>{t("header.all_categories")}</span>
                <ChevronDown size={12} />
              </button>
              <button
                className={styles.category}
                onClick={() => setIsActive(1)}
              >
                <span>"tecnol"</span>
                <ChevronDown size={12} />
              </button>
              <button
                className={styles.category}
                onClick={() => setIsActive(2)}
              >
                <span>"kitchen"</span>
                <ChevronDown size={12} />
              </button> */}

<div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  flex: "0 0 170px",
                  padding: "0 12px 0 14px",
                  background: "transparent",
                }}
              >
                <select
                  name=""
                  id=""
                  onChange={(e) => setIsActive(Number(e.target.value))}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    background: "transparent",
                    color: "#424b57",
                    fontSize: "14px",
                    outline: "none",
                    cursor: "pointer",
                    appearance: "none",
                    WebkitAppearance: "none",
                    MozAppearance: "none",
                    paddingRight: "20px",
                    paddingLeft: "0",
                  }}
                >
                  <option value="0">{t("header.all_categories")}</option>
                  <option value="1">tecnol</option>
                  <option value="2">kitchen</option>
                  <option value="3">smartwatch</option>
                </select>

                <ChevronDown
                  size={12}
                  style={{
                    position: "absolute",
                    right: "10px",
                    color: "#6b7280",
                    pointerEvents: "none",
                  }}
                />
              </div>

              <div className={styles.searchLine}></div>

              <input
                type="text"
                placeholder={t("header.search_for_items")}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <Search size={18} className={styles.searchIcon} />
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="col-lg-5 d-none d-lg-block">
            <nav className={styles.nav}>
              <div className={styles.navTop}>
                {/* HOME */}
                <div className={styles.dropdown}>
                  <Link to="#">
                    {t("header.home")}
                    <ChevronDown size={10} />
                  </Link>

                  <ul className={styles.dropdownMenu}>
                    <li>
                      <Link to="/Hero1">{t("header.homepage_1")}</Link>
                    </li>
                    <li>
                      <Link to="/Hero2">{t("header.homepage_2")}</Link>
                    </li>
                    <li>
                      <Link to="/Hero3">{t("header.homepage_3")}</Link>
                    </li>
                    <li>
                      <Link to="/Hero4">{t("header.homepage_4")}</Link>
                    </li>
                    <li>
                      <Link to="/Hero5">{t("header.homepage_5")}</Link>
                    </li>
                    <li>
                      <Link to="/Hero6">{t("header.homepage_6")}</Link>
                    </li>
                    <li>
                      <Link to="/Hero7">{t("header.homepage_7")}</Link>
                    </li>
                    <li>
                      <Link to="/Hero8">{t("header.homepage_8")}</Link>
                    </li>
                    <li>
                      <Link to="/Hero9">{t("header.homepage_9")}</Link>
                    </li>
                    <li>
                      <Link to="/ShopGrid">{t("header.homepage_10")}</Link>
                    </li>
                  </ul>
                </div>

                {/* SHOP */}
                <div className={styles.dropdown}>
                  <Link to="#">
                    {t("header.shop")}
                    <ChevronDown size={10} />
                  </Link>

                  <ul className={styles.dropdownMenu}>
                    <li>
                      <Link to="/ShopGrid">{t("header.shop_grid")}</Link>
                    </li>
                    <li>
                      <Link to="/ShopGrid2">{t("header.shop_grid_2")}</Link>
                    </li>
                    <li>
                      <Link to="/ShopLeftSidebar">
                        {t("header.shop_list_left_sideb")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/ShopRightSidebar">
                        {t("header.shop_list_right_side")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/ShopFullWidth">
                        {t("header.shop_fullwidth")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/singleProduct1">{t("header.single_product")}</Link>
                    </li>
                    <li>
                      <Link to="/singleProduct2">{t("header.single_product_2")}</Link>
                    </li>
                    <li>
                      <Link to="/singleProduct3">{t("header.single_product_3")}</Link>
                    </li>
                    <li>
                      <Link to="/singleProduct4">{t("header.single_product_4")}</Link>
                    </li>
                    <li>
                      <Link to="/Cart">{t("header.shop_cart")}</Link>
                    </li>
                    <li>
                      <Link to="/shopCheckout">{t("header.shop_checkout")}</Link>
                    </li>
                    <li>
                      <Link to="#">{t("header.shop_compare")}</Link>
                    </li>
                    <li>
                      <Link to="/Wishlist">{t("header.shop_wishlist")}</Link>
                    </li>
                  </ul>
                </div>

                {/* VENDORS */}
                <div className={styles.dropdown}>
                  <Link to="#">
                    {t("header.vendors")}
                    <ChevronDown size={10} />
                  </Link>
                  <ul className={styles.dropdownMenu}>
                    <li>
                      <Link to="/VendorListing">
                        {t("header.vendors_listing")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/VendorSingle">
                        {t("header.vendor_single")}
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* PAGES */}
                <div className={styles.dropdown}>
                  <Link to="#">
                    {t("header.pages")}
                    <ChevronDown size={10} />
                  </Link>

                  <ul className={styles.dropdownMenu}>
                    <li>
                      <Link to="/Contact">{t("header.contact_us")}</Link>
                    </li>
                    <li>
                      <Link to="/About">{t("header.about_us")}</Link>
                    </li>
                    <li>
                      <Link to="/Career">{t("header.careers")}</Link>
                    </li>
                    <li>
                      <Link to="/Term">{t("header.term_and_condition")}</Link>
                    </li>
                    <li>
                      <Link to="/Register">{t("header.register")}</Link>
                    </li>
                    <li>
                      <Link to="/login">{t("header.login")}</Link>
                    </li>
                    <li>
                      <Link to="/Page404">{t("header.error404")}</Link>
                    </li>
                  </ul>
                </div>

                {/* BLOG */}
                <div className={styles.dropdown}>
                  <Link to="#">
                    {t("header.blog")}
                    <ChevronDown size={10} />
                  </Link>







                  <ul className={styles.dropdownMenu}>
                    <li>
                      <Link to="/Category">{t("header.blog_category")}</Link>
                    </li>
                    <li>
                      <Link to="/List">{t("header.blog_standard")}</Link>
                    </li>
                    <li>
                      <Link to="/News">{t("header.blog_details")}</Link>
                    </li>
                    <li>
                      <Link to="/Single">{t("header.blog_sidebar")}</Link>
                    </li>
                    <li>
                      <Link to="#">{t("header.blog_grid")}</Link>
                    </li>
                  </ul>
                </div>

                <Link to="/Contact">{t()}</Link>
              </div>
            </nav>
          </div>

          {/* DESKTOP ICONS */}
          <div className="col-lg-1 d-none d-lg-block">
            <div className={styles.icons}>
              <Link to="#" aria-label="My account">
                <UserRound />
              </Link>

              <div className={styles.iconBadge}>
                <Link to="#" aria-label="Wishlist">
                  <Heart />
                </Link>
                <span>{totalItemsFav}</span>
              </div>

              <div className={styles.iconBadge}>
                <Link to="#" aria-label="Cart">
                  <ShoppingCart />
                </Link>
                <span> {totalItems} </span>
              </div>

              <Link to="#" aria-label="Compare products">
                <GitCompare />
              </Link>
            </div>
          </div>

          {/* MOBILE ICONS + HAMBURGER */}
          <div className="col-6 d-lg-none">
            <div className={styles.mobileRight}>
              <div className={styles.mobileIcons}>
                <Link to="#" aria-label="My account">
                  <UserRound />
                </Link>

                <div className={styles.iconBadge}>
                  <Link to="#" aria-label="Wishlist">
                    <Heart />
                  </Link>
                  <span>5</span>
                </div>

                <div className={styles.iconBadge}>
                  <Link to="#" aria-label="Cart">
                    <ShoppingCart />
                  </Link>
                  <span> {totalItems} </span>
                </div>
              </div>

              <button
                type="button"
                className={styles.menuButton}
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {menuOpen && (
            <div className="col-12 d-lg-none">
              <div className={styles.mobileMenu}>
                <nav className={styles.mobileNav}>
                  {/* HOME */}
                  <div className={styles.mobileDropdown}>
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown("home")}
                    >
                      <span>Home</span>

                      <ChevronDown
                        size={16}
                        className={
                          mobileDropdown.home ? styles.rotateArrow : ""
                        }
                      />
                    </button>

                    {mobileDropdown.home && (
                      <ul className={styles.mobileSubMenu}>
                        <li>
                          <Link to="/Hero1">Home Page 1</Link>
                        </li>
                        <li>
                          <Link to="/Hero2">Home Page 2</Link>
                        </li>
                        <li>
                          <Link to="/Hero3">Home Page 3</Link>
                        </li>
                        <li>
                          <Link to="/Hero4">Home Page 4</Link>
                        </li>
                        <li>
                          <Link to="/Hero5">Home Page 5</Link>
                        </li>
                        <li>
                          <Link to="/Hero6">Home Page 6</Link>
                        </li>
                        <li>
                          <Link to="/Hero7">Home Page 7</Link>
                        </li>
                        <li>
                          <Link to="/Hero8">Home Page 8</Link>
                        </li>
                        <li>
                          <Link to="/Hero9">Home Page 9</Link>
                        </li>
                        <li>
                          <Link to="/ShopGrid">Home Page 10</Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* SHOP */}
                  <div className={styles.mobileDropdown}>
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown("shop")}
                    >
                      <span>Shop</span>

                      <ChevronDown
                        size={16}
                        className={
                          mobileDropdown.shop ? styles.rotateArrow : ""
                        }
                      />
                    </button>

                    {mobileDropdown.shop && (
                      <ul className={styles.mobileSubMenu}>
                        <li>
                          <Link to="/ShopGrid">Shop Grid</Link>
                        </li>
                        <li>
                          <Link to="/ShopGrid2">Shop Grid 2</Link>
                        </li>
                        <li>
                          <Link to="/ShopLeftSidebar">
                            Shop List - Left sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to="/ShopRightSidebar">
                            Shop List - Right sidebar
                          </Link>
                        </li>
                        <li>
                          <Link to="/ShopFullWidth">Shop Fullwidth</Link>
                        </li>
                        <li>
                          <Link to="/singleProduct1">Single Product</Link>
                        </li>
                        <li>
                          <Link to="/singleProduct2">Single Product 2</Link>
                        </li>
                        <li>
                          <Link to="/singleProduct3">Single Product 3</Link>
                        </li>
                        <li>
                          <Link to="/singleProduct4">Single Product 4</Link>
                        </li>
                        <li>
                          <Link to="/Cart">Shop Cart</Link>
                        </li>
                        <li>
                          <Link to="/shopCheckout">Shop Checkout</Link>
                        </li>
                        <li>
                          <Link to="#">Shop Compare</Link>
                        </li>
                        <li>
                          <Link to="/Wishlist">Shop Wishlist</Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* VENDORS */}
                  <div className={styles.mobileDropdown}>
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown("vendors")}
                    >
                      <span>Vendors</span>

                      <ChevronDown
                        size={16}
                        className={
                          mobileDropdown.vendors ? styles.rotateArrow : ""
                        }
                      />
                    </button>

                    {mobileDropdown.vendors && (
                      <ul className={styles.mobileSubMenu}>
                        <li>
                          <Link to="/VendorListing">Vendors Listing</Link>
                        </li>

                        <li>
                          <Link to="/VendorSingle">Vendor Single</Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* PAGES */}
                  <div className={styles.mobileDropdown}>
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown("pages")}
                    >
                      <span>Pages</span>

                      <ChevronDown
                        size={16}
                        className={
                          mobileDropdown.pages ? styles.rotateArrow : ""
                        }
                      />
                    </button>

                    {mobileDropdown.pages && (
                      <ul className={styles.mobileSubMenu}>
                        <li>
                          <Link to="/Contact">Contact Us</Link>
                        </li>
                        <li>
                          <Link to="/About">About Us</Link>
                        </li>
                        <li>
                          <Link to="/Career">Careers</Link>
                        </li>
                        <li>
                          <Link to="/Term">Term and Condition</Link>
                        </li>
                        <li>
                          <Link to="/Register">Register</Link>
                        </li>
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                        <li>
                          <Link to="/Page404">Error404</Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* BLOG */}
                  <div className={styles.mobileDropdown}>
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown("blog")}
                    >
                      <span>Blog</span>

                      <ChevronDown
                        size={16}
                        className={
                          mobileDropdown.blog ? styles.rotateArrow : ""
                        }
                      />
                    </button>

                    {mobileDropdown.blog && (
                      <ul className={styles.mobileSubMenu}>
                        <li>
                          <Link to="/Category">Blog Category</Link>
                        </li>
                        <li>
                          <Link to="/List">Blog Standard</Link>
                        </li>
                        <li>
                          <Link to="/News">Blog Details</Link>
                        </li>
                        <li>
                          <Link to="/Single">Blog Sidebar</Link>
                        </li>
                        <li>
                          <Link to="#">Blog Grid</Link>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* CONTACT US */}
                  <Link to="/Contact">Contact Us</Link>
                </nav>

                {/* EXTRA CONTENT */}
                <div className={styles.contactBox}>
                  <div className={styles.mobileDivider}></div>

                  <div className={styles.userInfo}>
                    <img
                      src="/images/ava-1.png"
                      alt="User"
                      className={styles.userImage}
                    />

                    <div>
                      <h4>Hello Steven !</h4>
                      <p>You have 3 new messages</p>
                    </div>
                  </div>

                  <div className={styles.accountLinks}>
                    <div>
                      <Link to="#">My Account</Link>
                      <Link to="#">Order Tracking</Link>
                      <Link to="#">My Orders</Link>
                    </div>

                    <div>
                      <Link to="#">My Wishlist</Link>
                      <Link to="#">Setting</Link>
                      <Link to="#">Sign Out</Link>
                    </div>
                  </div>

                  <div className={styles.mobileDivider}></div>

                  <div className={styles.mobileProduct}>
                    <div className={styles.productText}>
                      <p>Starting from $899</p>

                      <h3>iPhone 12 Pro 128Gb</h3>

                      <span>Special Sale</span>

                      <Link to="#">LEARN MORE →</Link>
                    </div>

                    <div className={styles.productImages}>
                      <img
                        src="https://wp.alithemes.com/html/ecom/demo/assets/imgs/page/homepage1/iphone-12.png"
                        alt="iPhone 12 Pro"
                      />
                    </div>
                  </div>

                  <div className={styles.mobileFooter}>
                    <p>Copyright 2022 © Ecom - Marketplace Template.</p>

                    <p>Designed by AliThemes</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
