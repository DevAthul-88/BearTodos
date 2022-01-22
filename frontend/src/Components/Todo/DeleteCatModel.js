import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useDisclosure,
  Box,
  ModalFooter,
  Modal,
  ModalBody,
  Button,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  CloseButton,
  Stack
} from "@chakra-ui/react";
import {useLocation} from 'wouter'
function Modals({ isOpen, isClose, id }) {
    const [location, setLocation] = useLocation()
  const [error, setError] = useState(null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("todo_user"))
  );
    async function deleteTodo(ids) {
       try {
           console.log(user);
            const  res = await axios.post(`/todo/delete_cat/${id}` , {userId:user.id})
             if(res.data.status){
                 setLocation('/category')
             }
            if(res.data.message){
                setError(res.data.message)
            }
       } catch (error) {
           console.log(error.message);
       }
    }


  const { onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();
 

  return (
    <>
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

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={isClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure you want to delete this</ModalHeader>
          <ModalCloseButton />
          

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => isClose(false)}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={() => deleteTodo(id)}>Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modals;
