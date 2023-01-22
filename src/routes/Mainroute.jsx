import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/login/Log";
// import AccountPage from "../pages/accountPage/AccountPage";
import Admin from "../pages/admin/Admin";
// import Analytics from "../pages/admin/Analytics";
import Cart from "../pages/cartPage/Cart";
import Checkout from "../pages/checkoutPage/Checkout";
import { Ordersucessful } from "../pages/checkoutPage/OrderSucessful";
import Payment from "../pages/checkoutPage/Payment";
import Home from "../pages/homePage/Home";
import ProductPage from "../pages/productPage/ProductPage";
import {SingleProductPage} from "../pages/productPage/singleProductPage/SingleProductPage";
// import Search from "../pages/searchPage/Search";

const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" element={<Analytics />} /> */}
       
        {/* <Route path="/search" element={<Search />} /> */}
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment/" element={<Payment />} />
        <Route path="/payment/os" element={<Ordersucessful />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  )
}
export default Mainroute
