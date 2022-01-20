// @ts-nocheck
import React, { createContext, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import { Container, Center, VStack } from "@chakra-ui/react";
import { Route, Switch } from "wouter";
import Explore from "../Todo/Explore";
import Todos from "../Todo/Todos";
import Category from "../Todo/Category/Category";
import Profile from "./Profile";
import Create_todo from "../Todo/Create_todo";
import Create_cat from "./Category/Create_cat";
import Edit_todo from "../Todo/edit_todo";
import Cat from "../Todo/Category/Cat";
import Cat_from from "../Todo/Category/cat_todo_form";
import Cat_todo_edit from "../Todo/Category/Cat_todo_edit";
import NotFound from "../NotFound";

function Home() {
  return (
    <div>
      <Navbar />

      <Container
        maxW="container.lg"
        marginLeft={{ base: "0", md: "72", lg: "72" }}
      >
        <Switch>
          <Route path="/" component={Explore} />
          <Route path="/todos" component={Todos} />
          <Route path="/category" component={Category} />
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/create_todo" component={Create_todo} />
          <Route path="/create_category" component={Create_cat} />

          <Route path="/edit/:id">
            {(params) => <Edit_todo id={params.id} />}
          </Route>

          <Route path="/category/:id">
            {(params) => <Cat id={params.id} />}
          </Route>
          <Route path="/create_todo_category/:id">
            {(params) => <Cat_from id={params.id} />}
          </Route>
          <Route path="/edit_todo_category/:id">
            {(params) => <Cat_todo_edit id={params.id} />}
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default Home;
