import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Box,
  Spinner,
  ButtonGroup,
  Select,
} from "@chakra-ui/react";
import { Link as WLnk } from "wouter";
import Axios from "axios";
import Todo_Card from "../Todo/Todo_card";
import { FaArrowAltCircleDown } from "react-icons/fa";

function Todos() {
  document.title = "BearTodos - Todos";
  const [todo, setTodo] = useState([]);
  const [drop, setDrop] = useState("all");
  const [cat, setCat] = useState([]);
  const [catLoading, setCatLoading] = useState(true);
  const [todoLoading, setTodoLoading] = useState(false);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("todo_user"));

    Axios.post("/todo/getCat", { id: user.id }).then((e) => {
      setCat(e.data.cat);
      setCatLoading(false);
    });

    Axios.post("/todo/get", { id: user.id, value: drop }).then((e) => {
      setTodo(e.data.todo);
    });
  }, [drop]);

  function onChange(event) {
    setDrop(event.target.value);
  }

  return (
    <div>
      <Flex justifyContent={"space-between"}>
        <div>
          <Select
            size={"lg"}
            colorScheme={"green"}
            icon={<FaArrowAltCircleDown />}
            onChange={onChange}
            defaultValue={"all"}
          >
            <option value="all">All</option>
            <option value="unCompleted">UnCompleted</option>
            <option value="completed">Completed</option>
          </Select>
        </div>

        <div>
          <ButtonGroup isAttached>
            <Button colorScheme="green" as={WLnk} to="/create_todo">
              Create todo
            </Button>
          </ButtonGroup>
        </div>
      </Flex>

      <div>
        {todo.length < 1 ? (
          <Heading marginTop={"5"} size={"lg"}>
            No Todos Found
          </Heading>
        ) : (
          <Todo_Card todo={todo} />
        )}
      </div>
    </div>
  );
}

export default Todos;
