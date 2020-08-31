import styled from 'styled-components';

const margins = {
  small: '16px',
  normal: '24px',
  big: '36px',
};

export const Root = styled.div`
  margin: ${props => margins[props.margin]} 0;
  text-align: ${props => props.textAlign};
`;

export const Title = styled.h3`
  display: inline-block;
  font-size: 22px;
  font-family: 'Courgette',cursive;
  color: ${props => props.theme.palette.font.tertiary.main};
`;