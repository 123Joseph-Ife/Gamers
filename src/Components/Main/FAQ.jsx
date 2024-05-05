import React, { useState } from "react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [first, setFirst] = useState("closed");
  const [second, setSecond] = useState("closed");
  const [third, setThird] = useState("closed");
  return (
    <ul>
      <li
        onClick={() =>
          first === "closed" ? setFirst("opened") : setFirst("closed")
        }
      >
        <div className="top">
          <h3>Do we give you the gaming accounts?</h3>
          {first === "closed" ? <>&darr;</> : <>&uarr;</>}
        </div>
        <p className={first === "opened" ? "key opened" : "key"}>
          Of course. We give you gaming accounts, so You don't have to worry
          cause we got you covered. And this process is so easy that even a
          5year old would get it. <Link to="/games">C'mon start ordering</Link>
        </p>
      </li>
      <li
        onClick={() =>
          second === "closed" ? setSecond("opened") : setSecond("closed")
        }
      >
        <div className="top">
          <h3>How fast is it?</h3>
          {second === "closed" ? <>&darr;</> : <>&uarr;</>}
        </div>
        <p className={second === "opened" ? "key opened" : "key"}>
          We are all about speed and that is why when it comes to speed we are
          the speed of light. Are curious about{" "}
          <a href="#how">how this process works </a>
        </p>
      </li>
      <li
        onClick={() =>
          third === "closed" ? setThird("opened") : setThird("closed")
        }
      >
        <div className="top">
          <h3>Do we give you the gaming accounts?</h3>
          {third === "closed" ? <>&darr;</> : <>&uarr;</>}
        </div>
        <p className={third === "opened" ? "key opened" : "key"}>
          Of course. We give you gaming accounts, so You don't have to worry
          cause we got you covered.
        </p>
      </li>
    </ul>
  );
};

export default FAQ;
