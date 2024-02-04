import React from "react";
import "./Game.css";
const Leaderboard = ({ index, leaderboard }) => {
  return (
    <div>
      {leaderboard[index] && (
        <div className="nameDisplay">
          <p>{index + 1}.</p>
          <p>{leaderboard[index].username} - </p>
          <p>{leaderboard[index].score}</p>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
