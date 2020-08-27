import styled from 'styled-components';

export const Root = styled.div`
  padding-left: 20px;
  height: 26px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.palette.secondary.main};
`;

export const ButtonsWrapper = styled.div`
  width: 110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;