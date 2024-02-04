import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import InfoCard from "../components/InfoCard";
import NavBar from "../components/NavBar";

const Home = ({ username, loggedIn, setLoggedIn }) => {
  const Navigate = useNavigate();

  const onButtonClick = () => {
    if (loggedIn) {
      setLoggedIn(false);
    } else {
      Navigate("/login");
    }
  };

  return (
    <>
      <div
        className="homeDiv"
        style={{
          backgroundImage: `url("../img/green.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "80vh",
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
            purp=" The global average sea level is rising at a rate exceeding 4 millimeters per 
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
        <h2>HOW TO PLAY</h2>
      </div>

      <div className="GameInfo">
        <div className="GameDesc">
          <div className="GameImg">
            <img src="../img/profile.svg"></img>
            <h2>LOG IN</h2>
          </div>
          <h3>Log in before playing to track your progress!</h3>
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
    </>
  );
};

export default Home;
