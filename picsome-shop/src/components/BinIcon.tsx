import { FC, useState } from "react";

const BinIcon: FC = () => {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <i
      className={`ri-delete-bin-${isFilled ? "fill" : "line"}`}
      onMouseOver={() => setIsFilled(true)}
      onMouseOut={() => setIsFilled(false)}
      aria-hidden="true"
    ></i>
  );
};

export default BinIcon;
