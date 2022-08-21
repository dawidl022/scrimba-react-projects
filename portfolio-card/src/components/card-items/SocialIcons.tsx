import { FC } from "react";
import NewTab from "../../util/NewTab";
import twitterIcon from "../../assets/icons/twitter.svg";
import facebookIcon from "../../assets/icons/facebook.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import githubIcon from "../../assets/icons/github.svg";

const SocialIcons: FC = () => (
  <footer className="social-icons">
    <NewTab href="https://twitter.com">
      <img src={twitterIcon} alt="Twitter" />
    </NewTab>

    <NewTab href="https://facebook.com">
      <img src={facebookIcon} alt="Facebook" />
    </NewTab>

    <NewTab href="https://instagram.com">
      <img src={instagramIcon} alt="Instagram" />
    </NewTab>

    <NewTab href="https://github.com">
      <img src={githubIcon} alt="GitHub" />
    </NewTab>
  </footer>
);

export default SocialIcons;
