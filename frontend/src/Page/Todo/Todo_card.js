import React from "react";
import * as timeAgo from 'timeago.js'
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
  Heading
} from "@chakra-ui/react";
import { FaPen, FaCheck, FaTrash } from "react-icons/fa";

function Todo_card({todo}) {



  function check(val){
    if(val === 'extreme'){
      return 'red'
    }
    else if(val === 'high'){
      return 'pink'
    }
    else if(val === 'medium'){
      return 'yellow'
    }
    else{
      return 'green'
    }
  }

  return (
    <div>
      <br />

      <Heading marginBottom={"5"}>
            All todos
      </Heading>
      
      {
        todo.map((e , index) => {
            
          return(
            
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
              isTruncated
            >
              {e.title}
            </Box>
  
            <Box>
              <ButtonGroup>
                <Tooltip label="Edit Todo">
                  <IconButton
                    aria-label="edit"
                    icon={<FaPen />}
                    background={"yellow.500"}
                    color="yellow.100"
                    _hover={{ background: "yellow.400" }}
                  />
                </Tooltip>
  
                <Tooltip label="Complete Todo">
                  <IconButton
                    aria-label="edit"
                    icon={<FaCheck />}
                    background={"green.500"}
                    color="green.100"
                    _hover={{ background: "green.400" }}
                  />
                </Tooltip>
  
                <Tooltip label="Delete Todo">
                  <IconButton
                    aria-label="edit"
                    icon={<FaTrash />}
                    background={"red.500"}
                    color="red.100"
                    _hover={{ background: "red.400" }}
                  />
                </Tooltip>
              </ButtonGroup>
            </Box>
          </Flex>
  
          <Tooltip label={`${e.priority} Priority`} textTransform={'capitalize'}>
          <Tag colorScheme={check(e.priority)} marginTop={"2"} textTransform={'capitalize'}>
            {e.priority}
          </Tag>
          </Tooltip>
  
         <Tooltip label={`Created ${timeAgo.format(e.createdAt)}`}>
         <Tag marginTop={"2"} marginLeft={"2"}>
            {timeAgo.format(e.createdAt)}
          </Tag>
         </Tooltip>
  
          {
            e.description ? (
              <Accordion marginTop={"5"}  allowMultiple>
  
          <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
          Description
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
       {e.description}
        
      </AccordionPanel>
    </AccordionItem>
   
    </Accordion>
            ) : null
          }
        </Box>
          )

        })
      }

    </div>
  );
}

export default Todo_card;
