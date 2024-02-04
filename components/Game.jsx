import React, { useState } from "react";
import "./Game.css";

const Game = ({ questions, updateScores }) => {
  const [currentQuestionIndex, setQuestionIndex] = useState(0);
  const [currentScore, setScore] = useState("");

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (selected) => {
    if (selected === currentQuestion.answer) {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      updateScores(newScore);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuestionIndex(0);
    }
  };

  return (
    <div>
      <div className="quiz-container">
        <h1>{currentQuestion.question}</h1>
        <div className="choice-grid">
          {currentQuestion.choices.map((choice) => (
            <button
              key={choice}
              onClick={() => handleAnswer(choice)}
              className="choice-btn"
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
