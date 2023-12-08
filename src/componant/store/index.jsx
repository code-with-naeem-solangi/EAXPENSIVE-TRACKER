import { configureStore } from "@reduxjs/toolkit";
import laibrayslice from "./laibrayslice.jsx";

const Store = configureStore({
  reducer: laibrayslice,
});
export default Store;
