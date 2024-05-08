import React from "react";
import { useNavigate } from "react-router-dom";

const Roblox = () => {
  const list = [
    {
      id: 1,
      path: "robloxtwo.png",
      level: 1000,
      price: 25000,
    },
    {
      id: 2,
      path: "robloxthree.png",
      level: 500,
      price: 15000,
    },
    {
      id: 3,
      path: "roblox.png",
      level: 100,
      price: 3000,
    },
  ];
  const nav = useNavigate()

  return (
    <div className="roblox-container">
      <h2>Roblox</h2>
      <div className="roblox">
        {list.map((li) => (
          <div className="robloxitem" key={li.id}>
            <img src={li.path} width="300px" />
            <div className="down">
              <div className="question">
                <h4>Level:</h4>
                <p>{li.level}</p>
              </div>
              <div className="question">
                <h4>Price:</h4>
                <div className="price">
                  <span>N</span>
                  <p>{li.price}</p>
                </div>
              </div>
            </div>
            <a className="link-btn"
              href="https://web.facebook.com/profile.php?id=61554854941618"
              target="_blank"
            >
              <button className="btn">Get Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roblox;
