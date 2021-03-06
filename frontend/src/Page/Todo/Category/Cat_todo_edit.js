import React, { useEffect, useState } from "react";
import axios from "axios";
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
  Flex,
  AlertTitle,
  Spinner,
} from "@chakra-ui/react";
import { useLocation } from "wouter";

function Edit_todo(params) {
  document.title = 'BearTodos - Edit Todo'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [spinners, setSpinner] = useState(true);
  const [toaster, showToast] = useState(false);
  const [location, setLocation] = useLocation();
  const toast = useToast();
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    priority: "",
  });
  const [values, setValue] = useState(`${todo.priority}`);

  useEffect(() => {
    if (params.id) {
      async function fetchTodo() {
        let todo = await axios.post(`/todo/edit_todo_category/${params.id}`);
        setTodo(todo.data.todo);
        setValue(todo.data.todo.priority);
        setSpinner(false);
  
      }

      fetchTodo();
    }
  }, []);

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
        _id: params.id,
        title: todo.title,
        description: todo.description,
        priority: values,
        id: user.id,
      };

      await axios.put(`/todo/edit_cat_todo/${params.id}`, {todo:todoObj});
      showToast(true);
      setLocation(`/category`)
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <div>
      {spinners ? (
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Spinner size="xl" />
        </Flex>
      ) : (
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

          <Heading marginBottom={"10"}>Edit - {`${todo.title}`}</Heading>

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
                title: "Todo Updated.",
                description: "i've updated todo for you.",
                status: "success",
                duration: 9000,
                isClosable: true,
              })
            : null}
        </form>
      )}
    </div>
  );
}

export default Edit_todo;
