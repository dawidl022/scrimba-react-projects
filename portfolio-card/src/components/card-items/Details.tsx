import { FC } from "react";
import emailIcon from "../../assets/icons/email.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import NewTab from "../../util/NewTab";

const Details: FC = () => {
  return (
    <div className="details">
      <div className="headline">
        <h1 className="full-name">Dawid Lachowicz</h1>
        <div className="job-title">Full Stack Developer</div>
      </div>
      <NewTab href="https://dawidlachowicz.com" className="basic-link">
        dawidlachowicz.com
      </NewTab>
      <div className="cta-buttons container">
        <NewTab href="mailto:dawid.k.lachowicz@gmail.com" className="email-btn">
          <img alt="" src={emailIcon} />
          Email
        </NewTab>
        <NewTab
          href="https://www.linkedin.com/in/dawid-k-lachowicz/"
          className="linkedin-btn"
        >
          <img alt="" src={linkedinIcon} />
          LinkedIn
        </NewTab>
      </div>
    </div>
  );
};

export default Details;
