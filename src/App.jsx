import TopNav from "./components/TopNav";
import Hero2 from "./components/Hero2";
import Hero1 from "./components/Hero1";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import Hero5 from "./components/Hero5";
import Hero6 from "./components/Hero6";
import Hero7 from "./components/Hero7";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Contact from "./components/ContactUs";
import Register from "./components/Register";
import Login from "./components/Login";
import ShopGrid from "./components/ShopGrid";
import ShopGrid2 from "./components/ShopGrid2";
import Footer from "./components/Footer";
import CartItem from "./components/CartItem";
import Cart from "./components/Cart";
import VendorSingle from "./components/VendorSingle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./components/ProductContext";
import VendorListing from "./components/VendorListing";
import { CurrencyProvider } from "./context/CurrencyContext";
import { FavProvider } from "./context/FavContext";
import Career from "./components/Career";
import Term from "./components/Term";
import About from "./components/About";
import Page404 from "./components/Page404";
import ShopFullWidth from "./components/ShopFullWidth";
import SingleProduct1 from "./components/SingleProduct1";
import SingleProduct2 from "./components/SingleProduct2";
import SingleProduct3 from "./components/SingleProduct3";
import SingleProduct4 from "./components/SingleProduct4";
import ShopLeftSidebar from "./components/ShopLeftSidebar";
import FloatingMenu from "./components/FloatingMenu";
import ShopRightSidebar from "./components/ShopRightSidebar";
import Wishlist from "./components/Wishlist";
import ShopCheckout from "./components/ShopCheckout";
import Category from "./components/Category";
import List from "./components/List";
import News  from "./components/News";
import Single from "./components/Single";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const {i18n} = useTranslation();
  useEffect(()=>{
    document.documentElement.dir = i18n.language === 'ar'? 'rtl':'ltr';
    document.documentElement.lang = i18n.language;
  },[i18n.language])
  
  return (
    <CartProvider>
      <FavProvider>
        <ProductProvider>
          <CurrencyProvider>
            <Router>
              <TopNav />
              <Header />
              <FloatingMenu />
              <SideBar />
              <Routes>
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Hero2" element={<Hero2 />} />
                <Route path="/Hero1" element={<Hero1 />} />
                <Route path="/Hero3" element={<Hero3 />} />
                <Route path="/Hero4" element={<Hero4 />} />
                <Route path="/Hero5" element={<Hero5 />} />
                <Route path="/Hero6" element={<Hero6 />} />
                <Route path="/Hero7" element={<Hero7 />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/ShopGrid" element={<ShopGrid />} />
                <Route path="/ShopGrid2" element={<ShopGrid2 />} />
                <Route path="/VendorSingle" element={<VendorSingle />} />
                <Route path="/CartItem" element={<CartItem />} />
                <Route path="/Career" element={<Career />} />
                <Route path="/Term" element={<Term />} />
                <Route path="/About" element={<About />} />
                <Route path="/Page404" element={<Page404 />} />
                <Route path="/VendorListing" element={<VendorListing />} />
                <Route path="/Wishlist" element={<Wishlist />} />
                <Route path="/ShopCheckout" element={<ShopCheckout />} />
                <Route path="/ShopFullWidth" element={<ShopFullWidth />} />
                <Route path="/SingleProduct1" element={<SingleProduct1 />} />
                <Route path="/SingleProduct2" element={<SingleProduct2 />} />
                <Route path="/SingleProduct3" element={<SingleProduct3 />} />
                <Route path="/SingleProduct4" element={<SingleProduct4 />} />
                <Route path="/ShopGrid2" element={<ShopGrid2 />} />
                <Route path="/ShopLeftSidebar" element={<ShopLeftSidebar />} />
                <Route path="/ShopRightSidebar" element={<ShopRightSidebar />} />
                <Route path="/Category" element={<Category />} />
                <Route path="/List" element={<List />} />
                <Route path="/News" element={<News />} />
                <Route path="/Single" element={<Single />} />
                <Route path="*" element={<Hero3 />} />
              </Routes>
              <Footer />
            </Router>
          </CurrencyProvider>
        </ProductProvider>
      </FavProvider>
    </CartProvider>
  );
}

export default App;
