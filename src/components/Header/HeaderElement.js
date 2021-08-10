import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #121211;
  height: 86px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((90vw - 1000px) / 2);
  z-index: 10;
  border-bottom: 1px;
  border-color: #FFFFFF;
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

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
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
  margin-left: 40px;
  margin-right: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
  }
  &.active {
    color: #D87D4A;
  }
`;