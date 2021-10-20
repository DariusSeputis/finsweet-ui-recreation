import React from 'react';
import { FaRegClock } from 'react-icons/fa';
import { BsStarHalf, BsStarFill } from 'react-icons/bs';
import ButtonPrimary from '../../components/common/buttons/ButtonPrimary';
import Section1to09 from '../../components/common/section1to09/Section1to09';
import {
  StyledBody01,
  StyledBody02,
  StyledCaption,
  StyledTitle02,
} from '../../global.css';
import {
  Styled24hrWrapper,
  StyledHomePageHeader,
  StyledHomePageHeaderLeft,
  StyledHomePageHeaderLeftWeAreOpenBlock,
  StyledHomePageHeaderLeftWeAreOpenBlockTextWrapper,
  StyledHomePageHeaderRight,
  StyledHomePageMain,
  StyledRatingItem,
  StyledRatingItemNumberTextWrap,
  StyledRatingItemStarsWrap,
  StyledServiceItem,
} from './HomePage.style';

const HomePage = () => {
  return (
    <>
      <StyledHomePageHeader>
        <Section1to09>
          <StyledHomePageHeaderLeft>
            <h1>Get your vehicle service done online at one place</h1>
            <ButtonPrimary text='Book a service' />
            <StyledHomePageHeaderLeftWeAreOpenBlock>
              <FaRegClock
                style={{ color: 'var(--steelgrey-color)', fontSize: '2em' }}
              />
              <StyledHomePageHeaderLeftWeAreOpenBlockTextWrapper>
                <StyledCaption style={{ color: 'var(--grey-color)' }}>
                  We are open
                </StyledCaption>
                <StyledBody01>
                  Monday to Friday 9:00 AM to 10:00 AM
                </StyledBody01>
              </StyledHomePageHeaderLeftWeAreOpenBlockTextWrapper>
            </StyledHomePageHeaderLeftWeAreOpenBlock>
          </StyledHomePageHeaderLeft>
          <StyledHomePageHeaderRight>
            <StyledServiceItem>
              <Styled24hrWrapper>
                <StyledTitle02 style={{ color: 'var(--white-color)' }}>
                  24
                </StyledTitle02>
                <StyledBody02 style={{ color: 'var(--white-color)' }}>
                  hr
                </StyledBody02>
              </Styled24hrWrapper>
              <StyledTitle02>Quick service</StyledTitle02>
            </StyledServiceItem>
            <StyledRatingItem>
              <StyledRatingItemNumberTextWrap>
                <StyledTitle02>4.5/5</StyledTitle02>
                <StyledCaption style={{ color: 'var(--grey-color)' }}>
                  Rating
                </StyledCaption>
              </StyledRatingItemNumberTextWrap>
              <StyledRatingItemStarsWrap>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </StyledRatingItemStarsWrap>
            </StyledRatingItem>
          </StyledHomePageHeaderRight>
        </Section1to09>
      </StyledHomePageHeader>
      <StyledHomePageMain>home page</StyledHomePageMain>
    </>
  );
};

export default HomePage;
