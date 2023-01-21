import React, { useState } from "react"

import { Link, useSearchParams } from "react-router-dom"

function SearchCard({ id, title, index, setActiveOption }) {
  return (
    <div>
      <Link to={`/search/${id}`}>
        <div
          onMouseOver={() => setActiveOption(index + 1)}
          style={{
            padding: "10px",
          }}
        >
          {title}
        </div>
      </Link>
    </div>
  )
}

export default SearchCard
