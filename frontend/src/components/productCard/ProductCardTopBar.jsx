import React from "react";
import { Heading } from "@chakra-ui/react";
import { Button, ButtonGroup, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getWatches } from "../../redux/appReducer/action";

export const ProductCardTopBar = ({ handleFiltering }) => {
  const styles = {
    borderRadius: "50%",

    marginLeft: "20px",
    marginBottom: "50px",
    cursor: "pointer",
  };
  const dispatch = useDispatch();
  const FilterMaterial = [
    {
      img: "https://images.dailyobjects.com/marche/tmp/Milanese-Loop.png?tr=cm-pad_resize,v-2,w-70,h-69,dpr-1",
      category: "milanese loop",
    },
    {
      img: "https://images.dailyobjects.com/marche/icons/category/braided-strap-filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1",
      category: "Braided",
    },
    {
      img: "https://images.dailyobjects.com/marche/icons/category/apple-poppy-leather-filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1",
      category: "Gold",
    },
    {
      img: "https://images.dailyobjects.com/marche/icons/category/watchband-with-case-filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1",
      category: "Watch Case",
    },
    {
      img: "https://images.dailyobjects.com/marche/tmp/Handmade.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1",
      category: "Rainbow",
    },
    {
      img: "https://images.dailyobjects.com/marche/tmp/Silicone.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1",
      category: "Red",
    },
    {
      img: "https://images.dailyobjects.com/marche/tmp/Nylon.png?tr=cm-pad_resize,v-2,w-70,h-70,dpr-1",
      category: "Rose-gold",
    },

    {
      img: "https://images.dailyobjects.com/marche/icons/category/watchband-case-filter-icon.jpg?tr=cm-pad_crop,v-2,w-70,h-70,dpr-1",
      category: "Charcoal",
    },
  ];

  return (
    <div style={{ marginTop: "10%" }}>
      <Heading display="flex" justifyContent="center" size="lg">
        APPLE WATCH STRAPS & BANDS
      </Heading>

      <div
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          paddingTop: "80px",
          justifyContent: "center",
          color: "white",
        }}>
        <div
          onClick={() => dispatch(getWatches())}
          style={{
            cursor: "pointer",
            backgroundColor: "green",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          All
        </div>

        {FilterMaterial.map((el) => {
          return (
            <div>
              <img
                onClick={(e) => handleFiltering(e.target.alt)}
                src={el.img}
                alt={el.category}
                style={{ borderRadius: "50%", marginLeft: "20px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
