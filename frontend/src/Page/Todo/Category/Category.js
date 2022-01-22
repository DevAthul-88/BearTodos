import React,{useEffect , useState} from 'react'
import {
    Button,
    Flex,
    Heading,
    Box,
    Spinner,
    ButtonGroup,
    Select,
  } from "@chakra-ui/react";
  import Axios from "axios";
  import { Link as WLnk } from "wouter";

function Category() {
  document.title = 'BearTodos - Category'
    const [drop , setDrop] = useState('all')
    const [cat, setCat] = useState([]);
    const [catLoading, setCatLoading] = useState(true);

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("todo_user"));
    
        Axios.post("/todo/getCat", { id: user.id }).then((e) => {
          setCat(e.data.cat);
          setCatLoading(false);
        });
      }, [drop]);

    return (
        <div>
            <Flex justifyContent={"space-between"}>
              <Heading>
                  Category's
              </Heading>

            <Button colorScheme={"blue"} as={WLnk} href={"/create_category"}>
              Create category
            </Button>

            
            </Flex>


            <Flex marginTop={"10"}>
        {cat.length < 1 ? <Heading size={"lg"}>No Category Found</Heading> : (
          <div>
            {catLoading ? (
              <Spinner />
            ) : (
              <Flex flexWrap={'wrap'}>
                {cat.map((e, index) => {
                  return (
                    <div key={index}>
                      <Box
                        
                        
                        marginLeft={"3"}
                        bg={`${e.color}.300`}
                        padding={6}
                        className={'cat_box'}
                      >
                        <Flex >
                          <i className={e.icon}></i>

                          <Heading
                            fontSize="md"
                            marginLeft={"3"}
                            as={WLnk}
                            href={`/category/${e._id}`}
                          >
                            {e.title}
                          </Heading>
                        </Flex>
                      </Box>
                    </div>
                  );
                })}
              </Flex>
            )}
          </div>
        )}
      </Flex>

        </div>
    )
}

export default Category
