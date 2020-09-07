import React, { useContext, useState, useEffect } from "react";
import { QuoteContext } from "../contextAPI/QuoteContext";
import { randomItem } from "../helperFunctions";
import { Button } from "../styled-components";
import { Link } from "react-router-dom";

const QuotesPage = () => {
  const { category } = useContext(QuoteContext);
  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    if (category.apiCategory !== undefined) {
      fetch(
        `https://bambie1.github.io/cheer-up-quotes/${category?.apiCategory}`
      )
        .then((res) => res.json())
        .then((data) => {
          setRandomQuote(randomItem(data));
        })
        .catch((err) => console.log("error: ", err));
    }
  }, [category]);

  return (
    <div className="page-content">
      <h1>Quotes</h1>
      <Button>
        <Link to="/categories">Back</Link>
      </Button>
      {randomQuote.quote}
    </div>
  );
};

export default QuotesPage;
