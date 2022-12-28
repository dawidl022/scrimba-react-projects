import { FC, useEffect, useState } from "react";
import Confetti from "react-confetti";
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
  const [rollCount, setRollCount] = useState(1);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerInterval, setTimerInterval] = useState(0);

  const newTimerInterval = (): number => {
    return setInterval(
      () => setTimeElapsed(prevTimeElapsed => prevTimeElapsed + 1),
      1000
    );
  };

  useEffect(() => {
    const interval = newTimerInterval();
    setTimerInterval(interval);

    return () => {
      clearInterval(interval);
      clearInterval(timerInterval);
    };
  }, []);

  useEffect(() => {
    if (isGameOver()) {
      clearInterval(timerInterval);
    }
  }, [dice]);

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
    setRollCount(prevRollCount => prevRollCount + 1);
  };

  const isGameOver = (): boolean => {
    return dice.every(die => die.isSelected && die.value === dice[0].value);
  };

  const resetDice = () => {
    setDice(randomDice());
    setRollCount(1);
    setTimeElapsed(0);
    setTimerInterval(newTimerInterval());
  };

  const formatSeconds = (totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = (totalSeconds % 60 < 10 ? "0" : "") + (totalSeconds % 60);
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="game">
      <div className="stats">
        <div className="time-elapsed">
          Time elapsed: {formatSeconds(timeElapsed)}
        </div>
        <div className="roll-count">Roll count: {rollCount}</div>
      </div>
      <div className="dice">
        {dice.map(die => (
          <Die
            key={die.id}
            value={die.value}
            isSelected={die.isSelected}
            toggleSelect={() => toggleDice(die.id)}
          />
        ))}
      </div>
      {isGameOver() ? (
        <>
          <Confetti />
          <button className="roll-btn" onClick={resetDice}>
            Reset Game
          </button>
        </>
      ) : (
        <button className="roll-btn" onClick={reRollDice}>
          Roll
        </button>
      )}
    </div>
  );
};

export default Game;
