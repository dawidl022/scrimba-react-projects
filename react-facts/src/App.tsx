import { FC } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./App.scss";

const App: FC = () => (
  <div className="app">
    <Header />
    <Content />
  </div>
);

export default App;
