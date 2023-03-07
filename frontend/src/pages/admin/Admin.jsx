import React, { useState } from "react"
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Container,
  Button,
} from "@chakra-ui/react"
import Sidebar from "./SideBar/SideBar"
import axios from "axios"
const init = {
  image: "",
  title: "",
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

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(
      "https://vast-erin-badger-wear.cyclic.app/products/addproduct",
      data
    )
    setData(init)
    alert("Product Added Successfully")
  }
  let { category, image, salePrice, discountPrice, color, title } = data

  return (
    <Box height={730} display="flex" backgroundColor="#F9F9F9">
      <Box>
        <Sidebar />
      </Box>
      <Box marginLeft={31} marginTop={28} width={"70%"}>
        <Container backgroundColor="white">
          <form onSubmit={handleSubmit}>
            <FormLabel>Title</FormLabel>
            <Input value={title} name="title" onChange={handleChange} />
            <FormControl onSubmit={handleSubmit}>
              <FormLabel>Product Image Url</FormLabel>
              <Input value={image} name="image" onChange={handleChange} />

              <FormLabel>Product Category</FormLabel>
              <Input value={category} name="category" onChange={handleChange} />

              <FormLabel>Product Sale Price</FormLabel>
              <Input
                value={salePrice}
                type="number"
                name="salePrice"
                onChange={handleChange}
              />
              <FormLabel>Product Discount Price</FormLabel>
              <Input
                type="number"
                value={discountPrice}
                name="discountPrice"
                onChange={handleChange}
              />
              <FormLabel>Color</FormLabel>
              <Input value={color} name="color" onChange={handleChange} />

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
