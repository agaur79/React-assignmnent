import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/users/productSlice";

export default configureStore({
  reducer: {
    product: productReducer,
  },
});
