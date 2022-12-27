import { FC, useState } from "react";
import Die from "./Die";
import "./Game.scss";

interface GameDie {
  id: number;
  value: number;
  isSelected: boolean;
}

const Game: FC = () => {
  const rollDie = (): number => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const randomDice = (): GameDie[] =>
    Array.apply(null, Array(10)).map((_, i) => ({
      id: i,
      value: rollDie(),
      isSelected: false,
    }));

  const [dice, setDice] = useState(randomDice());

  const toggleDice = (dieId: number) => {
    setDice(prevDice =>
      prevDice.map(prevDie =>
        prevDie.id === dieId
          ? { ...prevDie, isSelected: !prevDie.isSelected }
          : prevDie
      )
    );
  };

  const reRollDice = () => {
    setDice(prevDice =>
      prevDice.map(prevDie =>
        prevDie.isSelected ? prevDie : { ...prevDie, value: rollDie() }
      )
    );
  };

  const isGameOver = (): boolean => {
    return (
      dice.filter(die => die.isSelected && die.value === dice[0].value)
        .length == dice.length
    );
  };

  const resetDice = () => {
    setDice(randomDice());
  };

  return (
    <div className="game">
      <div className="dice">
        {dice.map(die => (
          <Die
            key={die.id}
            value={die.value}
            isSelected={die.isSelected}
            toggleSelect={() => toggleDice(die.id)}
          ></Die>
        ))}
      </div>
      {isGameOver() ? (
        <button className="roll-btn" onClick={resetDice}>
          Reset Game
        </button>
      ) : (
        <button className="roll-btn" onClick={reRollDice}>
          Roll
        </button>
      )}
    </div>
  );
};

export default Game;
