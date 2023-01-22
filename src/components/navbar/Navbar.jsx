import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCartAlt, BiSearchAlt } from "react-icons/bi";
import { RiAccountPinCircleFill, RiAdminFill } from "react-icons/ri";
import Logo from "../../assets/logo.png";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("/products");

  return (
    <header className="nav">
      <div className="nav_container">
        <div className="nav_logo">
          <img
            className="nav_logo-img"
            src={Logo}
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="nav_content">
          <ul className="nav_list">
            <li className="nav_item">
              <Link to="/products"
                onClick={() => setActiveNav("/products")}
                className={
                  activeNav === "/newArrivals"
                    ? "nav_link active_link"
                    : "nav_link"
                }>
                New Arrivals
              </Link>
            </li>

            <li className="nav_item">
              <Link
                onClick={() => setActiveNav(navigate("/newArrivals"))}
                className={
                  activeNav === "cases_sleeves"
                    ? "nav_link active_link"
                    : "nav_link"
                }>
                Cases & Sleeves
              </Link>
            </li>

            <li className="nav_item">
              <Link
                onClick={() => setActiveNav(navigate("/newArrivals"))}
                className={
                  activeNav === "accessories"
                    ? "nav_link active_link"
                    : "nav_link"
                }>
                accessories
              </Link>
            </li>

            <li className="nav_item">
              <Link
                onClick={() => setActiveNav(navigate("/newArrivals"))}
                className={
                  activeNav === "sale" ? "nav_link active_link" : "nav_link"
                } style={{color: "rgb(235,153,160)"}}>
                sale
              </Link>
            </li>

            <li className="nav_item">
              <Link
                onClick={() => setActiveNav(navigate("/newArrivals"))}
                className={
                  activeNav === "bag&wallets"
                    ? "nav_link active_link"
                    : "nav_link"
                }>
                bag & wallets
              </Link>
            </li>

            <li className="nav_item">
              <Link
                onClick={() => setActiveNav(navigate("/newArrivals"))}
                className={
                  activeNav === "homeOffice"
                    ? "nav_link active_link"
                    : "nav_link"
                }>
                home office
              </Link>
            </li>

            <li className="nav_item">
              <Link
                onClick={() => setActiveNav(navigate("/newArrivals"))}
                className={
                  activeNav === "collections"
                    ? "nav_link active_link"
                    : "nav_link"
                }>
                collections
              </Link>
            </li>

            <li className="nav_item">
              <Link
                onClick={() => setActiveNav(navigate("/newArrivals"))}
                className={
                  activeNav === "gifting" ? "nav_link active_link" : "nav_link"
                }>
                gifting
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav_buttons">
          <BiCartAlt style={{ fontSize: "24px", marginRight: "24px", cursor: "pointer" }} onClick={() => navigate("/cart")} />
          <RiAccountPinCircleFill style={{ fontSize: "24px", marginRight: "24px", cursor: "pointer" }} onClick={() => navigate("/login")} />
          <BiSearchAlt style={{ fontSize: "24px", marginRight: "24px", cursor: "pointer" }} onClick={() => navigate("/search")} />
          <RiAdminFill style={{ fontSize: "24px", cursor: "pointer" }} onClick={() => navigate("/admin")} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
