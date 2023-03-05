import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let navigate = useNavigate()
  const toast = useToast()

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    }
      // fetch(`${BackendURL}/admin/login`, {
      //   method: "POST",
      //   body: JSON.stringify(payload),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          // res.msg === "login successfull"
          toast({
            title: "Logged in Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          })
          navigate(`/admin`)
        } else if (!res.token) {
          toast({
            title: "Wrong Credentials",
            status: "error",
            duration: 3000,
            isClosable: true,
          })
        }
      })
      .catch((err) => {
        console.log(err.msg)
        toast({
          title: "Invalid Request",
          status: "error",
          duration: 3000,
          isClosable: true,
        })
      })
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
          <Heading fontSize={"4xl"}>Sign in to Admin Account!</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            To access Admin page 👨‍💻
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
                bg={"red.400"}
                color={"white"}
                _hover={{
                  bg: "red.500",
                }}
                onClick={handleSubmit}
              >
                Proceed
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
