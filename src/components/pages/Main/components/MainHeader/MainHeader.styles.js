import styled from 'styled-components';

export const Root = styled.header`
  margin-bottom: ${props => props.theme.margins.normal};
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0 auto ${props => props.theme.margins.normal} auto;
  padding: 6px 0;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: ${props => props.theme.sizes.title.big};
  width: 80%;
  transform: skew(-30deg);
  background-image: ${props => props.theme.palette.special.titleBackground};
  transition: 1s;

  span {
    display: inline-block;
    color: ${props => props.theme.palette.font.secondary.main};
    transform: skew(30deg);
    text-shadow: -4px 2px 3px #555;
  }

  @media (max-width: 600px) {
    font-size: ${props => props.theme.sizes.title.small};
    padding: 5px 0;
    width: 95%;
  }
`;

export const Image = styled.img`
  height: 38vh;
  min-height: 180px;
  max-width: 80%;

  @media (max-width: 600px) {
    height: auto;
    min-height: auto;
    width: 60vw;
  }
`;