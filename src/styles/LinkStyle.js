import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkStyle = styled(NavLink)`
  font-size: 16px;
  color: black;
  &:hover{
    color: #567189;
  };
  text-decoration: none;
  padding: 5px;
`;
