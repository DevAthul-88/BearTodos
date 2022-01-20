import { useEffect, useState } from "react";
import Home from "./Page/Home";
import axios from "axios";
import TodoHome from "./Page/Todo/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "./Components/Footer";

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    async function checkAuth() {
      const token = localStorage.getItem("todo_token");

      if (token) {
        let res = await axios.get("/user/verify", {
          headers: { Authorization: token },
        });

        setAuth(res.data.valid);
        if (res.data.valid === false) return localStorage.clear();

        let user = JSON.parse(localStorage.getItem("todo_user"));
        if (user === undefined) return localStorage.clear();

        if (user !== null && user !== undefined) {
          setUser(user);
        }
      } else {
        setAuth(false);
      }
    }
    checkAuth();
  }, []);

  return (
    <ChakraProvider>
      <div className="App">
        {auth ? <TodoHome /> : <Home isAuth={setAuth} setUser={setUser} />}

        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
