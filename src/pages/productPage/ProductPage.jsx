import React, { useState } from "react";
import axios from "axios";
import ProductCard from "../../components/productCard/ProductCard";
import { ProductCardTopBar } from "../../components/productCard/ProductCardTopBar";
import { ProductCardSideBar } from "../../components/productCard/ProductCardSideBar";

const ProductPage = () => {
  const [watches, setWatches] = useState([]);

  const getWatches = () => {
    axios.get(`http://localhost:8080/watches`).then((res) => {
      console.log(res.data);
      setWatches(res.data);
    });
  };

  getWatches();
  return (
    <div>
      <ProductCardTopBar />
      <div style={{ display: "flex" }}>
        <ProductCardSideBar />
        <ProductCard watches={watches} />
      </div>
    </div>
  );
};

export default ProductPage;
