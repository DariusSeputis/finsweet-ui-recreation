import styled from 'styled-components';

export const StyledSection1to09Wrapper = styled.div`
  background-color: ${(props) => props.bgColor};
`;

export const StyledSection1to09 = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  margin: 0 auto;
  padding-top: 10rem;

  height: 100%;
  max-width: 80rem;
`;
