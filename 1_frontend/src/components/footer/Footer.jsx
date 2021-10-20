import React from 'react';
import { IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io';
import { BsTwitter, BsInstagram } from 'react-icons/bs';

import {
  AdjustedStyledBody01,
  AdjustedStyledTitle02,
  StyledFooter,
  StyledFooterLeft,
  StyledFooterTop,
  StyledFooterRight,
  StyledFooterRightThingysWrapper,
  StyledH3,
  StyledIconWrapper,
  StyledFooterBottom,
  StyledLogo,
  StyledFooterNav,
} from './Footer.style';
import { StyledLink, StyledLinkWrapper } from '../navbar/Navbar.style';
import { StyledBody02 } from '../../global.css';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTop>
        <StyledFooterLeft>
          <StyledH3>Get in touch with us for your service</StyledH3>
          <StyledIconWrapper>
            <IoLogoFacebook />
            <BsTwitter />
            <BsInstagram />
            <IoLogoLinkedin />
          </StyledIconWrapper>
        </StyledFooterLeft>
        <StyledFooterRight>
          <StyledFooterRightThingysWrapper>
            <AdjustedStyledBody01>Help line Number</AdjustedStyledBody01>
            <AdjustedStyledTitle02>1800 265 24 52</AdjustedStyledTitle02>
          </StyledFooterRightThingysWrapper>

          <StyledFooterRightThingysWrapper>
            <AdjustedStyledBody01>Address</AdjustedStyledBody01>
            <AdjustedStyledTitle02>
              NH 234 Public Square San Francisco 65368
            </AdjustedStyledTitle02>
          </StyledFooterRightThingysWrapper>
          <StyledFooterRightThingysWrapper>
            <AdjustedStyledBody01>We are open</AdjustedStyledBody01>
            <AdjustedStyledTitle02>
              Monday to Friday 9:00 AM to 10:00 AM
            </AdjustedStyledTitle02>
          </StyledFooterRightThingysWrapper>
        </StyledFooterRight>
      </StyledFooterTop>
      <StyledFooterBottom>
        <StyledLogo>&#123;finsweet</StyledLogo>
        <StyledFooterNav>
          <StyledLinkWrapper>
            <StyledLink to='/' style={{ color: 'var(--white-color)' }}>
              Home
            </StyledLink>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <StyledLink to='/about' style={{ color: 'var(--white-color)' }}>
              About us
            </StyledLink>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <StyledLink to='/services' style={{ color: 'var(--white-color)' }}>
              Services
            </StyledLink>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <StyledLink to='/blog' style={{ color: 'var(--white-color)' }}>
              Blog
            </StyledLink>
          </StyledLinkWrapper>
          <StyledLinkWrapper>
            <StyledLink to='/contacts' style={{ color: 'var(--white-color)' }}>
              Contact us
            </StyledLink>
          </StyledLinkWrapper>
        </StyledFooterNav>
        <StyledBody02 style={{ color: 'var(--grey-color)' }}>
          @ Copyright Finsweet 2021
        </StyledBody02>
      </StyledFooterBottom>
    </StyledFooter>
  );
};

export default Footer;
