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
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFalureAction,
  loginRequestAction,
  loginSuccsesAction,
} from "../../redux/authReducer/action";
// import { store } from "../../redux/store";
import SimpleSidebar from "../../pages/accountPage/Account";
// import AccountPage from "../../pages/accountPage/Account";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const navigate = useNavigate();
  let dispatch = useDispatch();

  const handleLogin = () => {
    let userData = {
      email,
      password,
    };
    dispatch(loginRequestAction());
    axios
      .post("https://reqres.in/api/login", userData)
      .then((res) => {
        console.log(res.data.token);

        dispatch(loginSuccsesAction(res.data.token));
        console.log(dispatch(loginSuccsesAction(res.data.token)));
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFalureAction());
      });

      navigate("/")
  };


  // useEffect(() => {
  //   if (isAuth) {
  //     navigate("/simpleside");
  //   }
  // }, [isAuth]);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}>
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                onClick={handleLogin}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}>
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {/* {isAuth&&<SimpleSidebar/>} */}
    </Flex>
  );
}
