import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  cartHasItems: boolean;
}

const Header: FC<Props> = ({ cartHasItems }) => (
  <header>
    <nav className="header">
      <Link to="/">
        <h1>Pic Some</h1>
      </Link>
      <Link to="/cart">
        <span className="sr-only">cart</span>
        <i
          className={`ri-shopping-cart-${
            cartHasItems ? "fill" : "line"
          } ri-fw ri-2x`}
          aria-hidden="true"
        ></i>
      </Link>
    </nav>
  </header>
);

export default Header;
