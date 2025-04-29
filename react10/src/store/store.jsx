import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./counterSlice/CounterSlice.jsx";

const store = configureStore({
  reducer: {
    Counter: CounterReducer, //{value:0}
  },
});

export default store;
