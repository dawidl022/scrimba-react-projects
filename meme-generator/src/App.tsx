import { FC } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
};

export default App;
