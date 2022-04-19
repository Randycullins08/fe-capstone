import { useState } from "react";

export default function Magic8Ball() {
  const [isActive, setIsActive] = useState(false);

  const answers = [
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "As i see it, yes",
    "Most likely",
    "Outlook good",
    "Signs point to yes",
    "Yes",
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes-definitely",
    "You may rely on it",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Can't predict now",
    "Concentrate and ask again",
  ];

  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <div className="magic-container">
      <div className="magic-header">
        <h1>Welcome to Magic 8 Ball</h1>
      </div>

      <div className="magic-content-wrapper">
        <div className={`answer-wrapper ${isActive ? "active" : "hidden"}`}>
          {randomAnswer}
        </div>

        <button onClick={handleClick}>Click For Prediction</button>
      </div>
    </div>
  );
}
