import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counterslice/CounterSlice";
import ProductSlice from "./productSlice/ProductSlice";

const Store = configureStore({
  reducer: {
    Counter: CounterSlice,
    products: ProductSlice,
  },
});

export default Store;
