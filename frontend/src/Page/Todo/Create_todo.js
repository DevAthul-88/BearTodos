import React, { useState } from "react";
import { useLocation } from "wouter";
import {
  Input,
  Container,
  Button,
  Textarea,
  Heading,
  Stack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

function Create_todo() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useLocation();

  function Submit() {
    setLoading(true);
    setLocation('/')
  }

  return (
    <form>
      <Heading marginBottom={"10"}>Create a new task</Heading>

      <Input
        placeholder="Todo Title"
        name="title"
        focusBorderColor={"green.400"}
      />
      <Textarea
        placeholder="Todo Description"
        marginTop={"5"}
        focusBorderColor={"green.400"}
      />
      <Heading marginTop={"5"} fontSize={"medium"} color={"gray"}>
        Priority
      </Heading>

      <RadioGroup value="1" marginTop={"5"}>
        <Stack direction="row">
          <Radio value="1" colorScheme={"green"}>
            No Time to do
          </Radio>
          <Radio value="2" colorScheme={"green"}>
            High
          </Radio>
          <Radio value="3" colorScheme={"green"}>
            Medium
          </Radio>
          <Radio value="4" colorScheme={"green"}>
            Low
          </Radio>
        </Stack>
      </RadioGroup>

      <Button colorScheme="green" marginTop={"5"} onClick={Submit} isLoading={loading}>
        Submit
      </Button>
    </form>
  );
}

export default Create_todo;
