// import "./App.css";
// import React, { useState, useRef } from "react";
// import { useEffect } from "react";

// function App() {
//   let [time, setTime] = useState(0);
//   let intervalRef = useRef(null);

//   function handleStart() {
//     if (intervalRef.current !== null) return;
//     intervalRef.current = setInterval(() => {
//       setTime((prev) => prev + 1);
//     }, 1000);
//   }

//   function handlePause() {
//     clearInterval(intervalRef.current);
//     intervalRef.current = null;
//   }

//   function handleReset() {
//     handlePause();
//     setTime(0);
//   }

//   useEffect(() => {
//     return () => {
//       clearInterval(intervalRef.current);
//     };
//   }, []);
//   return (
//     <>
//       {" "}
//       <div className="container">
//         <h1>{time}</h1>
//         <div className="button-group">
//           <button onClick={handleStart}>Start</button>
//           <button onClick={handlePause}>Pause</button>
//           <button onClick={handleReset}>Reset</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
