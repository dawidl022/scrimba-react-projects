import { FC } from "react";
import FactList from "./FactList";
import "./Content.scss";

const Content: FC = () => (
  <main className="container">
    <h1 className="title">Fun facts about React</h1>
    <FactList />
  </main>
);

export default Content;
