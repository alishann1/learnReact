import "./App.css";
import "./index.css";
import Buttons from "./components/buttons/Button.jsx";
import { useState } from "react";


function App() {
  let [count, setCount] = useState(0);
  let [disable, setDisable] = useState(false);
  let [disableDec, setDisableDec] = useState(false);

  const increment = () => {
    setCount(count + 1);
    if (count >= 19) {
      setDisable(true);
    }
  };

  const decrement = () => {
    setCount(count - 1);
    if (count <= -1) {
      setDisableDec(true);
    }
  };

  return (
    <>

      <div className="flex flex-col justify-center gap-4 mt-4 min-h-screen items-center">
      <h1 className="text-6xl">{count}</h1>
        <Buttons
          btnText="Increment"
          onHandleClick={increment}
          disabled={disable}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded shadow disabled:bg-gray-300 disabled:cursor-not-allowed transition"
        />
        <Buttons
          btnText="Decrement"
          onHandleClick={decrement}
          disabled={disableDec}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded shadow disabled:bg-gray-300 disabled:cursor-not-allowed transition"
        />
      </div>
    </>
  );
}

export default App;
