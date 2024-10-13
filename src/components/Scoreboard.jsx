import React from "react";

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="headline">
        <h1>Don't click on the same card twice!!</h1>
        <div className="scoreboard">
          <h2> Score: {currentScore}</h2>
          <h2>Best Score: {bestScore}</h2>
        </div>
    </div>
    
  );
};

export default Scoreboard;
