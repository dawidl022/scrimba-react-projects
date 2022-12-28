import { FC } from "react";
import "./App.scss";
import Game from "./components/Game";
import Header from "./components/Header";

const App: FC = () => {
  return (
    <main className="main">
      <Header />
      <Game />
    </main>
  );
};

export default App;
