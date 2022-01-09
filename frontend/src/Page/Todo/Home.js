import React, { createContext, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import { Container } from "@chakra-ui/react";
import { Route } from "wouter";
import Explore from "../Todo/Explore";
import Todos from "../Todo/Todos";
import History from "../Todo/History";
import Favorites from "../Todo/Favourites";
import Settings from "../Todo/Settings";
import Create_todo from '../Todo/Create_todo'

function Home() {
  return (
    <div>
      <Navbar />

      <Container maxW="container.md" width="100%">
        <Route path="/" component={Explore} />
        <Route path="/todos" component={Todos} />
        <Route path="/history" component={History} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/settings" component={Settings} />
        <Route path="/create_todo" component={Create_todo} />
      </Container>
    </div>
  );
}

export default Home;
