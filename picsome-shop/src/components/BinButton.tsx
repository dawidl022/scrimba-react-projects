import { FC } from "react";
import useHover from "../hooks/useHover";

interface BinButtonProps {
  onClick: () => void;
}

const BinButton: FC<BinButtonProps> = ({ onClick }) => {
  const [isFilled, filledRef] = useHover<HTMLButtonElement>();

  return (
    <button onClick={onClick} ref={filledRef}>
      <span className="sr-only">Remove from cart</span>
      <i
        className={`ri-delete-bin-${isFilled ? "fill" : "line"}`}
        aria-hidden="true"
      ></i>
    </button>
  );
};

export default BinButton;
