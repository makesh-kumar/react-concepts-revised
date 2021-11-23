import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import "./navbar.css";
import { useHistory } from "react-router-dom";
import ButtonPage from "./ButtonPage";

function RouterTest() {
  let history = useHistory();
  //   const loc = useLocation();
  const goToBtn = () => {
    history.push("/button");
    console.log(history);
    // console.log(loc);
  };

  const goToProfile = () => {
    history.push({ pathname: "/profile", state: "KKKK" });
  };
  return (
    <div>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <button className="link" onClick={goToProfile}>
        Profile
      </button>
      <button className="link" onClick={goToBtn}>
        Button
      </button>
    </div>
  );
}

export default RouterTest;
