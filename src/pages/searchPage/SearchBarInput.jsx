import React, { useEffect, useState } from "react"
import styled from "styled-components"
function SearchBarInput({ queryHandler }) {
  const [input, setInput] = useState("")

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
