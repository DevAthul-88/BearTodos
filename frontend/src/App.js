import { useState } from "react";
import Provider from "./Provider/Token";
import Home from "./Page/Home";
import TodoHome from "./Page/Todo/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <ChakraProvider>
      <div className="App">{auth ? <TodoHome /> : <Home />}</div>
    </ChakraProvider>
  );
}

export default App;
