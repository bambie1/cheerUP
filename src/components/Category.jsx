import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CatCard } from "../styled-components";

const Category = ({ title, apiCategory }) => {
  return <CatCard>{title}</CatCard>;
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
export default Category;
