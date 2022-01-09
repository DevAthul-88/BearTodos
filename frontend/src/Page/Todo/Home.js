import React, { createContext, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import { Container } from "@chakra-ui/react";
import { Route } from "wouter";
import Explore from "../Todo/Explore";
import Todos from "../Todo/Todos";
import History from "../Todo/History";
import Favorites from "../Todo/Favourites";
import Settings from "../Todo/Settings";

function Home() {
  return (
    <div>
      <Navbar />

      <Container maxW="max-content" centerContent>
        <Route path="/" component={Explore} />
        <Route path="/todos" component={Todos} />
        <Route path="/history" component={History} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/settings" component={Settings} />
      </Container>
    </div>
  );
}

export default Home;
