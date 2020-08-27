import styled from 'styled-components';

export const Root = styled.div`
  flex: 1;
`;

export const SubCatList = styled.div`
  height: 0;
  overflow: hidden;

  &.active {
    height: auto;
  }
`;

export const CategoryExpenses = styled.div`
  background-color: ${props => props.theme.palette.background.lighten};
  padding: 8px 10px;
  font-size: 14px;
  color: ${props => props.warning ? props.theme.palette.secondary.main : props.theme.palette.tertiary.main};
`;