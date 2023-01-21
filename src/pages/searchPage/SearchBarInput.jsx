import React, { useEffect, useState } from "react"
import styled from "styled-components"
import SearchCard from "./SearchCard"
function SearchBarInput({ queryHandler, suggestions }) {
  const [input, setInput] = useState("")
  const [status, setStatus] = useState(false)
  const [activeOption, setActiveOption] = useState(0)
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
      <New active={activeOption}>
        {suggestions.map((el, i) => {
          return (
            <SearchCard
              index={i}
              id={el.id}
              image={el.image}
              title={el.title}
              salePrice={el.salePrice}
              discountPrice={el.discountPrice}
              activeOption={activeOption}
              setActiveOption={setActiveOption}
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

  & :nth-child(${({ active }) => active}) {
    background: #aecabe;
    cursor: pointer;
  }
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
