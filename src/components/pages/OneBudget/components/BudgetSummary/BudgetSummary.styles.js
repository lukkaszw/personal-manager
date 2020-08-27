import styled from 'styled-components';

export const Root = styled.div`
  margin: 20px 0;
  border-top: 1px solid #999;
  text-align: right;
  font-size: 15px;
`;

export const Item = styled.div`
  padding: 8px 10px;
`;

export const ItemName = styled.span`
  padding-right: 5px;
`;

export const ItemValue = styled.span`
  font-weight: bold;
  color: ${props => props.warning ? props.theme.palette.secondary.main : props.theme.palette.tertiary.main}
`;