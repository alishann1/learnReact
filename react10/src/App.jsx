import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/counterSlice/CounterSlice";
import { decrement } from "./store/counterSlice/CounterSlice";
import SideBar from "./SideBar";

const App = () => {
  // get
  // useSelector

  const { value } = useSelector((state) => {
    return state.Counter;
  });
  const dispatch = useDispatch();

  return (
    <div>
      App counter value is {value}
      <br />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <SideBar />
    </div>
  );
};

export default App;
