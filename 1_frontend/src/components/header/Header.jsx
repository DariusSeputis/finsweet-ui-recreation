import React from 'react';
import { ImPhone } from 'react-icons/im';
import {
  StyledHeader,
  StyledLink,
  StyledLogo,
  StyledNav,
  StyledRoadAssistWrapper,
  StyledSeparator,
} from './Header.style';

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>&#123;finsweet</StyledLogo>
      <StyledNav>
        <StyledLink to='/'>Home</StyledLink>
        <StyledLink to='/about'>About</StyledLink>
        <StyledLink to='/services'>Services</StyledLink>
        <StyledLink to='/blog'>Blog</StyledLink>
        <StyledLink to='/contacts'>Contacts</StyledLink>
        <StyledSeparator />
        <StyledRoadAssistWrapper>
          <div>
            <ImPhone />
          </div>
          <div>
            <span>Road Assistance</span>
            <span>1800 265 24 52</span>
          </div>
        </StyledRoadAssistWrapper>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
