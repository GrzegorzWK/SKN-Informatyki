import { useEffect, useState } from "react";
import Item from "./Item";
import classes from "./ItemList.module.css";

const przedmioty = [
  {
    id: "p1",
    name: "infa2",
    kierunek: "MIESI",
    tryb_zajec: "Stacjonarne",
    specjalizacja: "Miesi cos tam",
    obszaty_IT: "SQL",
    prowadzacy: "koles",
    jak_prowadzi_zajecia: "ok",
    zasady_zaliczenia: "egzamin + esej",
    prerekwizyty: "infa1",
    description: "BLA BLA",
    umiejetnosci: "SQL - join",
    opinie_o_przedmiocie: "spoko",
  },
  {
    id: "p2",
    name: "infa2",
    kierunek: "MIESI",
    tryb_zajec: "Stacjonarne",
    specjalizacja: "Miesi cos tam",
    obszaty_IT: "SQL",
    prowadzacy: "koles",
    jak_prowadzi_zajecia: "ok",
    zasady_zaliczenia: "egzamin + esej",
    prerekwizyty: "infa1",
    description: "BLA BLA",
    umiejetnosci: "SQL - join",
    opinie_o_przedmiocie: "spoko",
  },
  {
    id: "p3",
    name: "infa3",
    kierunek: "MIESI",
    tryb_zajec: "Stacjonarne",
    specjalizacja: "Miesi cos tam",
    obszaty_IT: "SQL",
    prowadzacy: "koles",
    jak_prowadzi_zajecia: "ok",
    zasady_zaliczenia: "egzamin + esej",
    prerekwizyty: "infa1",
    description: "BLA BLA",
    umiejetnosci: "SQL - join",
    opinie_o_przedmiocie: "spoko",
  },
  {
    id: "p4",
    name: "infa4",
    kierunek: "MIESI",
    tryb_zajec: "Stacjonarne",
    specjalizacja: "Miesi cos tam",
    obszaty_IT: "SQL",
    prowadzacy: "koles",
    jak_prowadzi_zajecia: "ok",
    zasady_zaliczenia: "egzamin + esej",
    prerekwizyty: "infa1",
    description: "BLA BLA",
    umiejetnosci: "SQL - join",
    opinie_o_przedmiocie: "spoko",
  },
];

const ItemList = (props) => {
  const [showUsers, setShowUsers] = useState(przedmioty);
  const [searchTerm, setSearchTerm] = useState("");

  const onChangeHandler = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // czy to use Effect jest tu konieczne?
  useEffect(() => {
    if (searchTerm.length !== 0) {
      setShowUsers(
        przedmioty.filter(
          (przedmiot) =>
            przedmiot.name.toLowerCase().includes(searchTerm) ||
            przedmiot.prowadzacy.toLowerCase().includes(searchTerm)
        )
      );
    } else {
      setShowUsers(przedmioty);
    }
  }, [searchTerm]);

  const przedmiotyList = showUsers.map((przedmiot) => (
    <Item
      key={przedmiot.id}
      id={przedmiot.id}
      name={przedmiot.name}
      kierunek={przedmiot.kierunek}
      tryb_zajec={przedmiot.tryb_zajec}
      specjalizacja={przedmiot.specjalizacja}
      obszaty_IT={przedmiot.obszaty_IT}
      prowadzacy={przedmiot.prowadzacy}
      jak_prowadzi_zajecia={przedmiot.jak_prowadzi_zajecia}
      zasady_zaliczenia={przedmiot.zasady_zaliczenia}
      prerekwizyty={przedmiot.prerekwizyty}
      description={przedmiot.description}
      umiejetnosci={przedmiot.umiejetnosci}
      opinie_o_przedmiocie={przedmiot.opinie_o_przedmiocie}
    />
  ));

  return (
    <>
      <input
        id="search"
        type="search"
        placeholder="Search..."
        className={classes["search-bar"]}
        onChange={onChangeHandler}
      />
      <ul className={classes.ul}>{przedmiotyList}</ul>
    </>
  );
};

export default ItemList;
