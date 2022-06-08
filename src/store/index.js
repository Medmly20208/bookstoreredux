import { configureStore, createSlice } from "@reduxjs/toolkit";
import cartreducer from "./Cartslice";
import showCart from "./Uislice";

const store = configureStore({
  reducer: { cartreducer, showCart },
});

export default store;
