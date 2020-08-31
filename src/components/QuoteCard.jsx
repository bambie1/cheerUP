import React from "react";

const QuoteCard = ({ quote, quoteAuthor }) => {
  return (
    <div>
      <p>{quote}</p>
      <span> - {quoteAuthor}</span>
    </div>
  );
};

export default QuoteCard;
