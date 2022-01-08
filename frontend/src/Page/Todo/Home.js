import React, { createContext } from "react";
import Navbar from "../../Components/Navbar";
import User from "../../Provider/user";
import { Container } from '@chakra-ui/react'
import userProvider from "../../Provider/user";
import {Route} from 'wouter'
import Explore from '../Todo/Explore'
import Todos from "../Todo/Todos"
import History from "../Todo/History"
import Favorites from '../Todo/Favourites'
import Settings from '../Todo/Settings'



let user = userProvider();
export const Users = createContext(user);

function Home() {
    

  return (

    <Users.Provider value={user}>
        <Navbar />

        
      
     <Container maxW='container.md'>
     <Route path="/" component={Explore} />
     <Route path="/todos" component={Todos} />
     <Route path="/history" component={History} />
     <Route path="/favorites" component={Favorites} />
     <Route path="/settings" component={Settings} />
     </Container>


    </Users.Provider>

  );
}




export default Home;
