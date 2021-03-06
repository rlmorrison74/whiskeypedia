import logo from "../assets/images/GitHub-Mark-Light-32px.png";
import linkedin from "../assets/images/LI-Logo.png";
import "../styles/components/footer.css";
import siteLogo from "../assets/images/whiskeypedia_logo_white.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="whiskeypedialogo">
        <img src={siteLogo} alt="whiskeypedia logo" />
      </div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/rlmorrison74/">
          <img
            className="linkedin"
            src={linkedin}
            alt="link to raymond morrison's LinkedIn profile"
          />
        </a>
        <a href="https://github.com/rlmorrison74/whiskeypedia">
          <img className="github" src={logo} alt="Link to github repo" />
        </a>
      </div>
    </div>
  );
}
