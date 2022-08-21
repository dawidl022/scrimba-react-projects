import { FC } from "react";
import portrait from "../../assets/dawid-square.jpg";
import Details from "./Details";

const Info: FC = () => (
  <header className="info">
    <img src={portrait} alt="Portrait" />
    <Details />
  </header>
);

export default Info;
