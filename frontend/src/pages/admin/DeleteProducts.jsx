import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import axios from "axios"
import ProductItems from "./ProductItems"

function DeleteProducts() {
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  const handleDelete = (id) => {
    axios
      .delete(`https://vast-erin-badger-wear.cyclic.app/products/delete/${id}`)
      .then((res) => {
        setCount(count + 1)
      })
      .catch((err) => {
        console.log(err.msg)
      })
  }

  useEffect(() => {
    axios
      .get("https://vast-erin-badger-wear.cyclic.app/products")
      .then((res) => {
        setData(res.data)
      })
  }, [count])

  return (
    <Box
      color={"Black"}
      minH={"100vh"}
      mt={{ base: "60px", md: "0px" }}
      padding={"20px"}
      bg={"white"}
    >
      <Box>
        <SimpleGrid gap={5}>
          <Box
            display={{ base: "none", md: "flex" }}
            justifyContent={"space-between"}
            alignItems={"center"}
            textAlign={"left"}
            boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 2px, rgba(0, 0, 0, 0.3) 0px 3px 2px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
            padding={"10px"}
            mt={"20px"}
          >
            <Box
              width={{ base: "10%", md: "15%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>ID</Text>
            </Box>
            <Box
              width={{ base: "5%", md: "13%", lg: "10%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>IMAGE</Text>
            </Box>
            <Box
              width={{ base: "10%", md: "27%", lg: "25%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>SALE PRICE</Text>
            </Box>
            <Box
              width={{ base: "5%", md: "7%", lg: "8%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>DISCOUNT PRICE</Text>
            </Box>
            <Box
              width={{ base: "5%", md: "7%", lg: "8%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>COLOR</Text>
            </Box>

            <Box
              w={{ base: "5%", md: "13%", lg: "10%" }}
              fontSize={{ base: "12px", md: "12px", lg: "md" }}
            >
              <Text>STATUS</Text>
            </Box>
          </Box>
          <Box>
            {data.map((el) => (
              <ProductItems key={el._id} handleDelete={handleDelete} {...el} />
            ))}
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default DeleteProducts
