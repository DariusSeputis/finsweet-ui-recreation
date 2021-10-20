import React from 'react';
import { ImPhone } from 'react-icons/im';
import { StyledBody01, StyledCaption } from '../../global.css';
import {
  StyledLink,
  StyledLinkWrapper,
  StyledLogo,
  StyledNav,
  StyledNavbar,
  StyledRoadAssistCaptionPhoneWrapper,
  StyledRoadAssistIconWrapper,
  StyledRoadAssistWrapper,
  StyledSeparator,
} from './Navbar.style';

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledLogo>&#123;finsweet</StyledLogo>
      <StyledNav>
        <StyledLinkWrapper>
          <StyledLink to='/'>Home</StyledLink>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <StyledLink to='/about'>About us</StyledLink>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <StyledLink to='/services'>Services</StyledLink>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <StyledLink to='/blog'>Blog</StyledLink>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <StyledLink to='/contacts'>Contact</StyledLink>
        </StyledLinkWrapper>
        <StyledSeparator />
        <StyledRoadAssistWrapper>
          <StyledRoadAssistIconWrapper>
            <ImPhone
              style={{
                width: '20px',
                height: '20px',
                placeSelf: 'center',
                color: 'var(--white-color)',
              }}
            />
          </StyledRoadAssistIconWrapper>
          <StyledRoadAssistCaptionPhoneWrapper>
            <StyledCaption style={{ opacity: '.7' }}>
              Road Assistance
            </StyledCaption>
            <StyledBody01>1800 265 24 52</StyledBody01>
          </StyledRoadAssistCaptionPhoneWrapper>
        </StyledRoadAssistWrapper>
      </StyledNav>
    </StyledNavbar>
  );
};

export default Navbar;
