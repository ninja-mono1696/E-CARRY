import React from "react"

import { Link, useSearchParams } from "react-router-dom"

function SeacrhCard({ id, image, title, salePrice, discountPrice }) {
  return (
    <div>
      <Link to={`/search/${id}`}>{title}</Link>
    </div>
  )
}

export default SeacrhCard
