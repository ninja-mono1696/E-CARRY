import React from "react"
import "./productCard.css"

import { Link } from "react-router-dom"

const ProductCard = ({ watches }) => {
  const styles = {}

  return (
    <div className="watches-container">
      {watches.length > 0 &&
        watches.map((el) => {
          return (
            <div style={styles}>
              <Link to={`/product/${el.id}`}>
                <div style={{ backgroundColor: "whitesmoke", height: "60%" }}>
                  <img src={el.image} width="100%" />
                </div>
              </Link>
              <div>
                <p>{el.title}</p>
                <div style={{ display: "flex", gap: "10px" }}>
                  {" "}
                  <h4>{el.discountPrice}</h4>
                  <h4 style={{ color: "gray", textDecoration: "line-through" }}>
                    {el.salePrice}
                  </h4>
                </div>

                <h5 style={{ color: "red" }}>BUY ANY 3 @ 2499 ONLY</h5>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ProductCard
