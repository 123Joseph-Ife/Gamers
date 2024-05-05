import React from "react";
import { useNavigate } from "react-router-dom";

const FreeFire = () => {
  const list = [
    {
      id: 1,
      path: "freefire.png",
      level: 13,
      rank: "Gold II",
      price: 3000,
    },
    {
      id: 2,
      path: "freefiretwo.png",
      level: 17,
      rank: "Diamond I",
      price: 8000,
    },
    {
      id: 3,
      path: "back.png",
      level: 25,
      rank: "Platinum II",
      price: 15000,
    },
  ];

  const nav = useNavigate();

  return (
    <div className="freefire-container">
      <h2>Free Fire</h2>
      <div className="freefire">
        {list.map((li) => (
          <div className="freefireitem" key={li.id}>
            <img src={li.path} width="300px" />
            <div className="down">
              <div className="question">
                <h4>Level:</h4>
                <p>{li.level}</p>
              </div>
              <div className="question">
                <h4>Rank:</h4>
                <p>{li.rank}</p>
              </div>
              <div className="question">
                <h4>Price:</h4>
                <div className="price">
                  <span>N</span>
                  <p>{li.price}</p>
                </div>
              </div>
            </div>
            <button className="btn" onClick={() => window.location.href = "https://web.facebook.com/profile.php?id=61554854941618"}>
              Get Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeFire;
