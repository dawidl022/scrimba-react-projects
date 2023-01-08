import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => (
  <header>
    <nav>
      <Link to="/">
        <h1>Pic Some</h1>
      </Link>
      <Link to="/cart">cart</Link>
    </nav>
  </header>
);

export default Header;
