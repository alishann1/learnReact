import "./App.css";
import Header from "./components/Header.jsx";
import lambo from "./components/lambo.jpg";
import Buttons from "./components/Buttons.jsx";
import lambo2 from "./components/lambo2.jpg";
import Cards from "./components/cards.jsx";

function App() {
  return (
    <>
      <div className="pageOne">
        <Header />
        <img src={lambo} alt="lambo" className="backgroundImage" />
        <div className="textOnTop">
          <h1>
            Find Your Dream <br /> Car Today
          </h1>
          <Buttons />
        </div>
      </div>

      <div className="pageTwo">
        <img src={lambo2} alt="lambo2" className="backgroundTwo" />
        <Cards />
      </div>
    </>
  );
}

export default App;
