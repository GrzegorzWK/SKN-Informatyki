import Modal from "../UI/Modal";
//import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div>Menu</div>
    </Modal>
  );
};

export default Menu;
