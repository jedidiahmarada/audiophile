import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './HeaderElement';

import Logo from '../../assets/shared/desktop/logo.svg'
import IconCart from '../../assets/shared/desktop/icon-cart.svg'

const Header = ({data}) => {
  return (
    <>
      <Nav>
        <NavLink to='/home'>
          <img src={Logo} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          {data.map((value, index) => {
            return (
              <NavLink key={index} to={value.path} activeStyle>{value.title}</NavLink>
            )
          })}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/cart'><img src={IconCart} alt="cart" /></NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Header;