import { ChangeEvent, FC, useEffect, useState, useRef } from "react";

const GAME_TIME = 10;

const App: FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [text, setText] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
    if (timeRemaining === GAME_TIME) {
      setGameOver(false);
      textareaRef.current?.focus();
    }
    if (timeRemaining === 0 && text.length > 0) {
      setGameOver(true);
    }
  }, [timeRemaining]);

  const updateText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const countWords = (words: string): number =>
    words.split(" ").filter(word => word.length > 0).length;

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
