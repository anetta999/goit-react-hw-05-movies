import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  border-bottom: 1px solid #84babe;
  background-color: #9fc1c375;
`;
export const NavList = styled.ul`
  display: flex;
  gap: 40px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;

  color: #6a7087;
  font-family: 'Ubuntu', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  transition: 350ms color, font-weight, ease-in;

  &:hover {
    font-weight: 600;
    color: #2c5f63;
  }

  &.active {
    font-weight: 600;
    color: #2c5f63;
  }

  &.active::after {
    position: absolute;
    bottom: 0;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    background-color: #84babe;
    border-radius: 2px;
  }
`;
