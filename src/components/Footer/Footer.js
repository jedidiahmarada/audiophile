import React from 'react';
import Logo from '../../assets/shared/desktop/logo.svg'
import IconFacebook from '../../assets/shared/desktop/icon-facebook.svg'
import IconInstagram from '../../assets/shared/desktop/icon-instagram.svg'
import IconTwitter from '../../assets/shared/desktop/icon-twitter.svg'
import { 
    FooterContainer,
    Nav,
    NavMenu,
    NavLink
} from './FooterElement';


const Footer = ({data}) => {
  return (
    <>
      <FooterContainer> 
         <Nav>
            <NavLink to='/'>
            <img src={Logo} alt='logo' />
            </NavLink>
            <NavMenu>
            {data.category.map((value, index) => {
                return (
                <NavLink key={index} to={value.path} activeStyle>{value.title}</NavLink>
                )
            })}
            </NavMenu>
        </Nav>
        <div className="footer-container-content">
            <p className="footer-desc">
                {data.description}
            </p>
                <div className="footer-content-social-media">
                    <img className="footer-social-media" src={IconFacebook} alt="icon-facebook"/>
                    <img className="footer-social-media" src={IconInstagram} alt="icon-instagram" />
                    <img className="footer-social-media" src={IconTwitter} alt="icon-twitter" />
                </div>
            
        </div>

        <p className="footer-copyright">Copyright 2021. All Rights Reserved</p>
      </FooterContainer>
    </>
  );
};

export default Footer;