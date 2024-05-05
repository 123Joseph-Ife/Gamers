import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Heading from "./Heading";
import Hamburger from "./Hamburger";

const Header = ({ listOfGames }) => {
  const [triggered, setTriggered] = useState("untriggered");
  const [clicked, setClicked] = useState("unclicked");
  return (
    <header>
      <Heading />
      <Hamburger clicked={clicked} setClicked={setClicked} />

      <Nav
        listOfGames={listOfGames}
        clicked={clicked}
        setTriggered={setTriggered}
        triggered={triggered}
      />
    </header>
  );
};

export default Header;
