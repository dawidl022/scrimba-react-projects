import { ChangeEvent, FC, useEffect, useState, useRef } from "react";
import useGame, { GAME_TIME } from "./useGame";

const App: FC = () => {
  const { startGame, setText, countWords, gameOver, text, timeRemaining } =
    useGame();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (timeRemaining === GAME_TIME) {
      textareaRef.current?.focus();
    }
  }, [timeRemaining]);

  const updateText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <main>
      <h1>How fast do you type</h1>
      <textarea
        ref={textareaRef}
        disabled={timeRemaining <= 0}
        cols={30}
        rows={10}
        onChange={updateText}
        value={text}
      />
      <p>Time remaining: {timeRemaining}</p>
      <button disabled={timeRemaining > 0} onClick={startGame}>
        {gameOver ? "Play again" : "Start"}
      </button>
      {gameOver && <p>Word count: {countWords(text)}</p>}
    </main>
  );
};

export default App;
