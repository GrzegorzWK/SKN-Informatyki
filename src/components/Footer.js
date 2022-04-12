import fbLogo from "../media/icons8-facebook.svg";
import linkedInLogo from "../media/icons8-linkedin.svg";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-media"]}>
        <div>Dołącz do nas na mediach społecznościowych!</div>
        <div>
          <a
            href="https://www.facebook.com/skninformatyki"
            target="_blank"
            rel="noopener"
          >
            <img src={fbLogo} alt="Facebook Logo" />
          </a>
          <a
            href="https://pl.linkedin.com/company/sgh-students-association-for-computer-science-skni"
            rel="noopener"
            target="_blank"
          >
            <img src={linkedInLogo} alt="LinkedIn Logo"></img>
          </a>
        </div>
      </div>
      <div className={classes["footer-contact"]}>Kontakt</div>
    </footer>
  );
};

export default Footer;
