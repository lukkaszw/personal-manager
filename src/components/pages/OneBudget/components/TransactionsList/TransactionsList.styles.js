import styled from 'styled-components';

export const Root = styled.div`
  flex: 3;
  
  @media (max-width: 870px) {
    margin-top: 40px;
  }
`;

export const Sum = styled.div`
  margin: 20px;
  padding: 10px 0;
  border-top: 1px solid #999;
`;

export const TableContainer = styled.div`
  max-width: 100%;
  overflow-x: auto;
`;