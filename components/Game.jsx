import React, { useState } from "react";
import "./Game.css";

const Game = ({ questions, updateScores }) => {
  const [currentQuestionIndex, setQuestionIndex] = useState(
    Math.floor(Math.random() * questions.length - 1)
  );
  const [currentScore, setScore] = useState(0);

  const colors = ["red", "blue", "green", "yellow"];

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (selected) => {
    if (selected === currentQuestion.answer) {
      const newScore = currentScore + 1;
      setScore(newScore);
      updateScores(newScore);
    } else {
      const newScore = 0;
      setScore(newScore);
      updateScores(newScore);
    }

    setQuestionIndex(Math.floor(Math.random() * questions.length - 1));
  };

  return (
    <div>
      <div className="quiz-container">
        <h1>{currentQuestion.question}</h1>
        <div className="choice-grid">
          {currentQuestion.choices.map((choice, index) => (
            <button
              key={choice}
              onClick={() => handleAnswer(choice)}
              className="choice-btn"
              style={{ border: "2px solid " + colors[index % 4] }}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Game;
