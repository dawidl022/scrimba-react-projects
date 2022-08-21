import { FC } from "react";
import portrait from "../../assets/portrait.png";
import Details from "./Details";

const Info: FC = () => (
  <header className="info">
    <img src={portrait} alt="Portrait" />
    <Details />
  </header>
);

export default Info;
