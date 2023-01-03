import { ChangeEvent, FC, useEffect, useState } from "react";

const GAME_TIME = 10;

const App: FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [text, setText] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    setTimeRemaining(GAME_TIME);
    setText("");

    const timerInterval = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => {
        if (prevTimeRemaining <= 1) {
          clearInterval(timerInterval);
        }
        return prevTimeRemaining - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (timeRemaining == 0 && text.length > 0) {
      setGameOver(true);
    } else {
      setGameOver(false);
    }
  }, [timeRemaining]);

  const updateText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <main>
      <h1>How fast do you type</h1>
      <textarea
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
      {gameOver && <p>Word count: {text.split(" ").length}</p>}
    </main>
  );
};

export default App;
