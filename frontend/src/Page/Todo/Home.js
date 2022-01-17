// @ts-nocheck
import React, { createContext, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import { Container , Center, VStack} from "@chakra-ui/react";
import { Route } from "wouter";
import Explore from "../Todo/Explore";
import Todos from "../Todo/Todos";
import History from "../Todo/History";
import Favorites from "../Todo/Favourites";
import Settings from "../Todo/Settings";
import Create_todo from '../Todo/Create_todo'
import Create_cat from './Create_cat'
import Edit_todo from '../Todo/edit_todo'
import Cat from '../Todo/Cat'

function Home() {

  return (
    <div  >
      <Navbar />



        <Container maxW='container.lg' marginLeft={{ base: "0", md: "72", lg: "72" }}>
        <Route path="/" component={Explore} />
        <Route path="/todos" component={Todos} />
        <Route path="/history" component={History} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/settings" >
          <Settings/>
        </Route>
        <Route path="/create_todo" component={Create_todo} />
        <Route path="/create_category" component={Create_cat} />

        <Route path='/edit/:id'>
          {params => <Edit_todo id={params.id}/> }
        </Route>

        <Route path='/category/:id'>
           {params => <Cat id={params.id}/>}
        </Route>

        </Container>


    </div>
  );
}

export default Home;
