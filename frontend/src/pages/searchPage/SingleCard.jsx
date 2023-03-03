import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { watches } from "./utils/products";
import { Button, Text } from "@chakra-ui/react";
import { Example } from "../admin/useRadio";
function SingleCard() {
  const [watch, setWatch] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const data = watches.find((el) => el.id === Number(id));
    console.log(data);
    data && setWatch(data);
  }, [id]);

  return (
    <div>
      <div style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "50%", background: "#F9F9F9" }}>
          <img src={watch.image} />
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
          <Text fontSize="3xl">{watch.title}</Text>
          <p>
            <Text fontSize="2xl" fontWeight="bold">
              {" "}
              Rs.{watch.discountPrice}
            </Text>
            <Text fontWeight="light"> Inclusive of all taxes</Text>
            <p>Extra 10% cashback upto INR 500 with zest-updated.png</p>
          </p>

          <div>
            <h3
              style={{
                color: "green",
                marginBottom: "10px",
                marginLeft: "10px",
              }}>
              COLOR
            </h3>
            <Example />
          </div>

          <Button colorScheme="green" size="sm">
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
