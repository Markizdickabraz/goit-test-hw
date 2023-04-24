import styled from "styled-components";
import { Link } from "react-router-dom";

export const UserListStyled = styled.ul`
padding-top: 30px;
justify-content:center;
display:flex;
gap: 30px;
flex-wrap: wrap;
list-style: none;
padding-left: 30px;
padding-right: 30px;
`;

export const Title = styled.h1`
text-align: center;
font-size: 48px;
padding-top: 30px;
padding-bottom: 30px;
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
  text-align:center;
    margin: 0;
    font-family: 'Montserrat';
    font-style: normal;
    line-height: 24px;
    cursor: pointer;

  :hover {
    color: #471CA9;
  }
`;

export const GoHomeLinkStyled = styled.nav`
align-self: flex-start;
`

export const UserListContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`