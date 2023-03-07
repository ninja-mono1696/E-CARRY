import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const toast = useToast()
  const handleSubmit = () => {
    const payload = {
      email,
      password,
    }
    fetch(`https://vast-erin-badger-wear.cyclic.app/user/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          toast({
            title: "Logged in Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          })
          navigate(`/products`)
        } else if (!res.token) {
          toast({
            title: "Wrong Credentials",
            status: "error",
            duration: 3000,
            isClosable: true,
          })
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"red.400"}>Services</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"red.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "black",
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
              <Link to="/signup">Create new account </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
