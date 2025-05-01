import Corolla from "./Corolla.jpg";
function Cards() {
  return (
    <div className="cardContainer">
      <div className="card">
        <img src={Corolla} alt="Car 1" />
        <h3>$200,000</h3>
        <button className="buyNow">Buy Now</button>
      </div>

      <div className="card">
        <img src={Corolla} alt="Car 2" />
        <h3>$250,000</h3>
        <button className="buyNow">Buy Now</button>
      </div>

      <div className="card">
        <img src={Corolla} alt="Car 3" />
        <h3>$300,000</h3>
        <button className="buyNow">Buy Now</button>
      </div>
    </div>
  );
}

export default Cards;
