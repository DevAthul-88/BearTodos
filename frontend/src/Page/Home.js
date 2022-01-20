import React from "react";
import Navbar from "../Components/Navbar[noAuth]";
import Login from "../Page/Login";
import Register from "../Page/Register";
import DefaultHome from "../Page/Home[default]";
import NotFound from "./NotFound";
import { Route, Switch } from "wouter";

function Home({ isAuth, setUser }) {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route path="/" component={DefaultHome} />
        <Route path="/login">
          <Login isAuth={isAuth} setUserLocal={setUser} />
        </Route>
        <Route path="/register" component={Register} />
        <Route  component={NotFound} />
      </Switch>
    </div>
  );
}

export default Home;
