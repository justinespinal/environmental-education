import React from "react";

const Leaderboard = ({ index, leaderboard }) => {
  return (
    <div>
      <div>
        {leaderboard[index] && (
          <div>
            <h2>
              {index + 1}. {leaderboard[index].username} -{" "}
              {leaderboard[index].score}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
