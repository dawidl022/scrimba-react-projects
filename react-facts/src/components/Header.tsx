import { FC } from "react";
import reactLogo from "/react.svg";
import "./Header.scss";

const Header: FC = () => (
  <header className="header container">
    <img src={reactLogo} alt="React" />
    <div className="logo-text">ReactFacts</div>
    <h2 className="course-title">React Course - Project 1</h2>
  </header>
);

export default Header;
