import React from "react";
import { Page, Button } from "../styled-components";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Page>
      <div>
        <h2>Cheer-Up</h2>
        <p>Just the right quotes for whatever you're feeling</p>
        <Button>
          <Link to="/categories">Get Inspired</Link>
        </Button>
      </div>
    </Page>
  );
};

export default HomePage;
