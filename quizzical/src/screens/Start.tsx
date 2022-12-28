import { FC } from "react";
import "./Start.scss";

interface StartProps {
  startGame: () => void;
}

const Start: FC<StartProps> = ({ startGame }) => {
  return (
    <header className="start">
      <div>
        <h1 className="title">Quizzical</h1>
        <p className="description">A simple trivia game</p>
      </div>
      <button className="basic-btn" onClick={startGame}>
        Start quiz
      </button>
    </header>
  );
};

export default Start;
