import React from "react";
import "./productCard.css";

import { useDispatch, useSelector } from "react-redux";
import { getsingleProduct } from "../../redux/appReducer/action";

const ProductCard = ({ watches }) => {
  const styles = {
    border: "1px solid black",
  };
  
  return (
    <div className="watches-container">
      {/* ProductCard */}

      {watches.map((el) => {
        return (
          <div style={styles}>
            <div style={{ backgroundColor: "whitesmoke", height: "60%" }}>
              <img src={el.image} width="100%" />
            </div>
            <div>
              <p>{el.title}</p>
              <div style={{ display: "flex", gap: "10px", marginTop: "-30px" }}>
                {" "}
                <h4>{el.discountPrice}</h4>
                <h4 style={{ color: "gray", textDecoration: "line-through" }}>
                  {el.salePrice}
                </h4>
              </div>

              <h4 style={{ color: "red", marginTop: "-20px" }}>
                BUY ANY 3 @ 2499 ONLY
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
