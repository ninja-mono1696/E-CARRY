import React, { useState } from "react"
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Container,
  Button,
  Text,
  IconButton,
  Flex,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react"
import Sidebar from "./SideBar/SideBar"
import { Example } from "./useRadio"
import axios from "axios"
const init = {
  title: "",
  image: "",
  salePrice: "",
  discountPrice: "",
  category: "",
  color: "",
}
const Admin = () => {
  const [data, setData] = useState(init)
  const handleChange = (e) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }
  const handleColorChange = (value) => {
    setData({ ...data, color: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8080/products", data)
    setData(init)
    alert("Product Added Successfully")
  }
  let { title, image, salePrice, discountPrice, category } = data

  return (
    <Box height={730} display="flex" backgroundColor="#F9F9F9">
      <Box>
        <Sidebar />
      </Box>
      <Box marginLeft={31} marginTop={28} width={"70%"}>
        <Container backgroundColor="white">
          <form onSubmit={handleSubmit}>
            <FormControl onSubmit={handleSubmit}>
              <FormLabel>Product Name</FormLabel>
              <Input
                value={title}
                name="title"
                onChange={handleChange}
                type="text"
              />
              <FormLabel>Product Image Url</FormLabel>
              <Input value={image} name="image" onChange={handleChange} />

              <FormLabel>Product Sale Price</FormLabel>
              <Input
                value={salePrice}
                name="salePrice"
                onChange={handleChange}
              />
              <FormLabel>Product Discount Price</FormLabel>
              <Input
                value={discountPrice}
                name="discountPrice"
                onChange={handleChange}
              />
              <FormLabel>Product Category</FormLabel>
              <Input value={category} name="category" onChange={handleChange} />
              <Box mt={5}>
                <Text fontSize="1xl" mt={-4} p={1} fontWeight="semibold">
                  Select Color
                </Text>
                <Example onChange={handleColorChange} />
              </Box>
              <Box ml={200} mt={5}>
                <Button type="submit" color="black" bg="#20A87E">
                  Submit
                </Button>
              </Box>
            </FormControl>
          </form>
        </Container>
      </Box>
    </Box>
  )
}

export default Admin
