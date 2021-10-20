import styled from 'styled-components';
import { StyledBody01, StyledTitle02 } from '../../global.css';

export const StyledFooter = styled.footer`
  background-color: var(--black-color);
  height: 706px;
`;

export const StyledFooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  margin: 0 auto;
  padding-top: 10rem;
  max-width: 80rem;
`;

export const StyledFooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const StyledH3 = styled.h3`
  width: 463px;
  color: var(--white-color);
`;

export const StyledIconWrapper = styled.div`
  background-color: var(--black-color);
  color: var(--white-color);

  display: flex;
  gap: 1.2rem;

  font-size: 2em;
`;

export const StyledFooterRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// Thingys = help / address / we are open
export const StyledFooterRightThingysWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

// StyledTitle02 lives in global.css.jsx just needed color change
export const AdjustedStyledTitle02 = styled(StyledTitle02)`
  color: var(--white-color);
`;
// StyledBody01 lives in global.css.jsx just needed color change
export const AdjustedStyledBody01 = styled(StyledBody01)`
  color: var(--white-color);
  opacity: 0.6;
`;

export const StyledFooterBottom = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 3fr 0.9fr;
  align-content: center;

  margin: 0 auto;

  max-width: 80rem;
`;

export const StyledLogo = styled.span`
  font-size: 1.7em;
  font-weight: 800;
  color: var(--white-color);
`;

// future Darius needs to remake nav and footer nav in to one component glad I`m not him, yet.
export const StyledFooterNav = styled.div`
  display: flex;
  color: var(--white-color);
`;
