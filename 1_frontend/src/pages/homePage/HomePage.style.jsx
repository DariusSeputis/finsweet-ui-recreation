import styled from 'styled-components';

export const StyledHomePageHeader = styled.header``;

export const StyledHomePageHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10rem 5rem 12rem 0;

  gap: 3rem;
`;

export const StyledHomePageHeaderLeftWeAreOpenBlock = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledHomePageHeaderLeftWeAreOpenBlockTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 1rem;
`;

export const StyledHomePageHeaderRight = styled.div`
  background: url('https://static.wikia.nocookie.net/dragonball/images/a/ac/SOTDB1.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  background-position-x: -10rem;

  position: relative;

  width: 605px;
  height: 632px;
`;

// item on home header image service
export const StyledServiceItem = styled.div`
  background-color: var(--white-color);
  border: 12px solid rgba(225, 225, 225, 0.43);
  box-shadow: 0px 28px 118px rgba(109, 108, 115, 0.12);
  border-radius: 59px;

  background-clip: padding-box;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 1rem 3rem 1rem 1rem;

  position: absolute;
  left: -2.5rem;
  top: 4rem;

  width: fit-content;
`;

export const Styled24hrWrapper = styled.div`
  background-color: var(--green-color);

  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  margin-right: 1rem;

  height: 70px;
  width: 70px;
`;

// item on home header image ratings
export const StyledRatingItem = styled.div`
  background-color: var(--white-color);
  border: 12px solid rgba(225, 225, 225, 0.43);
  box-shadow: 0px 28px 118px rgba(109, 108, 115, 0.12);
  border-radius: 59px;

  background-clip: padding-box;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 1rem 3rem 1rem 1rem;

  position: absolute;
  right: -2.5rem;
  bottom: 4rem;

  width: fit-content;
`;
export const StyledRatingItemNumberTextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledRatingItemStarsWrap = styled.div`
  color: #ffb648;
  font-size: 2em;
`;

export const StyledHomePageMain = styled.main``;
