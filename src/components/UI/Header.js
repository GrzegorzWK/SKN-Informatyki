import React from "react";
import MenuButton from "./MenuButton";
import classes from "./Header.module.css";
import fbLogo from "../../media/icons8-facebook.svg";
import linkedInLogo from "../../media/icons8-linkedin.svg";
import GBFlag from "../../media/icons8-great-britain-30.png";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <MenuButton onClick={props.onShowMenu} />
        <div>SKNI</div>
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
          <img src={GBFlag} alt="Change text to English." />
        </div>
      </header>
    </>
  );
};

export default Header;
