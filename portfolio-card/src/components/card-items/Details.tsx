import { FC } from "react";
import emailIcon from "../../assets/icons/email.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import NewTab from "../../util/NewTab";

const Details: FC = () => {
  return (
    <div className="details">
      <div className="headline">
        <h1 className="full-name">Laura Smith</h1>
        <div className="job-title">Frontend Developer</div>
      </div>
      <p>laurasmith.website</p>
      <div className="cta-buttons container">
        <NewTab href="mailto:laura@smith" className="email-btn">
          <img alt="" src={emailIcon} />
          Email
        </NewTab>
        <NewTab href="https://linkedin.com" className="linkedin-btn">
          <img alt="" src={linkedinIcon} />
          LinkedIn
        </NewTab>
      </div>
    </div>
  );
};

export default Details;
