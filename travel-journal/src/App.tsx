import { FC } from "react";
import Header from "./components/Header";
import TravelSlice from "./components/TravelSlice";
import travelData from "./data/data";
import "./App.scss";

const App: FC = () => {
  return (
    <div>
      <Header />
      <main className="main">
        {travelData.map(x => (
          <TravelSlice key={x.id} {...x} />
        ))}
      </main>
    </div>
  );
};

export default App;
