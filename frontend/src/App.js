import {useState} from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import Provider from './Provider/Token'
import Home from './Page/Home'
import TodoHome from './Page/Todo/Home'

function App() {


  const [auth , setAuth] = useState(false)

  if(Provider === null){
    setAuth(false)
  }
  else{
    setAuth(true)
  }

  return (
    <ChakraProvider>

      <div className="App">
     
     </div>
     
     </ChakraProvider>
   );
    
}

export default App;
