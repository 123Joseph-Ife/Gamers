import React from 'react'

const Hamburger = ({ clicked, setClicked }) => {
  return (
    <div
    className="hamburger"
    onClick={() => {
      clicked === "clicked"
        ? setClicked("unclicked")
        : setClicked("clicked");
    }}
  >
    <span className={clicked === "clicked" ? "active" : "span"}></span>
    <span className={clicked === "clicked" ? "active" : "span"}></span>
    <span className={clicked === "clicked" ? "active" : "span"}></span>
  </div>
  )
}

export default Hamburger