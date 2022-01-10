import React from "react";
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
  AccordionPanel
} from "@chakra-ui/react";
import { FaPen, FaCheck, FaTrash } from "react-icons/fa";

function Todo_card() {
  return (
    <div>
      <br />
      <Box
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
            Eat dinner
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

        <Tag colorScheme={"red"} marginTop={"2"}>
          Medium
        </Tag>

        <Tag marginTop={"2"} marginLeft={"2"}>
          5 years ago
        </Tag>

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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      
    </AccordionPanel>
  </AccordionItem>
 
  </Accordion>
      </Box>
    </div>
  );
}

export default Todo_card;
