import React, { useState } from "react";
import { useLocation } from "wouter";
import Axios from "axios";
import { color, Select } from "@chakra-ui/react";
import {
  Input,
  Button,
  Heading,
  Stack,
  Alert,
  AlertDescription,
  CloseButton,
  AlertIcon,
  AlertTitle,
  useToast
} from "@chakra-ui/react";

function Create_cat() {
  document.title = 'BearTodos - Create Category'
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useLocation();
  const [error, setError] = useState(null);
  const [toaster , showToast] = useState(false)
  const toast = useToast()
  const [cat, setCat] = useState({
    title: "",
    color: "",
    icon: "",
  });

  function onChange(event) {
    const { name, value } = event.target;

    setCat((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  async function Submit(e) {
    e.preventDefault();
    setLoading(true);

    try {

      let user = JSON.parse(localStorage.getItem("todo_user"))

      const obj = {
        id:user.id,
        title:cat.title,
        color:cat.color,
        icon:cat.icon,
      }

        const res = await Axios.post('/todo/cat', obj)
        await showToast(true)
         setLocation('/category')

    } catch (error) {
        setError(error.message)
    }
  }

  return (
    <form onSubmit={Submit}>
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

      <Heading marginBottom={"5"}>Create a new category</Heading>
       <Heading marginBottom={"5"} fontSize="sm">
       Why category's? You can easily manage your todo list by separating them in different category
       </Heading>


      <Input
        placeholder="Title"
        name="title"
        focusBorderColor={"green.400"}
        value={cat.title}
        onChange={onChange}
        required
      />

      <Select
        placeholder="Select color"
        name="color"
        marginTop={"5"}
        focusBorderColor={"green.400"}
        onChange={onChange}
        required
      >
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="black">Black</option>
        <option value="pink">Pink</option>
        <option value="orange">Orange</option>
        <option value="blue">Blue</option>
      </Select>

      <Select
        placeholder="Select Icon"
        name="icon"
        marginTop={"5"}
        focusBorderColor={"green.400"}
        onChange={onChange}
        required
      >
        <option value="fas fa-briefcase">Briefcase</option>
        <option value="fas fa-exclamation-triangle">
          Exclamation Triangle
        </option>
        <option value="fas fa-child">Child</option>
        <option value="fas fa-school">School</option>
        <option value="fas fa-money-bill-alt">Money</option>
        <option value="fas fa-shopping-cart">Cart</option>
        <option value="fas fa-book">Book</option>
      </Select>

      <Button
        type="submit"
        colorScheme="green"
        marginTop={"5"}
        isLoading={loading}
      >
        Submit
      </Button>

      {
        toaster ? (
          toast({
            title: 'Category created.',
            description: "i've created category for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        ) : null
      }

    </form>
  );
}

export default Create_cat;
