import React, { useEffect, useState } from "react";
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

  
} from "@chakra-ui/react";


function Settings() {

  const [local , setLocal] = useState({})
  const [enable , setEnable] = useState(true)
 
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("todo_user"))
    setLocal(user)
  },[])


  return (
    <div>
      <Heading>Settings</Heading>

      <Tabs isFitted variant="enclosed" marginTop={"7"}>
        <TabList mb="1em">
          <Tab>Profile Settings</Tab>
          <Tab>Other Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>

          <Input placeholder='Basic usage' value={local.firstName} />
          <Input placeholder='Basic usage'  marginTop='2' value={local.lastName}/>
          <Input placeholder='Basic usage' marginTop='2' value={local.email} />
           
           <Button colorScheme={'green'} marginTop='2' disabled={enable}>
             Save
           </Button>

          </TabPanel>

          <TabPanel>
          <Checkbox colorScheme={'red'}>
            Move deleted todos to trash
          </Checkbox>

          </TabPanel>

        </TabPanels>
      </Tabs>
    </div>
  );
}

export default Settings;
