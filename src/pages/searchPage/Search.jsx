import React, { useCallback, useEffect, useState } from "react"
import SearchBarInput from "./SearchBarInput"
import { products } from "./utils/products"
const Search = () => {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const queryHandler = useCallback((val) => {
    setQuery(val)
  }, [])

  useEffect(() => {
    if (query === "") {
      setSuggestions([])
    } else {
      let textquery = query.trim().toLowerCase()
      let newSuggestions = products
        .filter((item) => {
          return item.title.toLowerCase().indexOf(textquery) !== -1
            ? true
            : false
        })
        .map((el) => el.title)
      console.log(newSuggestions)
    }
  }, [query])
  return (
    <div>
      <h3>Search Query: {query}</h3>
      <SearchBarInput queryHandler={queryHandler} />
    </div>
  )
}

export default Search
