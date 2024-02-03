import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

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
        style={{
          backgroundImage: `url("../img/green.svg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1>Welcome!</h1>
        <div className="buttonContainer">
          <input
            className="inputB"
            type="button"
            onClick={onButtonClick}
            value={loggedIn ? "Log out" : "Log in"}
          />
          {loggedIn ? <div>You are logged in!</div> : <div />}
        </div>
      </div>
    </>
  );
};

export default Home;
