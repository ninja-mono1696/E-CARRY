import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, Heading } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getsingleProduct } from "../../../redux/appReducer/action";

export const SingleProductPage = () => {
  const [isCart, setIsCart] = useState(false);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getsingleProduct(id));
  }, [id]);

  const singleProduct = useSelector((store) => store.appReducer.singleProduct);
  console.log(singleProduct);

  const handleGoTOCart = () => {
    setIsCart(true);
    setCount(count + 1);
  };

  if (count == 2) {
    return <Navigate to="/cart" />;
  }

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "50%" }}>
        <img src={singleProduct.image} />
      </div>
      <div
        style={{
          width: "40%",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          margin: "auto",
        }}>
        <Heading size="lg">{singleProduct.title}</Heading>
        <p>
          Rs. <span>{singleProduct.discountPrice}</span>{" "}
          <span
            style={{
              textDecoration: "line-through",
              marginLeft: "5px",
              marginRight: "5px",
            }}>
            {singleProduct.salePrice}{" "}
          </span>
          <span>Inclusive of all taxes</span>
        </p>
        <p>Extra 10% cashback upto INR 500 with zest</p>

        {/* <h3>Color</h3> */}
        <hr></hr>

        <div>{/* add coolrs */}</div>
        <Button
          onClick={() => handleGoTOCart(singleProduct.id)}
          colorScheme="green">
          {isCart ? "Go To Cart" : "Add To Cart"}
        </Button>
      </div>
    </div>
  );
};
