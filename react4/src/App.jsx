import { useState } from "react";
import "./App.css";
import DataFetch from "./DataFetch";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {toggle ? <DataFetch /> : null}
      <button onClick={() => setToggle(!toggle)}>toggle</button>
    </>
  );
}

export default App;
