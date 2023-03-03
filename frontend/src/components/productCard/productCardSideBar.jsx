import React, { useEffect, useState } from "react"
import "./productCardSidebar.css"
import { Button, Text } from "@chakra-ui/react"
import { useSearchParams } from "react-router-dom"
import { indexOf } from "lodash"
const FilterColor = [
  {
    img: "https://images.dailyobjects.com/marche/icons/filter/color/apple-gold-color-icon.jpg?tr=cm-pad_crop,v-2,w-60,h-60,dpr-1",
    color: "Pink",
  },
  {
    img: "https://images.dailyobjects.com/marche/icons/color/colorblue.jpg?tr=cm-pad_crop,v-2,w-60,h-60,dpr-1",
    color: "Blue",
  },
  {
    img: "https://images.dailyobjects.com/marche/icons/filter/color/gold-metal.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1",
    color: "Gold",
  },
  {
    img: "https://images.dailyobjects.com/marche/icons/color/graphite-color-icon.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1",
    color: "Black",
  },
  {
    img: "https://images.dailyobjects.com/marche/icons/filter/color/rainbow-metal.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1",
    color: "Rainbow",
  },
  {
    img: "https://images.dailyobjects.com/marche/icons/filter/color/red.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1",
    color: "Red",
  },
  {
    img: "https://images.dailyobjects.com/marche/icons/color/rose-gold-metal-color-swatch.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1",
    color: "Rose-gold",
  },
  {
    img: "https://images.dailyobjects.com/marche/icons/filter/color/silver.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1",
    color: "Silver",
  },
  {
    img: "https://images.dailyobjects.com/marche/icons/filter/color/black-metal.png?tr=cm-pad_resize,v-2,w-60,h-60,dpr-1",
    color: "Charcoal",
  },
]
export const ProductCardSideBar = ({ handleFiltering, SortbyPrice }) => {
  const [searchParam, setSearchParam] = useSearchParams()
  const [color, setColor] = useState([])
  const [sort, setSort] = useState([])

  const handleFilter = (val) => {
    setColor(val)
  }

  const Sort = (val) => {
    setSort(val)
  }

  useEffect(() => {
    const params = {
      color,
      sort,
    }
    setSearchParam(params)
  }, [color, sort])

  return (
    <div style={{ marginLeft: "20px" }}>
      <Text color="green" fontWeight="bold">
        Fliter by Color
      </Text>

      <div className="color-filter">
        {FilterColor.map((el) => (
          <div style={{ width: "100%", cursor: "pointer" }}>
            <img
              onClick={(e) => handleFilter(e.target.alt)}
              src={el.img}
              style={{ borderRadius: "50%" }}
              alt={el.color}
            />
            <p style={{ marginLeft: "10px" }}>{el.color}</p>
          </div>
        ))}
      </div>
      <Text color="green" fontWeight="bold">
        Sort by price
      </Text>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "50%",
          marginTop: "20px",
        }}
      >
        <Button onClick={() => Sort("desc")} colorScheme="facebook">
          Low to High
        </Button>
        <Button onClick={() => Sort("asc")} colorScheme="green">
          High to Low
        </Button>
      </div>
    </div>
  )
}
