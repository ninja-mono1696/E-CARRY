import React from "react";
import { Route, Routes } from "react-router-dom";
// import AccountPage from "../pages/accountPage/AccountPage";
import Admin from "../pages/admin/Admin";
import Cart from "../pages/cartPage/Cart";
import Checkout from "../pages/checkoutPage/Checkout";
import { Ordersucessful } from "../pages/checkoutPage/OrderSucessful";
import Payment from "../pages/checkoutPage/Payment";
import Home from "../pages/homePage/Home";
import ProductPage from "../pages/productPage/ProductPage";
import {SingleProductPage} from "../pages/productPage/singleProductPage/SingleProductPage";
import Search from "../pages/searchPage/Search";

const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        {/* <Route path="/account" element={<AccountPage />} /> */}
        <Route path="/search" element={<Search />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment/" element={<Payment />} />
        <Route path="/payment/os" element={<Ordersucessful />} />
      </Routes>
    </div>
  );
};

export default Mainroute;
