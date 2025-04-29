import React from "react";
import { increment } from "./store/counterSlice/CounterSlice";
import { useDispatch } from "react-redux";

function SideBar() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        IncSideBar
      </button>
    </div>
  );
}

export default SideBar;
