import { useState } from "react";
import "./App.css";

import dice1 from "./assets/images/dice1.png";
import dice2 from "./assets/images/dice2.png";
import dice3 from "./assets/images/dice3.png";
import dice4 from "./assets/images/dice4.png";
import dice5 from "./assets/images/dice5.png";
import dice6 from "./assets/images/dice6.png";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function App() {
  const [playerName, setPlayerName] = useState("Player 1");
  const [playerDice, setPlayerDice] = useState(0);
  const [pcDice, setPcDice] = useState(0);
  const [result, setResult] = useState("");
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setResult("");

    const rollInterval = setInterval(() => {
      setPlayerDice(Math.floor(Math.random() * 6));
      setPcDice(Math.floor(Math.random() * 6));
    }, 150);

    setTimeout(() => {
      clearInterval(rollInterval);

      const finalPlayer = Math.floor(Math.random() * 6);
      const finalPc = Math.floor(Math.random() * 6);

      setPlayerDice(finalPlayer);
      setPcDice(finalPc);

      if (finalPlayer > finalPc) {
        setResult(`${playerName} Wins! 🎉`);
      } else if (finalPlayer < finalPc) {
        setResult("PC Wins 🤖");
      } else {
        setResult("Draw! 🤝");
      }

      setIsRolling(false);
    }, 3000);
  };

  return (
    <div className="app">
      <h1 className="title">World Series of Dice</h1>

      <input
        className="name-input"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Enter your name"
      />

      <h2 className="result">{result}</h2>

      <div className="dice-container">
        <div className="player">
          <p>{playerName}</p>
          <img src={diceImages[playerDice]} alt="player dice" />
        </div>

        <div className="player">
          <p>PC</p>
          <img src={diceImages[pcDice]} alt="pc dice" />
        </div>
      </div>

      <button onClick={rollDice} disabled={isRolling}>
        {isRolling ? "Rolling..." : "Roll Dice"}
      </button>

      <footer>🎲 Dice Game</footer>
    </div>
  );
}

export default App;
