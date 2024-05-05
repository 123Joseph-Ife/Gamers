import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ listOfGames, clicked, triggered, setTriggered }) => {
  return (
    <nav className={clicked === "clicked" ? "active" : ""}>
      <ul className="ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <p
            className="link-trigger"
            onMouseOver={() => setTriggered("triggered")}
            onMouseOut={() => setTriggered("untriggered")}
            onClick={() =>
              triggered === "triggered"
                ? setTriggered("untriggered")
                : setTriggered("triggered")
            }
          >
            Games &darr;
          </p>
          <ul
            className={
              triggered === "triggered"
                ? "link-trigger-list triggered"
                : "link-trigger-list"
            }
            onMouseOver={() => setTriggered("triggered")}
            onMouseOut={() => setTriggered("untriggered")}
          >
            {listOfGames.map((game) => (
              <li key={game.id}>
                <Link to={game.link}>{game.name}</Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
