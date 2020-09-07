import React from "react";
import { Page, Button } from "../styled-components";
import { Link } from "react-router-dom";
import illustration from "../assets/smiley_illustration.svg";
import { Img } from "../styled-components";

const HomePage = () => {
  return (
    <Page>
      <div className="page-content">
        <h2>Cheer-Up</h2>
        <p>Just the right quotes for whatever you're feeling</p>
        <Button>
          <Link to="/categories">Get Inspired</Link>
        </Button>
        <Img id="home-illustration" src={illustration} alt="illst" />
      </div>
    </Page>
  );
};

export default HomePage;
