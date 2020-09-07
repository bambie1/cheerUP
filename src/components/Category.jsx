import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "../styled-components";
import { QuoteContext } from "../contextAPI/QuoteContext";

const Category = ({ title, apiCategory }) => {
  const { setCategory } = useContext(QuoteContext);

  return (
    <>
      <Button
        onClick={() => {
          setCategory({
            title,
            apiCategory,
          });
        }}
      >
        {title}
      </Button>
    </>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default Category;
