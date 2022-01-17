import React, { useEffect, useState } from "react";
import axios from "axios";
import * as timeAgo from 'timeago.js'
import { Heading, Spinner, Flex, Tag, Button } from "@chakra-ui/react";
import {Link as WLink} from 'wouter'

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
  console.log(data);
  return (
    <div>
      {loading ? (
        <Flex justifyContent="center">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <div>
         
         <Flex justifyContent="space-between">
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

        </div>
      )}
    </div>
  );
}

export default Cat;
