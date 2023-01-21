import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SearchCard from "./SeacrhCard"
function SearchBarInput({ queryHandler, suggestions }) {
  const [input, setInput] = useState("")

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  useEffect(() => {
    queryHandler(input)
  }, [input, queryHandler])
  const handleClick = (i) => {
    console.log(i)
  }
  return (
    <Wrapper>
      <SearchBarWrapper>
        <Input value={input} onChange={handleInputChange} />
      </SearchBarWrapper>
      {suggestions.map((el, i) => {
        return (
          <SearchCard
            id={el.id}
            image={el.image}
            title={el.title}
            salePrice={el.salePrice}
            discountPrice={el.discountPrice}
          />
        )
      })}
    </Wrapper>
  )
}

export default SearchBarInput

const Input = styled.input`
  flex: 1;
  font-size: 20px;
  border: none;
  outline: none;
`
const Wrapper = styled.div`
  max-width: 350px;
  margin: auto;
`
const SearchBarWrapper = styled.div`
  max-width: 350px;
  border: 1px solid black;
`
