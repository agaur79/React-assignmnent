import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AddProduct } from "./features/product/AddProduct";
import React from "react";
import { ProductList } from "./features/product/ProductList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/addProduct">
            <AddProduct />
          </Route>
          <Route path="/">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
