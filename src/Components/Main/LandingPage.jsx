import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const nav = useNavigate()

  return (
    <div className="landing" id="how">
      <h1>We Are THE GAMERS</h1>
      <p>
        Are you tired of having to play games for a long time just to get to a
        <br />
        high level, well, not any more with THE GAMERS.We give give you gaming
        <br />
        accounts for a very low price. The first 20 buyers get's a discount of
        <br />
        30%.
      </p>
      <button onClick={() => nav("/games")}>Start buying games. &rarr;</button>
    </div>
  );
};

export default LandingPage;
