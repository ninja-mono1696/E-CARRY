import React, { useState } from "react";

import ProductCard from "../../components/productCard/ProductCard";
import { ProductCardTopBar } from "../../components/productCard/ProductCardTopBar";
import { ProductCardSideBar } from "../../components/productCard/productCardSideBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWatches } from "../../redux/appReducer/action";
 
 const ProductPage = () => {
// const[watches,setWatches]=useState([])
const dispatch =useDispatch()
const watches = useSelector((store)=>store.appReducer.watches)

useEffect(()=>{

dispatch(getWatches())
},[])

console.log(watches)

  return <div>
    <ProductCardTopBar/>
    <div style={{display:'flex'}}>
    <ProductCardSideBar/>
  <ProductCard watches={watches}/>
    </div>
   
</div>;
};

export default ProductPage;
