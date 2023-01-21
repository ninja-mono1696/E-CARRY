import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SearchCard from "./SeacrhCard"
function SearchBarInput({ queryHandler, suggestions }) {
  const [input, setInput] = useState("")
  const [status, setStatus] = useState(false)
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  useEffect(() => {
    queryHandler(input)
  }, [input, queryHandler])
  return (
    <Wrapper>
      <SearchBarWrapper>
        <Input value={input} onChange={handleInputChange} />
      </SearchBarWrapper>
      <New>
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
      </New>
    </Wrapper>
  )
}

export default SearchBarInput

const New = styled.div`
  border: 1px solid black;
  max-height: 500px;
  overflow: auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
`

const Input = styled.input`
  flex: 1;
  font-size: 20px;
  border: none;
  outline: none;
  width: 1150px;
`
const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
`
const SearchBarWrapper = styled.div`
  max-width: 1200px;
`
