import { useEffect, useState } from "react";
import Home from "./Page/Home";
import axios from "axios";
import TodoHome from "./Page/Todo/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./Components/Footer";

function App() {
  const [auth, setAuth] = useState(false);
  const [user , setUser] = useState(null);

  useEffect(() => {
    async function checkAuth() {
      const token = localStorage.getItem("todo_token");

      if (token) {
        let res = await axios.get("/user/verify", {
          headers: { Authorization: token },
        });

        console.log(res.data.valid);
        setAuth(res.data.valid);
        if (res.data.valid === false) return localStorage.clear()

        localStorage.setItem('todo_user' ,JSON.stringify( res.data.user))
        setUser(JSON.parse(localStorage.getItem('todo_user')))

      } else {
        setAuth(false);
      }
    }
    checkAuth();
  }, []);

  return (
    <ChakraProvider>
      <div className="App">
        {auth ? <TodoHome /> : <Home isAuth={setAuth} user={user} />}
      </div>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
