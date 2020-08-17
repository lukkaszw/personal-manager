import styled from 'styled-components';

export const Root = styled.div`
  margin: 20px 0;
`;

export const TransactionsWrapper = styled.div`
  display: flex;

  @media (max-width: 870px) {
    flex-direction: column;
  }
`;