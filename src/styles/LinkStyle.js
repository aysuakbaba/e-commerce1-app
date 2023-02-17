import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkStyle = styled(NavLink)`
  font-size: 18px;
  color: black;
  &:hover{
    color: grey;
  };
  text-decoration: none;
  margin-left: 8px;
  
`;
