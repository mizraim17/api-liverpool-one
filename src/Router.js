import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from "./Component/Home";

import AddProducts from "./Component/AddProducts";
import ListProducts from "./Component/ListProducts";

const Router = () => {
  return(
    <Switch>
      <Route exact path = '/' component={Home}  />
      <Route exact path = '/addProduct' component={AddProducts}  />
      <Route exact path = '/listProduct' component={ListProducts}  />
    </Switch>
  )
}

export default Router