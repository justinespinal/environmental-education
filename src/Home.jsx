import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
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
      </div>
    </>
  );
};

export default Home;
