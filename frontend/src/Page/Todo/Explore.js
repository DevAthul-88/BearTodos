import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Flex,
  Spacer,
  Center,
  Text,
  Square,
  Box,
  Icon,
} from "@chakra-ui/react";
import { FaCheck, FaExclamationTriangle, FaTrash } from "react-icons/fa";
import { Link as wLink} from 'wouter'

function Explore() {
  return (
    <div>
      <Flex>
        <Box>
          <Text fontSize="3xl"  fontWeight={"bold"}>
            Overview
          </Text>
        </Box>

        <Spacer />

        <Box>
          <Button colorScheme="green" as={wLink} to='/create_todo'>Create New</Button>
        </Box>
      </Flex>

      <Flex
        marginTop={"10"}
        justifyContent={"space-evenly"}
        className="flex-explore"
      >
        <Box
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
            1 Done
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
            1 Pending
          </Text>
        </Box>

        <Box
          marginLeft="1.5"
          width="100%"
          background={"red.100"}
          shadow={"md"}
          marginTop={"1.5"}
          padding={"10"}
          textAlign={"center"}
        >
          <Icon as={FaTrash} w={6} h={6} color={"red.500"} />
          <Text
            fontWeight={"bold"}
            fontSize={{ base: "24px", md: "40px", lg: "3xl" }}
            marginTop={"1.5"}
            color="red.500"
          >
            1 Deleted
          </Text>
        </Box>
      </Flex>
    </div>
  );
}

export default Explore;
