import React, { useState } from "react";
import * as timeAgo from "timeago.js";
import axios from "axios";
import {
  Box,
  Tag,
  IconButton,
  Flex,
  ButtonGroup,
  Tooltip,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  CloseButton,
  Stack,
  Heading,
} from "@chakra-ui/react";
import Model from "../../Components/Todo/CatModel";
import { FaPen, FaCheck, FaTrash, FaStar , FaArrowAltCircleDown } from "react-icons/fa";
import { Link as wLink, useRoute, useLocation } from "wouter";

function Card({ todo, _id }) {
  const [match, params] = useRoute("/category/:id");
  const [location, setLocation] = useLocation();
  

  function check(val) {
    if (val === "extreme") {
      return "red";
    } else if (val === "high") {
      return "pink";
    } else if (val === "medium") {
      return "yellow";
    } else {
      return "green";
    }
  }

  async function completeTodo(id, ids) {
    let res = await axios.post("/todo/completeCatTodo", {
      _id: id,
      id: params.id,
    });
    if (res.data.status) {
      window.location.reload();
    }
    if (res.data.error) {
      setError(res.data.error);
    }
  }
  const [error, setError] = useState(null);
  const [mode, showModel] = useState(false);
  const [id, setId] = useState("");

  function setDelete(id) {
    showModel(true);
    setId(id);
  }

  return (
    <div>
      <br />


        <Heading marginBottom={"5"}>All todos</Heading>

        
  

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

      {todo.map((e, index) => {
        return (
          <Box
            key={index}
            padding="5"
            maxW="full"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Flex justifyContent={"space-between"}>
              <Box
                mt="1"
                fontWeight="semibold"
                as="h2"
                fontSize={"xl"}
                lineHeight="tight"
                textDecoration={e.isCompleted ? "line-through" : "none"}
                isTruncated
              >
                {e.title}
              </Box>

              <Box>
                <ButtonGroup>
                  {e.isCompleted ? null : (
                    <ButtonGroup>
                      <Tooltip label="Edit Todo" shouldWrapChildren>
                        <IconButton
                          as={wLink}
                          href={`/edit_todo_category/${e._id}`}
                          aria-label="edit"
                          icon={<FaPen />}
                          background={"yellow.500"}
                          color="yellow.100"
                          _hover={{ background: "yellow.400" }}
                        />
                      </Tooltip>

                      <Tooltip label="Complete Todo" shouldWrapChildren>
                        <IconButton
                          onClick={() => completeTodo(e._id, _id)}
                          aria-label="finish"
                          icon={<FaCheck />}
                          background={"green.500"}
                          color="green.100"
                          _hover={{ background: "green.400" }}
                        />
                      </Tooltip>
                    </ButtonGroup>
                  )}

                  <Tooltip label="Delete Todo" shouldWrapChildren>
                    <IconButton
                      aria-label="edit"
                      icon={<FaTrash />}
                      background={"red.500"}
                      color="red.100"
                      _hover={{ background: "red.400" }}
                      onClick={() => setDelete(e._id)}
                    />
                  </Tooltip>
                </ButtonGroup>
              </Box>
            </Flex>

            <Tooltip
              label={`${e.priority} Priority`}
              textTransform={"capitalize"}
            >
              <Tag
                colorScheme={check(e.priority)}
                marginTop={"2"}
                textTransform={"capitalize"}
              >
                {e.priority}
              </Tag>
            </Tooltip>

            <Tooltip label={`Created ${timeAgo.format(e.createdAt)}`}>
              <Tag marginTop={"2"} marginLeft={"2"}>
                {timeAgo.format(e.createdAt)}
              </Tag>
            </Tooltip>

            {e.isCompleted ? (
              <Tooltip label="Completed" textTransform={"capitalize"}>
                <Tag
                  colorScheme={"green"}
                  marginTop={"2"}
                  marginLeft={"2"}
                  textTransform={"capitalize"}
                >
                  Completed
                </Tag>
              </Tooltip>
            ) : null}

            

            {e.description ? (
              <Accordion marginTop={"5"} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Description
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{e.description}</AccordionPanel>
                </AccordionItem>
              </Accordion>
            ) : null}
          </Box>
        );
      })}

      <Model id={id} _id={_id} isOpen={mode} isClose={showModel} />
    </div>
  );
}

export default Card;
