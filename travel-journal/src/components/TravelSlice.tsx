import { FC } from "react";
import type { Travel } from "../data/data";
import "./TravelSlice.scss";

const TravelSlice: FC<Travel> = ({
  title,
  country,
  gMapsUrl,
  imageUrl,
  startDate,
  endDate,
  description,
}) => {
  const formatDate = (isoDate: string): string =>
    new Date(startDate).toLocaleDateString("en-GB", {
      dateStyle: "long",
    });

  return (
    <article className="travel-slice">
      <div className="image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="content">
        <div className="travel-slice__header">
          <span className="country">{country}</span>
          <a
            href={gMapsUrl}
            className="faint-link"
            target="_blank"
            rel="noopener"
          >
            View on Google Maps
          </a>
        </div>
        <h2>{title}</h2>
        <div className="dates">
          <time dateTime={startDate}>{formatDate(startDate)}</time>
          <span> - </span>
          <time dateTime={endDate}>{formatDate(endDate)}</time>
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default TravelSlice;
