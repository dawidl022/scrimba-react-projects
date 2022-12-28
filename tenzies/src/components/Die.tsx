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
      <div className={`face face${value}`}>
        {Array.apply(null, Array(value)).map((_, i) => (
          <div key={i} className={`dot dot${i + 1}`}></div>
        ))}
        <span className="sr-only">{value}</span>
      </div>
    </button>
  );
};

export default Die;
