import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Profile />
    </>
  );
}

export default App;
