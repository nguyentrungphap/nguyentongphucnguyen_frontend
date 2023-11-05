import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./cart-slice";
export default configureStore({
  reducer: {
    cart: createReducer,
  },
});
