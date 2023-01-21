import React from "react";
import "./productCardSidebar.css";

export const ProductCardSideBar = () => {
  const FilterColor = [
    "https://images.dailyobjects.com/marche/icons/filter/color/apple-gold-color-icon.jpg?tr=cm-pad_crop,v-2,w-60,h-60,dpr-1",
    "https://images.dailyobjects.com/marche/icons/color/colorblue.jpg?tr=cm-pad_crop,v-2,w-60,h-60,dpr-1",
    "https://images.dailyobjects.com/marche/icons/filter/color/gold-metal.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1",
    "https://images.dailyobjects.com/marche/icons/color/graphite-color-icon.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1",
    "https://images.dailyobjects.com/marche/icons/filter/color/rainbow-metal.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1",
    "https://images.dailyobjects.com/marche/icons/filter/color/red.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1",
    "https://images.dailyobjects.com/marche/icons/color/rose-gold-metal-color-swatch.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1",
    "https://images.dailyobjects.com/marche/icons/filter/color/silver.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1",
    "https://images.dailyobjects.com/marche/icons/filter/color/black-metal.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1",
  ];

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <button>Fliter</button>
        <button>Sort</button>
      </div>
      <h2>Color</h2>
      <div className="color-filter">
        {FilterColor.map((el) => (
          <img src={el} style={{ borderRadius: "50%" }} />
        ))}
      </div>
      <h2>Sort by price</h2>
      <button>Low to High</button>
      <button>High to Low</button>
    </div>
  );
};
