import styled from 'styled-components';

export const Content = styled.main`
  flex: 1;
  background-color: ${props => props.theme.palette.background.main};
`;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;