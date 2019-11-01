import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ProductList from "./ProductList";
import Cart from "./Cart";
import Checkout from "./Checkout";
import ProductSinglePage from "./ProductSinglePage";
import ThankYou from "./ThankYou/index";
import Payment from "./Payment/index";
import { IPagesProps } from "./Pages.interface";

const Pages = (): IPagesProps => (
  <div className="container">
    <Switch>
      <Route path="/product/:id" component={ProductSinglePage}/>
      <Route path="/cart" component={Cart}/>
      <Route path="/checkout" component={Checkout}/>
      <Route path="/payment" component={Payment}/>
      <Route path="/thankyou" component={ThankYou}/>
      <Route exact path="/" component={ProductList}/>
      <Redirect to="/"/>
    </Switch>
  </div>
);


export default Pages;
