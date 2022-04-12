import React, { useState } from "react";
import classes from "./Item.module.css";
import chevronRight from "../media/expand_more_black_24dp.svg";
import Details from "./Details";

const Item = (props) => {
  const [descIsShowed, setDescIsShowed] = useState(false);

  const click = () => {
    if (descIsShowed === false) {
      setDescIsShowed(true);
    } else {
      setDescIsShowed(false);
    }
  };

  return (
    <div className={classes.container}>
      <div
        className={
          descIsShowed ? `${classes.item} ${classes.open}` : classes.item
        }
      >
        <button className={classes.button} onClick={click}>
          <img
            src={chevronRight}
            alt="chevron"
            className={descIsShowed ? classes.img : ""}
          />{" "}
          {props.name}
        </button>
        {descIsShowed && (
          <Details
            id={props.id}
            kierunek={props.kierunek}
            tryb_zajec={props.tryb_zajec}
            specjalizacja={props.specjalizacja}
            obszaty_IT={props.obszaty_IT}
            prowadzacy={props.prowadzacy}
            jak_prowadzi_zajecia={props.jak_prowadzi_zajecia}
            zasady_zaliczenia={props.zasady_zaliczenia}
            prerekwizyty={props.prerekwizyty}
            description={props.description}
            umiejetnosci={props.umiejetnosci}
            opinie_o_przedmiocie={props.opinie_o_przedmiocie}
          />
        )}
      </div>
    </div>
  );
};

export default Item;
