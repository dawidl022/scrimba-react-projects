import { FC } from "react";
import heroImg from "../assets/hero.svg";
import "./Hero.scss";

const Hero: FC = () => {
  return (
    <div className="hero">
      <img
        src={heroImg}
        alt="Satisfied clients of airbnb welcome you to the site"
        className="hero-img"
      />
      <h1 className="title">Online Experiences</h1>
      <p className="cta-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
};

export default Hero;
