import { FC, useState } from "react";
import Quiz from "./screens/Quiz";
import Start from "./screens/Start";
import "./App.scss";

const App: FC = () => {
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <main className={`main${gameStarted ? " playing" : ""}`}>
      {gameStarted ? (
        <Quiz />
      ) : (
        <Start startGame={() => setGameStarted(true)} />
      )}
    </main>
  );
};

export default App;
