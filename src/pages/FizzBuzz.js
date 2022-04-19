import { useState } from "react";

export default function FizzBuzz() {
  const [count, setCount] = useState(0);
  const [fizzbuzz, setFizzBuzz] = useState("");

  const handleCrementor = (amt) => {
    const newCount = count + amt;
    setCount(newCount);

    if (newCount % 15 === 0) {
      setFizzBuzz("FizzBuzz");
    } else if (newCount % 3 === 0) {
      setFizzBuzz("Fizz");
    } else if (newCount % 5 === 0) {
      setFizzBuzz("Buzz");
    } else {
      setFizzBuzz("Not Fizz or Buzz");
    }
    return newCount;
  };

  return (
    <div className="fizz-buzz-container">
      <div className="fizz-buzz-header">
        <h1>Welcome to FizzBuzz</h1>
      </div>
      <div className="count-wrapper">
        {!count ? "Press Add To Begin" : count}
      </div>
      <div className="fizz-buzz-content-wrapper">{fizzbuzz}</div>
      <div className="buttons-wrapper">
        <button onClick={() => handleCrementor(1)}>Add</button>
        <button
          disabled={count <= 0 ? true : false}
          onClick={() => handleCrementor(-1)}
        >
          Sub
        </button>
      </div>
    </div>
  );
}
