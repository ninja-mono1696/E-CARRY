import React from "react";

import { useNavigate } from "react-router-dom";

function SearchCard({ id, title, index, setActiveOption }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/search/${id}`);
  };
  return (
    <div
      onClick={() => handleClick(id)}
      onMouseOver={() => setActiveOption(index + 1)}
      style={{
        padding: "15px",
      }}>
      {title}
    </div>
  );
}

export default SearchCard;
