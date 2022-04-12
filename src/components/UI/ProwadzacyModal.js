import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./ProwadzacyModal.module.css";

const ProwadzacyBackdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ProwadzacyModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const ProwadzacyModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ProwadzacyBackdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ProwadzacyModalOverlay>{props.children}</ProwadzacyModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default ProwadzacyModal;
