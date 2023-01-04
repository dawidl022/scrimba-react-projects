import { useEffect, useState } from "react";

const GAME_TIME = 10;

const useGame = () => {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(0);
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
    if (timeRemaining === GAME_TIME) {
      setGameOver(false);
    }
    if (timeRemaining === 0 && text.length > 0) {
      setGameOver(true);
    }
  }, [timeRemaining]);

  const countWords = (words: string): number =>
    words.split(" ").filter(word => word.length > 0).length;

  return {
    startGame,
    setText,
    countWords,
    gameOver,
    text,
    timeRemaining,
  };
};

export default useGame;
export { GAME_TIME };
