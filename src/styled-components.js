import styled from "styled-components";

export const CatCard = styled.span`
  margin: 2px;
  background: cyan;
  border: 1px solid cyan;
  border-radius: 10px;
  padding: 3px;
`;
export const Button = styled.button`
  margin: 2px;
  background: cyan;
  border: 1px solid cyan;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background: white;
    border: white;
  }
  &:focus {
    background: white;
    border: 1px solid cyan;
    outline: none;
  }
`;
export const Page = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
`;

export const Group = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  max-width: 100%;
`;
