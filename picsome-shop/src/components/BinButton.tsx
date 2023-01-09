import { FC, useState } from "react";

interface BinButtonProps {
  onClick: () => void;
}

const BinButton: FC<BinButtonProps> = ({ onClick }) => {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseOver={() => setIsFilled(true)}
      onMouseOut={() => setIsFilled(false)}
      onFocus={() => setIsFilled(true)}
      onBlur={() => setIsFilled(false)}
    >
      <span className="sr-only">Remove from cart</span>
      <i
        className={`ri-delete-bin-${isFilled ? "fill" : "line"}`}
        aria-hidden="true"
      ></i>
    </button>
  );
};

export default BinButton;
