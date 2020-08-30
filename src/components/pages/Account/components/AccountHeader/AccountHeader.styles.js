import styled from 'styled-components';

export const Root = styled.header`
  margin: 40px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 0 20px;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  height: 70px;
  
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h2`
  font-family: 'Courgette',cursive;
  font-size: 22px;
`;