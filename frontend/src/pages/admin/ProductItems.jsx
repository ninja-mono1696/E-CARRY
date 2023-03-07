import { Box, Button, Image, Text } from "@chakra-ui/react"

import React from "react"
const ProductItems = ({
  _id,
  name,
  salePrice,
  discountPrice,
  image,
  color,
  handleDelete,
}) => {
  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.4) 0px 1px 2px, rgba(0, 0, 0, 0.3) 0px 2px 2px -1px, rgba(0, 0, 0, 0.2) 0px -1px 0px inset"
      cursor={"pointer"}
    >
      <Box
        display={{ base: "none", md: "flex" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        textAlign={"left"}
        padding={"10px"}
      >
        <Box
          width={{ base: "10%", md: "15%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
        >
          <Text>{_id}</Text>
        </Box>
        <Box width={{ base: "5%", md: "13%", lg: "10%" }}>
          <Image width={"80%"} src={image} alt={name}></Image>
        </Box>
        <Box
          width={{ base: "10%", md: "27%", lg: "25%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
        >
          <Text>{salePrice}</Text>
        </Box>
        <Box
          width={{ base: "5%", md: "10%", lg: "8%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
        >
          <Text>₹ {discountPrice}</Text>
        </Box>
        <Box
          width={{ base: "5%", md: "10%", lg: "8%" }}
          fontSize={{ base: "12px", md: "12px", lg: "md" }}
        >
          <Text>{color}</Text>
        </Box>

        <Box w={{ base: "5%", md: "15%", lg: "10%" }}>
          <Button
            bg={"blue.400"}
            color="white"
            onClick={() => {
              handleDelete(_id)
            }}
            size={{ base: "sm", md: "sm", lg: "md" }}
          >
            Delete
          </Button>
        </Box>
      </Box>

      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent={"space-between"}
        p={"10px"}
      >
        <Box width={{ base: "50%", sm: "40%" }}>
          <Box
            h="25px"
            width={"58px"}
            mb={"10px"}
            color="black"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          ></Box>
          <Image
            width={{ base: "60%", sm: "40%" }}
            src={image}
            alt={name}
          ></Image>
          <Text fontWeight={"bold"} fontSize={"lg"} mt={"20px"}>
            ₹ {discountPrice}
          </Text>
        </Box>

        <Box
          w={{ base: "50%", sm: "60%" }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
        >
          <Box>
            <Text as="b" fontSize={{ base: "13px", sm: "14px" }}>
              {salePrice}
            </Text>

            <Text mt={"10px"} fontSize={{ base: "12px", sm: "13px" }}>
              ID- {_id}
            </Text>
          </Box>

          <Button
            mt={"10px"}
            bg={"blue.400"}
            color="white"
            onClick={() => {
              handleDelete(_id)
            }}
            size={"sm"}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductItems
