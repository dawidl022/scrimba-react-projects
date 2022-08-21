import { FC } from "react";
import "./FactList.scss";

const FactList: FC = () => (
  <ul className="fact-list">
    <li>Was first released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 100k starts on GitHub</li>
    <li>Is maintained by Facebook</li>
    <li>Powers thousands fo enterprise apps, including mobile apps</li>
  </ul>
);

export default FactList;
