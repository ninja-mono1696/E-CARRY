import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { watches } from "./utils/products"
function SingleCard() {
  const [watch, setWatch] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const data = watches.find((el) => el.id === Number(id))
    console.log(data)
    data && setWatch(data)
  }, [id])

  return <div></div>
}

export default SingleCard
