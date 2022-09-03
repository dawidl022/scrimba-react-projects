import { FC } from "react";
import { Experience } from "../data/data";
import "./Card.scss";

const Card: FC<Experience> = ({
  coverImg,
  stats,
  location,
  title,
  price,
  openSpots,
}) => {
  const status =
    openSpots === 0 ? "Sold out" : location === "Online" ? location : "";

  return (
    <article className="card">
      <div className="image">
        <img src={`/images/${coverImg}`} alt="" />
        {status && <span className="status">{status}</span>}
      </div>

      <div className="below-img">
        <div className="rating">{stats.rating.toFixed(1)}</div>
        <div className="meta">
          ({stats.reviewCount}) · {location}
        </div>
      </div>

      <p className="description">{title}</p>

      <div className="price">
        <div className="bold">From ${price}</div> / person
      </div>
    </article>
  );
};

export default Card;
