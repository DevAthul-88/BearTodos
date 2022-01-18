import React, { useEffect, useState } from "react";
import axios from "axios";
import * as timeAgo from 'timeago.js'
import { Heading, Spinner, Flex, Tag, Button } from "@chakra-ui/react";
import {Link as WLink} from 'wouter'
import TodoCard from '../Todo_card'
import Card from "../../../Components/Todo/Card";

function Cat({ id }) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/todo/get_cat/${id}`)
      .then((res) => {
        setData(res.data.cat);
        setLoading(false);
      })
      .catch((error) => {
        setData(error);
      });
  }, []);
 
  return (
    <div>
      {loading ? (
        <Flex justifyContent="center">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <div>
         
         <Flex justifyContent="space-between" marginBottom={'5'}>
         <Heading colorScheme={data.color}>
            {data.title}
            {`(${data.todoArr.length})`}
            <i className={data.icon}></i>
          </Heading>

        
         <Tag colorScheme={'green'} size={'lg'}>
                {timeAgo.format(data.createdAt)}
          </Tag>

          <Button colorScheme={"green"} as={WLink} href={`/create_todo_category/${id}`}>
              Create a new todo
          </Button>
              

         </Flex>
              {
                data.todoArr.length > 0 ? <Card todo={data.todoArr} /> : <Heading>
                  No todos found
                </Heading>
              }
        </div>
      )}
    </div>
  );
}

export default Cat;
