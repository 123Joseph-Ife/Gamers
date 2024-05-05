import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <h1>
      <Link to="/">
        <img src="/logo.png" alt="Logo" width="50px" />
        <span>The Gamers</span>
      </Link>
    </h1>
  );
};

export default Heading;
