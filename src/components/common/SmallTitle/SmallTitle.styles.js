import styled from 'styled-components';

const margins = {
  none: '0',
  small: '12px',
  normal: '24px',
  big: '36px',
  smallBottom: '0 0 12px',
  normalBottom: '0 0 24px',
};

export const Root = styled.div`
  margin: ${props => margins[props.margin]} 0;
  text-align: ${props => props.textAlign};
`;

export const Title = styled.h3`
  display: inline-block;
  font-size: ${props => props.theme.sizes.smallTitle.font};
  font-family: 'Courgette',cursive;
  color: ${props => props.theme.palette.font.tertiary.main};
`;