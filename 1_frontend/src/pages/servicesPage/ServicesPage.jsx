import React from 'react';
import ButtonPrimary from '../../components/common/buttons/ButtonPrimary';
import { StyledBody01 } from '../../global.css';
import {
  StyledServicePageHeader,
  StyledServicePageMain,
} from './ServicesPage.style';

const ServicesPage = () => {
  return (
    <>
      <StyledServicePageHeader>
        <img
          src='https://static.wikia.nocookie.net/dragonball/images/1/1b/DBZ_EyeCatcher_2.png'
          alt='fixing car'
        />
        <div>
          <h1>Our services</h1>
          <StyledBody01>
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw Through True Rich Attended does
          </StyledBody01>
          <ButtonPrimary text='Book a service' />
        </div>
      </StyledServicePageHeader>
      <StyledServicePageMain></StyledServicePageMain>
    </>
  );
};

export default ServicesPage;
