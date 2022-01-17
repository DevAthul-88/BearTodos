import React, { useEffect, useState } from "react";
import * as timeAgo from 'timeago.js'
import axios from "axios";
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  Button,
  TabPanel,
  Heading,
  Box,
  Image,
  Flex,
  Checkbox,
  Input,
  Stack,
  Avatar,
  List,
  ListItem,
  ListIcon,
  Text,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

function Profile() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("todo_user"));
    setUser(user);
  }, []);

  return (
    <div>
      <Heading>Profile</Heading>

      <Tabs isFitted variant="enclosed" marginTop={"7"}>
       
        <TabPanels>
          <TabPanel>
            <Avatar size="2xl" name={`${user.firstName} ${user.lastName}`} />

            <List spacing={3} marginTop="5">
              <ListItem>
                <Text as="h2" fontSize={"large"}>
                  Full Name: {`${user.firstName} ${user.lastName}`}
                </Text>
                <Text as="h2" fontSize={"large"} marginTop={"2"}>
                  Email: {`${user.email} `}
                </Text>
                <Text fontSize={"large"} marginTop={"2"}>
                  Joined: {timeAgo.format(user.created)}
                </Text>

              </ListItem>
            </List>
          </TabPanel>

        
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Profile;
