import styled from 'styled-components';

export const Root = styled.div`
  min-height: 50vh;
  width: 220px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 20px;
  margin-top: ${props => props.separated ? '60px' : 0};
  text-align: center;
`;