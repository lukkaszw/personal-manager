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