import React, { useEffect, useState } from "react";
import axios from "axios";
import * as timeAgo from "timeago.js";
import { Heading, Spinner, Flex, Tag, Button, Select } from "@chakra-ui/react";
import { Link as WLink } from "wouter";
import TodoCard from "../Todo_card";
import Card from "../../../Components/Todo/Card";
import { FaArrowAltCircleDown } from "react-icons/fa";
function Cat({ id }) {
 
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState({});
  const [ids, setId] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [drop, setDrop] = useState("all");

 

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("todo_user"));
    axios
      .post(`/todo/get_cat/${id}`, { filterData: drop, userId: user.id })
      .then((res) => {
        if(res.data){
        setData(res.data.cat);
        setTodo(res.data.todo);
        setId(res.data.id);
        setLoading(false)
        }
      })
      .catch((error) => {
        setData(error);
      });
  }, [drop]);

  function onChange(event) {
    setDrop(event.target.value);
  }

  return (
    <div>
      {loading ? (
        <Flex justifyContent="center">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <div>
          <Flex justifyContent="space-between" marginBottom={"5"}>
            <Heading>
              {data.title}
              {`(${data.todoArr.length})`}
              <i className={data.icon}></i>
            </Heading>

            <Tag colorScheme={"green"} size={"lg"}>
              {timeAgo.format(data.createdAt)}
            </Tag>

            <Button
              colorScheme={"green"}
              as={WLink}
              href={`/create_todo_category/${id}`}
            >
              Create a new todo
            </Button>
          </Flex>

          <Flex justifyContent={"right"}>
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
          </Flex>

          {todo.length > 0 ? (
            <Card todo={todo} _id={ids} drop={drop}/>
          ) : (
            <Heading>No todos found</Heading>
          )}
        </div>
      )}
    </div>
  );
}

export default Cat;
