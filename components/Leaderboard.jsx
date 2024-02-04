import React from "react";
import "./Game.css";
const Leaderboard = ({ index, leaderboard }) => {
  return (
    <>
      {leaderboard[index] && (
        <div className="nameDisplay">
          <p>{index + 1}.</p>
          <p>{leaderboard[index].username}</p>
          <p>{leaderboard[index].score}</p>
        </div>
      )}
    </>
  );
};

export default Leaderboard;
