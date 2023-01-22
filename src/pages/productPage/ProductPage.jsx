import React, { useState } from "react";

import ProductCard from "../../components/productCard/ProductCard";
import { ProductCardTopBar } from "../../components/productCard/ProductCardTopBar";
import { ProductCardSideBar } from "../../components/productCard/productCardSideBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterdWatches, getWatches } from "../../redux/appReducer/action";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.getAll("category");
  const dispatch = useDispatch();
  const watches = useSelector((store) => store.appReducer.watches);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("Pink");
  const [order, setOrder] = useState("asc");

  const handleFiltering = (category) => {
    // console.log(color)

    setCategory(category);
    setColor(color);
  };

  useEffect(() => {
    console.log(color);
    dispatch(getFilterdWatches(category));
  }, [category]);

  useEffect(() => {
    dispatch(getWatches(order));
  }, [order]);

  const SortbyPrice = (val) => {
    setOrder(val);
  };

  return (
    <div>
      <ProductCardTopBar handleFiltering={handleFiltering} />
      <div style={{ display: "flex" }}>
        <ProductCardSideBar
          handleFiltering={handleFiltering}
          SortbyPrice={SortbyPrice}
        />
        <ProductCard watches={watches} />
      </div>
    </div>
  );
};

export default ProductPage;
