import React from "react";
import "./productCard.css"

const ProductCard = ({watches}) => {


  const styles={
    border: "1px solid black",
  width:"100%"
  }
  return <div  className="watches-container">
    {/* ProductCard */}

    {
     watches.map((el)=>{
      return <div style={styles} >
        <div>
        <img src={el.image} width="100%" />
        </div>
      
      </div>
     })
    }
  </div>;
};

export default ProductCard;
