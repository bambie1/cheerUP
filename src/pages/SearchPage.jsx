import React, { useState, useContext } from "react";
import { QuoteContext } from "../contextAPI/QuoteContext";
import { useHistory } from "react-router-dom";
import Category from "../components/Category";
import { Group, Button } from "../styled-components";
import { categories } from "../categories.js";
import { Link } from "react-router-dom";
import svgImg from "../assets/undraw_buddies.svg";
import quotation from "../assets/icons8-quote-48.png";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [showError, setShowError] = useState(false);
  const { category } = useContext(QuoteContext);
  const history = useHistory();

  const checkCategory = (e) => {
    e.preventDefault();
    if (category.apiCategory !== undefined) {
      history.push("/quotes");
    } else setShowError(true);
  };
  return (
    <div className="page search">
      <nav className="navbar">
        <Link to="/">
          <span className="brand-name">CHEER-UP!</span>
        </Link>
      </nav>
      <input
        type="text"
        value={search}
        placeholder="How are you feeling?"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="content">
        <div id="search-content">
          <span>Quick Links:</span>
          <Group>
            {categories.map((category, index) => (
              <Category key={index} {...category} />
            ))}
          </Group>
          {/* <Link to="/quotes"> */}
          <Button onClick={checkCategory}>Quotes</Button>
          {/* </Link> */}
          <span className={`error-msg ${showError ? "display" : ""}`}>
            You must select a category.
          </span>
        </div>
        <img className="home-illustration" src={svgImg} alt="friends" />
      </div>
    </div>
  );
};

export default SearchPage;
