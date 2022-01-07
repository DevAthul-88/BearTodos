import React from 'react'
import {Container 
,
Heading,
Button,
Text

} from '@chakra-ui/react'

import {Link} from 'wouter'

function Home() {
    return (
        <div>
            <Container maxW='container.xl' marginTop={'32'}>
           

           <Heading size='lg' fontSize='50px' color={'green.500'}>
            Welcome To   <Text
              as={'span'}
              position={'relative'}
              
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'green.100',
                zIndex: -1,
              }}>
              BearTodos,
            </Text>
           </Heading>

           <Heading size='md'width={'3xl'} fontSize='25px'marginTop={'2'} color={'gray.600'}>
            This is a simple todo app. created by <a href="" target="_blank" rel="noopener noreferrer">
                <u>Athul Vinod</u>
            </a>.
            
            If you have ideas to improve this application, Please let me know!
           </Heading>

           <Button size='lg' as={Link} to='/register' colorScheme='green' mt='24px'>
    Create a free account
  </Button>


            </Container>
        </div>
    )
}

export default Home
