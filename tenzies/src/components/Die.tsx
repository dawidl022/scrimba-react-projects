import "./Die.scss";
import { FC } from "react";

interface DieProps {
  value: number;
  isSelected: boolean;
  toggleSelect: () => void;
}

const Die: FC<DieProps> = ({ value, isSelected, toggleSelect }) => {
  return (
    <button
      className={`die${isSelected ? " active" : ""}`}
      onClick={toggleSelect}
    >
      {value}
    </button>
  );
};

export default Die;
