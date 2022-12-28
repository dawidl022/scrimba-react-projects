import { FC } from "react";

interface StartProps {
  startGame: () => void;
}

const Start: FC<StartProps> = ({ startGame }) => {
  return (
    <header>
      <h1>Quizzical</h1>
      <p>A simple trivia game</p>
      <button onClick={startGame}>Start game</button>
    </header>
  );
};

export default Start;
