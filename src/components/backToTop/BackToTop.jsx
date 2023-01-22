import React, { useState } from "react";
import "./backToTop.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
           in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="back_btn"
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}>
      <span className="back_item">
        <img
          src="https://images.dailyobjects.com/icons/right_arrow_black.png"
          alt="backToTop"
          className="back_img"
        />
      </span>
    </button>
  );
};

export default BackToTop;
