import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { fetchProduct } from "./features/users/productSlice";
import store from "./store";

store.dispatch(fetchProduct());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
