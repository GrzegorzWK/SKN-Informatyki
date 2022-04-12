import { useState } from "react";
import Main from "./components/Main";
import Header from "./components/UI/Header";
import Menu from "./components/Menu/Menu";

import "./App.css";

function App() {
  const [menuIsShown, setMenuIsShown] = useState(false);

  const showMenuHandler = () => {
    setMenuIsShown(true);
  };

  const hideMenuHandler = () => {
    setMenuIsShown(false);
  };

  return (
    <>
      {menuIsShown && <Menu onClose={hideMenuHandler} />}
      <Header onShowMenu={showMenuHandler} />
      <Main />
    </>
  );
}

export default App;
