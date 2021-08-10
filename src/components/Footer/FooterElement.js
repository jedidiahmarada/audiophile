import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.div`
    background: #101010;
    display: flex;
    flex-direction: column;
    align-content: center;
    padding: 0.5rem calc((90vw - 1000px) / 2);
`;

export const Nav = styled.nav`
    flex: 1;
    background: #121211;
    height: 86px;
    display: flex;
    justify-content: space-between;
    z-index: 10;
`;

export const NavLink = styled(Link)`
  font-weight: bold;
  font-size: 13px;
  line-height: 25px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #D87D4A;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  margin-right: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
  }
  &.active {
    color: #D87D4A;
  }
`;