import { FC } from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import cardData from "./data/data";
import "./App.scss";

const App: FC = () => {
  return (
    <div>
      <header>
        <NavBar />
        <Hero />
      </header>
      <main>
        <div className="cards">
          {cardData.map(x => (
            <Card key={x.id} {...x} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
