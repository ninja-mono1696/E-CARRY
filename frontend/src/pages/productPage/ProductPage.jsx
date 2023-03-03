import React, { useState } from "react"
import ProductCard from "../../components/productCard/ProductCard"
import { ProductCardTopBar } from "../../components/productCard/ProductCardTopBar"
import { ProductCardSideBar } from "../../components/productCard/productCardSideBar"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFilterdWatches, getWatches } from "../../redux/appReducer/action"
import { useSearchParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
const ProductPage = () => {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const watches = useSelector((store) => store.appReducer.watches)

  useEffect(() => {
    const sort = searchParams.get("sort")
    const color = searchParams.get("color")
    const paramObj = {
      params: {
        color: color,
        sort: sort,
      },
    }
    dispatch(getWatches(paramObj))
  }, [location.search])

  return (
    <div>
      <ProductCardTopBar />
      <div style={{ display: "flex" }}>
        <ProductCardSideBar />
        <ProductCard watches={watches} />
      </div>
    </div>
  )
}

export default ProductPage
