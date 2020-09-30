import React from "react";
import { Button } from "../styled-components";
import { Link } from "react-router-dom";
import illustration from "../assets/undraw_i_can_fly.svg";

const HomePage = () => {
  return (
    <div className="page home">
      <img className="home-illustration" src={illustration} alt="illst" />
      <div id="home-content">
        <h2 className="heading">Cheer-Up!</h2>
        <p className="sub-heading">Just the right quotes to give you a lift!</p>
        <Link to="/categories">
          <Button>Get Inspired</Button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
