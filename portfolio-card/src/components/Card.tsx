import { FC } from "react";
import About from "./card-items/About";
import Info from "./card-items/Info";
import Interests from "./card-items/Interests";
import SocialIcons from "./card-items/SocialIcons";
import "./Card.scss";

const Card: FC = () => (
  <article className="card">
    <Info />
    <div className="content container">
      <About />
      <Interests />
    </div>
    <SocialIcons />
  </article>
);

export default Card;
