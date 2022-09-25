import { FC } from "react";
import trollFace from "../assets/troll.svg";
import "./Header.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <img src={trollFace} alt="Troll face" />
      <h1>Meme Generator</h1>
      <p className="subtitle">React Course - Project 3</p>
    </header>
  );
};

export default Header;
