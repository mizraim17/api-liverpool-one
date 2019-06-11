import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./Component/Home";
import AddProducts from "./Component/AddProducts";
import Hola from "./Component/Hola";

const Router = () => {
  return(
    <Switch>
      <Route exact path = '/' component={Home}  />
      <Route exact path = '/addProduct' component={AddProducts}  />
      <Route exact path = '/h' component={Hola}  />
    </Switch>
  )
}

export default Router