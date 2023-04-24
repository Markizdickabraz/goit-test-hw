import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserListStyled = styled.ul`
display:flex;
gap: 30px;
flex-wrap: wrap;
list-style: none;
`;

export const Title = styled.h1`
text-align: center;
font-size: 48px;
`;

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 24px;
  padding-left: 15px;

  :hover {
    color: lightblue;
  }
`;