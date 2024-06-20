import React from "react";

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboard">
      <h2> Score: {currentScore}</h2>
      <h2>Best Score: {bestScore}</h2>
    </div>
  );
};

export default Scoreboard;
