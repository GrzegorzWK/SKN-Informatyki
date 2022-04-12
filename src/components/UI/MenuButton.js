import classes from "./Header.module.css";

import menuIcon from "../../media/menu_white_24dp.svg";

const MenuButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <img src={menuIcon} alt="menu" />
    </button>
  );
};

export default MenuButton;
