import { FC } from "react";
import logo from "../assets/logo.svg";
import "./NavBar.scss";

const NavBar: FC = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="airbnb" className="logo" />
    </nav>
  );
};

export default NavBar;
