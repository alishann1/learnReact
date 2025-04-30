import { useDispatch, useSelector } from "react-redux";
import { increment, IncrementByValue } from "./store/counterslice/CounterSlice";
import { decrement } from "./store/counterslice/CounterSlice";
import "./App.css";
import React from "react";
import { productThunk } from "./store/productSlice/ProductSlice";
import { useEffect, useRef } from "react";

function App() {
  const { value } = useSelector((state) => {
    return state.Counter;
  });
  const dispatch = useDispatch();
  const inputRef = useRef();
  function handleIncrementByValue() {
    dispatch(IncrementByValue(Number(inputRef.current.value)));
    inputRef.current.value = "";
  }

  useEffect(() => {
    dispatch(productThunk());
  }, [dispatch]);

  const { loading, error, products } = useSelector((state) => {
    return state.products;
  });
  console.log(products);

  return (
    <>
      <h1>{value}</h1>
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
      <hr />
      <input ref={inputRef} type="number" placeholder="Enter Value" />
      <button onClick={handleIncrementByValue}>Increment By Value</button>

      <hr />

      <h1>Products</h1>
      <div>
        {loading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}

        {products.map((product) => {
          return <p key={product.id}>{product.title}</p>;
        })}
      </div>
    </>
  );
}

export default App;
