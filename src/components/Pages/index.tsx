import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import ProductList from "./ProductList/";
import Cart from "./Cart";
import Checkout from "./Checkout";
import ProductSinglePage from "./ProductSinglePage/index";
import ThankYou from "./ThankYou/";
import Payment from "./Payment/";
import { IPagesProps } from "./Pages.interface";


const Pages: React.FC<IPagesProps> = () => (
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
