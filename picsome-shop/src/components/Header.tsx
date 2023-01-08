import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => (
  <header>
    <nav className="header">
      <Link to="/">
        <h1>Pic Some</h1>
      </Link>
      <Link to="/cart">
        <span className="sr-only">cart</span>
        <i className="ri-shopping-cart-fill ri-fw ri-2x" aria-hidden="true"></i>
      </Link>
    </nav>
  </header>
);

export default Header;
