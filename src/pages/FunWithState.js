import React from "react";
import { useState } from "react";

export default function FunWithState() {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [font, setFont] = useState(20);
  const [justifyText, setJustifyText] = useState("center");

  function handleCrementer(amt) {
    const newCount = count + amt;
    if (newCount >= 0) {
      setCount(newCount);
    }
  }

  function changeGreeting() {
    if (greeting) {
      setGreeting(false);
    } else {
      setGreeting(true);
    }
  }

  function handleChange() {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }

  function fontSizer(amt) {
    const newFont = font + amt;

    if (newFont <= 5) {
      setDisabled(true);
    } else if (newFont <= 100) {
      setFont(newFont);
    } else if (newFont === 100) {
      setDisabled(true);
    }
  }

  function justifyContent(direction) {
    setJustifyText(direction);
  }

  return (
    <div className="fun-with-state-container">
      <div className="fun-with-state-header">
        <h1>Fun With State</h1>
      </div>

      <div className="counter-wrapper">
        <div className="counter-header">
          <h3>Counter</h3>
        </div>
        {count}
        <div className="counter-btns-wrapper">
          <button onClick={() => handleCrementer(1)}>Add</button>
          <button
            disabled={count <= 0 ? true : false}
            onClick={() => handleCrementer(-1)}
          >
            Sub
          </button>
        </div>
        <hr style={{ width: "30%" }} />
      </div>

      <div className="greeting-wrapper">
        <h2> {greeting ? "Good bye!" : "Hello!"}</h2>
        <button onClick={changeGreeting}>Toggle</button>
        <hr style={{ width: "30%" }} />
      </div>

      <div className="hide">
        {isHidden && <h2>Peek A BOO</h2>}
        <button onClick={handleChange}>{isHidden ? "Hide" : "Show"}</button>
        <hr style={{ width: "30%" }} />
      </div>

      <div className="font-sizer">
        <button onClick={() => fontSizer(5)}>Grow</button>
        <button onClick={() => fontSizer(-5)}>Shrink</button>
        <div className="font" style={{ fontSize: `${font}px` }}>
          {`${font}px`}
        </div>
        <hr style={{ width: "30%" }} />
      </div>

      <div className="text-align">
        <h2 style={{ textAlign: `${justifyText}` }}>Push me around</h2>
        <button onClick={() => justifyContent("left")}>Left</button>
        <button onClick={() => justifyContent("center")}>Center</button>
        <button onClick={() => justifyContent("right")}>Right</button>
      </div>
    </div>
  );
}
