import { useState } from "react";
import classes from "./Details.module.css";
import ProwadzacyModal from "./UI/ProwadzacyModal";

const Prowadzacy = (props) => {
  return (
    <ProwadzacyModal onClose={props.onClose}>
      <div>
        <p className={classes.prowadzacyp}>{props.prowadzacy}</p>
        <p>Ocena prowadzenia zajęć: {props.jak_prowadzi_zajecia}</p>
        <p>Zasady zaliczenia przedmiotu: {props.zasady_zaliczenia}</p>
      </div>
    </ProwadzacyModal>
  );
};

const Details = (props) => {
  const [prowadzacyIsShown, setProwadzacyIsShown] = useState(false);

  const onClose = () => {
    setProwadzacyIsShown(false);
  };

  const openProwadzacy = () => {
    setProwadzacyIsShown(true);
  };

  return (
    <div className={classes.detail}>
      <p className={classes.kierunek}>
        Kierunek: {props.kierunek} <br />
        Tryb zajęć: {props.tryb_zajec}
      </p>
      {!prowadzacyIsShown && (
        <button onClick={openProwadzacy} className={classes.button}>
          {" "}
          Prowadzący: {props.prowadzacy}
        </button>
      )}
      {prowadzacyIsShown && (
        <Prowadzacy
          onClose={onClose}
          prowadzacy={props.prowadzacy}
          jak_prowadzi_zajecia={props.jak_prowadzi_zajecia}
          zasady_zaliczenia={props.zasady_zaliczenia}
        />
      )}
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default Details;
