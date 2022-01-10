import React, { useEffect, useState } from "react";
import { Button, Flex, Heading, Box, Spinner } from "@chakra-ui/react";
import { Link as WLnk } from "wouter";
import Axios from "axios";
import axios from "axios";

function Todos() {
  const [todo, setTodo] = useState([]);
  const [cat, setCat] = useState([]);
  const [catLoading, setCatLoading] = useState(true);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("todo_user"));

    Axios.post("/todo/getCat", { id: user.id }).then((e) => {
      setCat(e.data.cat);
      console.log(e.data.cat);
      setCatLoading(false)
    });
  }, []);

  return (
    <div>
      <Flex justifyContent={"space-between"}>
        <div>
          <Heading>Todos and category's</Heading>
        </div>

        <div>
          <Button colorScheme={"green"} as={WLnk} href={"/create_category"}>
            Create category's
          </Button>
        </div>
      </Flex>

     

      <Flex  marginTop={"10"}>
        {cat.length < 1 ? null : <div>{catLoading ? <Spinner /> : 
         
         <Flex>
           {
             cat.map((e , index) => {
               return(
                 <div>
                  

                   <Box boxShadow={'lg'} borderRadius={'md'} marginLeft={'3'} background={`${e.color}.400`} padding={4}>
                    
                    <Flex>

                    <i className={e.icon}></i>

                    <Heading fontSize='md' marginLeft={'3'}>
                   {e.title}
                   </Heading>


                    </Flex>

                 </Box>

                 </div>
               )
             })
           }
         </Flex>
        }</div>}
      </Flex>
      

      {todo.length < 1 ? (
        <Heading marginTop={"5"} textAlign={"center"}>
          No Todos Found
        </Heading>
      ) : (
        ""
      )}

    </div>
  );
}

export default Todos;
