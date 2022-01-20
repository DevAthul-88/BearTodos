import React, { useEffect,  useState } from "react";
import axios from 'axios'
import Chart from '../../Components/Todo/Chart'
import { Button, ButtonGroup, Spacer } from "@chakra-ui/react";
import {
  Flex,
  Center,
  Text,
  Square,
  Box,
  Icon,
  Spinner
} from "@chakra-ui/react";
import { FaCheck, FaExclamationTriangle, FaTrash , FaAngellist } from "react-icons/fa";
import { Link as wLink } from "wouter";

function Explore() {

 
  const [id , setId] = useState('')
  const [total , setTotal] = useState(0)
  const [loading , setLoading] = useState(true)

  useEffect( () => {
        const user = JSON.parse(localStorage.getItem("todo_user"));
        setId(user.id)

        async function getTodoCount(){
            if(id){
              let res = await axios.get(`/todo/totalCount/${id}`)
              setTotal(res.data)
              setLoading(false)
            }
        }

        getTodoCount()

  },[id])

document.title = 'BearTodos - Explore'
  return (
    <div>
      <Flex>
        <Box>
          <Text fontSize="3xl" fontWeight={"bold"}>
            Overview
          </Text>
        </Box>

        <Spacer />

        <Box>
          <Button colorScheme="green" as={wLink} to="/create_todo">
            Create New
          </Button>
        </Box>
      </Flex>

       {
               loading ? (<Flex justifyContent="center">
                 <Spinner size='xl'/>
               </Flex>) : (
               <div>
                  <Flex
                marginTop={"10"}
                justifyContent={"space-between"}
                className="flex-explore"
              >
                <Box
                 
                  width="100%"
                  background={"blue.100"}
                  shadow={"md"}
                  marginTop={"1.5"}
                  padding={"10"}
                  textAlign={"center"}
                >
                  <Icon as={FaAngellist} w={6} h={6} color={"blue.500"} />
                  <Text
                    fontWeight={"bold"}
                    fontSize={{ base: "24px", md: "40px", lg: "3xl" }}
                    marginTop={"1.5"}
                    color="blue.500"
                  >
                    {total.total} Total
                  </Text>
                </Box>
        
                <Box
                 marginLeft="1.5"
                  className="box"
                  width="100%"
                  background={"green.100"}
                  shadow={"md"}
                  marginTop={"1.5"}
                  padding={"10"}
                  textAlign={"center"}
                >
                  <Icon as={FaCheck} w={6} h={6} color={"green.500"} />
                  <Text
                    fontWeight={"bold"}
                    fontSize={{ base: "24px", md: "40px", lg: "3xl" }}
                    marginTop={"1.5"}
                    color="green.500"
                  >
                    {total.finished} Done
                  </Text>
                </Box>
        
                <Box
                  marginLeft="1.5"
                  width="100%"
                  background={"yellow.100"}
                  shadow={"md"}
                  marginTop={"1.5"}
                  padding={"10"}
                  textAlign={"center"}
                >
                  <Icon as={FaExclamationTriangle} w={6} h={6} color={"yellow.500"} />
                  <Text
                    fontWeight={"bold"}
                    fontSize={{ base: "24px", md: "40px", lg: "3xl" }}
                    marginTop={"1.5"}
                    color="yellow.500"
                  >
                    {total.unFinish} Pending
                  </Text>
                </Box>
        
              
              </Flex>
              <Chart data={total}/>
               </div>
               )
       }
    </div>
  );
}

export default Explore;
