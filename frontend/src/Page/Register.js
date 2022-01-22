import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
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
import axios from "axios";
import { useLocation } from "wouter";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "wouter";

export default function Register() {
  document.title = 'BearTodos - Register'
  const [location, setLocation] = useLocation();
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading , setLoading]  = useState(false)
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setCredentials((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
    
      const re = await axios.post("/user", credentials);
      if (re.data.created) {
        setLocation("/login");
      }
      setError(re.data.message);
      if(re.data.message){
        setLoading(false)
      }
    } catch (error) {
      setError(error.message)
      
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl
                    id="firstName"
                    outlineColor={"gray.400"}
                    isRequired
                  >
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      focusBorderColor={"green.400"}
                      name="firstName"
                      value={credentials.firstName}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      focusBorderColor={"green.400"}
                      name="lastName"
                      value={credentials.lastName}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" outlineColor={"gray.400"} isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  focusBorderColor={"green.400"}
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    focusBorderColor={"green.400"}
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  size="lg"
                  bg={"green.400"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                  isLoading={loading}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Button
                  as={Link}
                  fontSize={"md"}
                  fontWeight={400}
                  variant={"link"}
                  to="/login"
                >
                  Already a member? Login now
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
}
