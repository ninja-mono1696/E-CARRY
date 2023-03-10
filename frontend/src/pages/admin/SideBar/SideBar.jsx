import React, { useState } from "react"
import { Flex, Text, IconButton, Divider, Heading } from "@chakra-ui/react"
import { FiMenu, FiHome, FiUser, FiShoppingCart } from "react-icons/fi"
import NavItem from "./NavItem"
export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large")
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large")
            else changeNavSize("small")
          }}
        />
        <NavItem
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          goTo="/admin"
          description="This is the description for the dashboard."
        />
        <NavItem
          goTo="/admin/product"
          navSize={navSize}
          ion={FiShoppingCart}
          title="Add Products"
        />
        <NavItem
          navSize={navSize}
          goTo="/admin/deleteproducts"
          icon={FiUser}
          title="Delete Products"
        />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Mohtashim Mir
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
