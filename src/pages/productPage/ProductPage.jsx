import React, { useState } from "react";
<<<<<<< HEAD
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

=======

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

>>>>>>> master
export default ProductPage;
