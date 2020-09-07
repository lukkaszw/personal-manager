import styled from 'styled-components';

export const Root = styled.div`
  flex: 3;
  
  @media (max-width: 870px) {
    margin-top: 20px;
  }
`;

export const CategoryName = styled.div`
  display: none;
  text-align: center;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;

  @media (max-width: 870px) {
    display: block;
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