import React from 'react';
import {Flex} from '@chakra-ui/react'
import illustration from '../Image/404.png'

function NotFound() {
  return <div>
     <Flex justifyContent='center'>
     <img src={illustration} alt="" />
     </Flex>
  </div>;
}

export default NotFound;
