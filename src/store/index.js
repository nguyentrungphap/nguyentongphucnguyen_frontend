import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./modules/carts/cart-slice";

export const store = configureStore({ reducer: { cart: cartSlice } });
