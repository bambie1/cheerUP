import React from "react";
import Category from "../components/Category";
import styled from "styled-components";
import { Page, Group } from "../styled-components";
import { categories } from "../categories.js";

const SearchPage = () => {
  return (
    <Page>
      <Group>
        {categories.map((category, index) => (
          <Category key={index} {...category} />
        ))}
      </Group>
    </Page>
  );
};

export default SearchPage;
