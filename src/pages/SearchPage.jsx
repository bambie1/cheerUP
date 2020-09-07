import React from "react";
import Category from "../components/Category";
import styled from "styled-components";
import { Page, Group } from "../styled-components";
import { categories } from "../categories.js";
import { Link } from "react-router-dom";

const SearchPage = () => {
  return (
    <Page>
      <div className="page-content">
        <Group>
          {categories.map((category, index) => (
            <Category key={index} {...category} />
          ))}
        </Group>
        <Link to="/quotes">Quotes</Link>
      </div>
    </Page>
  );
};

export default SearchPage;
