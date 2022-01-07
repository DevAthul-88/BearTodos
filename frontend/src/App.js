import { useEffect, useState } from "react";
import Provider from "./Provider/Token";
import Home from "./Page/Home";
import TodoHome from "./Page/Todo/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from './Components/Footer'

function App() {
  const [auth, setAuth] = useState(false);

 useEffect(() => {
   Provider()
 },[])

  return (
    <ChakraProvider>
      <div className="App">{auth ? <TodoHome /> : <Home />}</div>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
