import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Heading,
  Box,
  Spinner,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link as WLnk } from "wouter";
import Axios from "axios";

function Todos() {
  const [todo, setTodo] = useState([]);
  const [cat, setCat] = useState([]);
  const [catLoading, setCatLoading] = useState(true);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("todo_user"));

    Axios.post("/todo/getCat", { id: user.id }).then((e) => {
      setCat(e.data.cat);
      console.log(e.data.cat);
      setCatLoading(false);
    });
  }, []);

  return (
    <div>
      <Flex justifyContent={"space-between"}>
        <div>
          <Heading>Todos and category's</Heading>
        </div>

        <div>
          <ButtonGroup isAttached>
            <Button colorScheme="green" as={WLnk} to="/create_todo">
              Create todo
            </Button>

            <Button colorScheme={"blue"} as={WLnk} href={"/create_category"}>
              Create category
            </Button>
          </ButtonGroup>
        </div>
      </Flex>

      <Flex marginTop={"10"}>
        {cat.length < 1 ? null : (
          <div>
            {catLoading ? (
              <Spinner />
            ) : (
              <Flex>
                {cat.map((e, index) => {
                  return (
                    <div>
                      <Box
                        boxShadow={"lg"}
                        borderRadius={"md"}
                        marginLeft={"3"}
                        background={`${e.color}.400`}
                        padding={4}
                      >
                        <Flex flexWrap={'wrap'}>
                          <i className={e.icon}></i>

                          <Heading fontSize="md" marginLeft={"3"} as={WLnk} href={`/category/${e._id}`}>
                            {e.title}
                          </Heading>
                        </Flex>
                      </Box>
                    </div>
                  );
                })}
              </Flex>
            )}
          </div>
        )}
      </Flex>

      <Flex justifyContent="space-between" marginTop={"5"}>
        <div>
          {todo.length < 1 ? (
            <Heading marginTop={"5"}>No Todos Found</Heading>
          ) : (
            ""
          )}
        </div>
      </Flex>
    </div>
  );
}

export default Todos;
