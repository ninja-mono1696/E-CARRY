import React, { useState } from "react";
import axios from "axios"
import ProductCard from "../../components/productCard/ProductCard";
import { ProductCardTopBar } from "../../components/productCard/ProductCardTopBar";
 
const ProductPage = () => {
const[watches,setWatches]=useState([])

const getWatches=()=>{
  axios.get(` http://localhost:8080/watches`).then((res)=>{
    console.log(res.data)
    setWatches(res.data)
  })
}

getWatches()
  return <div>
    <ProductCardTopBar/>
  <ProductCard watches={watches}/>
</div>;
};

export default ProductPage;
