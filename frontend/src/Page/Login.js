import React, { useState, useEffect } from "react";
import axios from "axios";

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
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";
import { Link } from "wouter";

export default function Login({ isAuth, setUserLocal }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;

    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const data = {
        email:user.email,
        password:user.password
      }


      const res = await axios.post("/user/login", data);

     if(res.data.status !== false) {
  
      localStorage.setItem("todo_token", res.data.token);
      localStorage.setItem("todo_user", JSON.stringify(res.data.user));
      setUserLocal(res.data.user);
      isAuth(res.data.status);
      window.location.href = '/'
     }

      setError(res.data.message);
    } catch (error) {
      setError(error.message);
    }
    
  }

  return (
    <div>
      {error && (
        <Stack>
          <Alert status="error">
            <AlertIcon />
            <AlertTitle mr={2}>Alert</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
            <CloseButton
              position="absolute"
              right="8px"
              top="8px"
              onClick={() => setError(null)}
            />
          </Alert>
        </Stack>
      )}

      <Flex
        minH={"auto"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          </Stack>

          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    focusBorderColor={"green.400"}
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    focusBorderColor={"green.400"}
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                  />
                </FormControl>

                <Stack spacing={10}>
                  <Button
                    type="submit"
                    bg={"green.400"}
                    color={"white"}
                    _hover={{
                      bg: "green.600",
                    }}
                  >
                    Sign in
                  </Button>
                </Stack>

                <Stack pt={6}>
                  <Button
                    as={Link}
                    fontSize={"md"}
                    fontWeight={400}
                    variant={"link"}
                    to="/register"
                  >
                    Don't have an account? Create one now!
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}
