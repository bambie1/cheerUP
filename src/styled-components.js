import styled from "styled-components";

export const CatCard = styled.span`
  margin: 2px;
  border: 1px solid #f2f2f2;
  color: #f2f2f2;
  font-size: 2.5vh;
  box-sizing: border-box;
  border-radius: 19px;
  padding: 5px 10px;
  cursor: pointer;
  &:nth-child(odd) {
    background: #f2f2f2;
    color: #5f4b8b;
  }
  &:hover {
    color: #f2f2f2;
    background: #e69a8d;
    border: 1px solid #e69a8d;
  }
`;
export const Button = styled.button`
  background: transparent;
  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  text-transform: uppercase;
  padding: 15px;
  color: #f2f2f2;
  margin: 20px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  align-self: center;

  &:hover {
    background: #f2f2f2;
    transition: 1s;
    color: #5f4b8b;
  }
  &:focus {
    background: #f2f2f2;
    border: 1px solid cyan;
    outline: none;
    color: #5f4b8b;
  }
`;

export const Group = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
