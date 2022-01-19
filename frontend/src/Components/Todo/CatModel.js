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
  Stack,
} from "@chakra-ui/react";
import {useLocation} from 'wouter'
function Modals({ isOpen, isClose, id ,_id }) {
  const [error, setError] = useState(null);
  const [location , setLocation] = useLocation()
  async function deleteTodo(ids , id) {
    let res = await axios.post(`/todo/deleteTodo/${id}`, { id: ids , _id:id });
    if (res.data.status) {
      setLocation('/category')
    }
    if (res.data.error) {
      setError(res.data.error);
    }
  }

  const { onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();
  const [user, setUser] = useState(
    JSON.stringify(localStorage.getItem("todo_user"))
  );

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
          <ModalBody>
            {user.isEnabled
              ? "This will be moved to trash"
              : "Note after deleting you wont able retrieve this"}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => isClose(false)}>
              Cancel
            </Button>
            <Button colorScheme="red" onClick={() => deleteTodo(id , _id)}>
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modals;
