import React, { createContext } from "react";
import Navbar from "../../Components/Navbar";
import User from "../../Provider/user";
import userProvider from "../../Provider/user";



let user = userProvider();
export const Users = createContext(user);

function Home() {
    

  return (

    <Users.Provider value={user}>
        <Navbar />
    </Users.Provider>

  );
}




export default Home;
