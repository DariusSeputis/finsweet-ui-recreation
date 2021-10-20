import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 80rem;
  height: 90px;
`;

export const StyledLogo = styled.span`
  font-size: 1.7em;
  font-weight: 800;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const StyledLinkWrapper = styled.div`
  display: flex;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 175%;

  margin-left: 2rem;

  /* identical to box height, or 31px */

  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  color: var(--black-color);

  place-self: center;

  text-decoration: none;
`;

export const StyledSeparator = styled.div`
  /* opacity: 0.36; */

  margin: 0 0.7rem 0 0.5rem;

  /* Grey */
  border: 1px solid var(--steelgrey-color);
  transform: rotate(90deg);
  height: 0;
  width: 42px;
`;

export const StyledRoadAssistIconWrapper = styled.div`
  background-color: var(--green-color);

  display: grid;

  border-radius: 50%;

  height: 40px;
  width: 40px;
`;
export const StyledRoadAssistWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const StyledRoadAssistCaptionPhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
