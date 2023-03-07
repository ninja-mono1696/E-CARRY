import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "../components/login_signup/Login"
import Signup from "../components/login_signup/Signup"
import SimpleSidebar from "../pages/accountPage/Account"
import Admin from "../pages/admin/Admin"
import AdminLogin from "../pages/admin/AdminLogin"
import Analytics from "../pages/admin/Analytics"
import DeleteProducts from "../pages/admin/DeleteProducts"
import Cart from "../pages/cartPage/Cart"
import Checkout from "../pages/checkoutPage/Checkout"
import { Ordersucessful } from "../pages/checkoutPage/OrderSucessful"
import Payment from "../pages/checkoutPage/Payment"
import Home from "../pages/homePage/Home"
import ProductPage from "../pages/productPage/ProductPage"
import { SingleProductPage } from "../pages/productPage/singleProductPage/SingleProductPage"
import Search from "../pages/searchPage/Search"
import SingleCard from "../pages/searchPage/SingleCard"

const Mainroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Analytics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment/" element={<Payment />} />
        <Route path="/payment/os" element={<Ordersucessful />} />
        <Route path="/admin/product" element={<Admin />} />
        <Route path="/admin/deleteproducts" element={<DeleteProducts />} />
        <Route path="/search/:id" element={<SingleCard />} />
        <Route path="/simpleside" element={<SimpleSidebar />} />
      </Routes>
    </div>
  )
}

export default Mainroute
