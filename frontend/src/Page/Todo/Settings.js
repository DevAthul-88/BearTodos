import React, { useEffect, useState } from "react";
import axios from 'axios'
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


  const [local , setLocal] = useState({firstName:"", lastName:"", email:""})
  const [enable , setEnable] = useState(true)
  const [load, setLoading] = useState(false)
 
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("todo_user"))
    setLocal(user)
  },[])

  function onChange(event) {
    const {name , value} = event.target
     setLocal((prev) => {
       return{
         ...prev,
         [name]:value
       }
     })
  }

 async function onSubmit(e){
    e.preventDefault()

    let user = JSON.parse(localStorage.getItem("todo_user"))

    const userObj = {
      id: user.id,
      firstName: local.firstName,
      lastName: local.lastName,
      email: local.email
    }
    setLoading(true)
    const res = await axios.patch('/user/' , userObj)
     
    if(res.data.message) {
      localStorage.setItem('todo_user', res.data.user)
    }
  }


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

         <form onSubmit={onSubmit}>
         <Input placeholder='Basic usage' value={local.firstName} name='firstName' onChange={onChange} onKeyUp={() => setEnable(false)}/>
          <Input placeholder='Basic usage' value={local.lastName} name='lastName'  marginTop='2' onChange={onChange} value={local.lastName}/>
          <Input placeholder='Basic usage' marginTop='2' name='email' value={local.email} onChange={onChange} value={local.email} />
           
           <Button type="submit" colorScheme={'green'} marginTop='2' disabled={enable} isLoading={load}>
             Save
           </Button>
         </form>

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
