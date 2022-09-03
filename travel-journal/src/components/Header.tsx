import { FC } from "react";
import globe from "../assets/icons/globe.svg";
import "./Header.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <img src={globe} alt="" />
      <h1 className="title">my travel journal.</h1>
    </header>
  );
};

export default Header;
