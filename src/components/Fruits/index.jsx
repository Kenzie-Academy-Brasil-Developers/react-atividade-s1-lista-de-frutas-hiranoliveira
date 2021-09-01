import { useState } from "react";
import "./style.css";
const Fruits = () => {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);
  const nomesFrutas = fruits.map((item, index) => {
    return <li key={index}>{item.name}</li>;
  });
  const filterRedFruits = fruits.filter((item) => {
    return item.color === "red";
  });
  const totalPrice = fruits.reduce((acc, currentValue) => {
    return currentValue.price + acc;
  }, 0);

  console.log({ totalPrice });
  return (
    <>
      <p> {totalPrice}</p>
      <ul>{nomesFrutas}</ul>
      <button className="button" onClick={() => setFruits(filterRedFruits)}>
        RED FRUITS ONLY
      </button>
    </>
  );
};
export default Fruits;
