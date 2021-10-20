import React from 'react';
import {
  StyledSection1to09,
  StyledSection1to09Wrapper,
} from './Section1to09.style';

const Section1to09 = ({ children, bgColor }) => {
  return (
    <StyledSection1to09Wrapper bgColor={bgColor}>
      <StyledSection1to09>{children}</StyledSection1to09>
    </StyledSection1to09Wrapper>
  );
};

export default Section1to09;
