import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Heading from "./components/Heading";
import Para from "./components/Para";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading />
      <Para/>
    </>
  );
}

export default App;
