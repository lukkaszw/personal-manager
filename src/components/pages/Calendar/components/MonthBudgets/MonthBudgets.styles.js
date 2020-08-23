import styled from 'styled-components';

export const Root = styled.div`
  margin: 10px;
`;

export const BudgetLink = styled.div`
  margin: 10px 0;
  font-size: 16px;
  font-weight: bold;

  a {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: #555;
    padding: 5px;
    border-bottom: 1px solid #0F5298;
    transition: .2s;

    &:hover {
      border-radius: 5px;
      background-color: #0F5298;
      color: #fff;
    }
  }
`;

export const Description = styled.p`
  font-size: 14px;
`;

export const BtnWrapper = styled.div`
  text-align: right;
`;