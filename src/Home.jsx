import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import InfoCard from "../components/InfoCard";
import NavBar from "../components/NavBar";

import quizQuestions from "./quizQuestions.json";
import Game from "../components/Game";

const Home = ({ username, loggedIn, setLoggedIn }) => {
  const [userData, setUserData] = useState(null);
  const [currentScore, setCurrentScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]); // [username, score
  const Navigate = useNavigate();

  useEffect(() => {
    const leaderBoard = getLeaderboard();
    setLeaderboard(leaderBoard);
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      const storedData = localStorage.getItem(username);
      if (storedData) {
        setUserData(JSON.parse(storedData));
      }
    }
  }, [username, loggedIn]);

  const onButtonClick = () => {
    if (loggedIn) {
      setLoggedIn(false);
    } else {
      Navigate("/login");
    }
  };

  const getLeaderboard = () => {
    let leaderboard = [];
    for (let i = 0; i < localStorage.length; i++) {
      try {
        let key = localStorage.key(i);
        const data = JSON.parse(localStorage.getItem(key));
        if (data && data.highScore !== undefined) {
          leaderboard.push({ username: key, score: data.highScore });
        }
      } catch (e) {
        console.log("Error parsing JSON", e);
      }
    }

    return leaderboard.sort((a, b) => b.score - a.score).slice(0, 10);
  };

  const updateScores = (currentScore) => {
    setCurrentScore(currentScore);
    let updatedData = {
      ...userData,
      highScore: Math.max(userData.highScore, currentScore),
    };
    setUserData(updatedData);

    localStorage.setItem(username, JSON.stringify(updatedData));
  };

  return (
    <>
      <div
        className="homeDiv"
        style={{
          backgroundImage: `url("../img/green.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "95vh",
        }}
      >
        <NavBar />
        <div className="greenText">
          <h1>Unleash Your Eco-Wits</h1>
          <h3>Play Your Way to Greener World</h3>
        </div>
        <div className="buttonContainer">
          <input
            style={({ color: "black" }, { backgroundColor: "white" })}
            className="inputB"
            type="button"
            onClick={onButtonClick}
            value={loggedIn ? "Log out" : "Get Started"}
          />
        </div>
      </div>

      <div className="Info">
        <h3 style={{ color: "#79C585" }}>WHY CLIMATE?</h3>
        <h1>THE IMPORTANCE</h1>
        <div className="purp">
          <InfoCard
            src="../img/water.svg"
            purp="The global average sea level is rising at a rate exceeding 4 millimeters per 
            year"
          />
          <InfoCard
            src="../img/fumes.svg"
            purp="The world emits around 52.4 billion metric tons of CO2 per year, contributing 
            to climate change"
          />
          <InfoCard
            src="../img/fire.svg"
            purp="The world lost an average of 10.1 million hectares (25 million acres) of 
            forest annually between 2015 and 2020."
          />
        </div>
      </div>

      <div className="gameTitle">
        <h4 style={{ color: "#79C585" }}>THE GAME</h4>
        <h2 id="play">HOW TO PLAY</h2>
      </div>

      <div className="GameInfo">
        <div className="GameDesc">
          <div className="GameImg">
            <img src="../img/profile.svg"></img>
            <h2>LOG IN</h2>
          </div>
          <h3>Log in before playing to track your progress!</h3>
          {loggedIn ? (
            <div></div>
          ) : (
            <button className="GameLogin" onClick={onButtonClick}>
              Login
            </button>
          )}
        </div>
        <div className="GameDesc">
          <div className="GameImg">
            <img src="../img/controller.svg"></img>
            <h2>GAMEPLAY</h2>
          </div>
          <h3>
            Based on the question presented by the flashcard, select the correct
            answer
          </h3>
        </div>
        <div className="GameDesc">
          <div className="GameImg">
            <img src="../img/leader.svg"></img>
            <h2>LEADERBOARD</h2>
          </div>
          <h3>Compete with friends and family!</h3>
        </div>
      </div>
      <br />
      {loggedIn ? (
        <div>
          <div className="Points">
            <div className="classRow">
              <div className="pointDisplay">
                <img src="../img/score.svg"></img>
                <h2>Current Score: {currentScore}</h2>
              </div>
              <div className="pointDisplay">
                <img className="highScoreIcon" src="../img/icon.svg"></img>
                <h2>High Score: {userData ? userData.highScore : 0}</h2>
              </div>
            </div>
          </div>
          <Game questions={quizQuestions} updateScores={updateScores} />

          <div className="leaderboard">
            <h2>Leaderboard</h2>
            <ol>
              {leaderboard.map((entry, index) => (
                <li key={index}>
                  {index + 1}. {entry.username} - {entry.score}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Home;
