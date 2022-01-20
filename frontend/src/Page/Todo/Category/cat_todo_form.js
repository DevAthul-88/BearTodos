import React, { useState } from "react";
import { useLocation } from "wouter";
import { v4 as uuidv4 } from 'uuid';
import Axios from "axios";
import {
  useToast,
  Input,
  Container,
  Button,
  Textarea,
  Heading,
  Stack,
  Radio,
  RadioGroup,
  Alert,
  AlertDescription,
  CloseButton,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";

function Create_cat_todo({id}) {
  const [loading, setLoading] = useState(false);
  const [values, setValue] = useState("high");
  const [error, setError] = useState(null);
  const [toaster, showToast] = useState(false);
  const [location, setLocation] = useLocation();
  const toast = useToast();
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  function onChange(event) {
    const { name, value } = event.target;
    setTodo((prev) => {
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
      let user = JSON.parse(localStorage.getItem("todo_user"));

      const todoObj = {
        title: todo.title,
        description: todo.description,
        priority: values,
        isCompleted: false,
        id: user.id,
        createdAt:new Date(Date.now()),
      };

      await Axios.post("/todo/create_cat", {data:todoObj , id:id});
      showToast(true);
      setLocation(`/category/${id}`);
    } catch (error) {
      setLoading(false);
      setError(error.message);
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

      <Heading marginBottom={"10"}>Create a new task</Heading>

      <Input
        placeholder="Todo Title"
        focusBorderColor={"green.400"}
        onChange={onChange}
        value={todo.title}
        name="title"
        required
      />
      <Textarea
        placeholder="Todo Description"
        marginTop={"5"}
        name="description"
        value={todo.description}
        onChange={onChange}
        focusBorderColor={"green.400"}
      />
      <Heading marginTop={"5"} fontSize={"medium"} color={"gray"}>
        Priority
      </Heading>

      <RadioGroup marginTop={"5"} value={values} onChange={setValue}>
        <Stack direction="row">
          <Radio value="extreme" colorScheme={"green"}>
            No Time to do
          </Radio>
          <Radio value="high" colorScheme={"green"}>
            High
          </Radio>
          <Radio value="medium" colorScheme={"green"}>
            Medium
          </Radio>
          <Radio value="low" colorScheme={"green"}>
            Low
          </Radio>
        </Stack>
      </RadioGroup>

      <Button
        type="submit"
        colorScheme="green"
        marginTop={"5"}
        isLoading={loading}
      >
        Submit
      </Button>
      {toaster
        ? toast({
            title: "Todo created.",
            description: "i've created todo for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        : null}
    </form>
  );
}

export default Create_cat_todo;
