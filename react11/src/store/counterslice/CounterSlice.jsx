import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.value++;
    },

    decrement(state) {
      state.value--;
    },

    IncrementByValue(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, IncrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
