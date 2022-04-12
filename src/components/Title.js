import classes from "./Main.module.css";
//import SvgComponent from "../media/skniLogo";
//import skniLogo from "../media/skni-logo.svg";

import Icon from "../media/logo";

const Title = (props) => {
  return (
    <div className={classes.title}>
      <Icon />
      <h1>Poradnik przedmiotów SKN Informatyki</h1>
    </div>
  );
};

export default Title;
