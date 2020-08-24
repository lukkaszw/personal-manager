import styled from 'styled-components';

export const Root = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: #fff;
`;

export const BtnClose = styled.div`
  position: absolute;
  top: 5px;
  right: 7px;
`;

export const YearSwitcher = styled.h3`
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;

export const Year = styled.span`
  width: 80px;
  text-align: center;
`;

export const MonthPicker = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const MonthBtn = styled.button`
  width: 30%;
  padding: 6px 0;
  margin-bottom: 16px;
  cursor: pointer;
  background-color: transparent;
  color: #183153;
  font-size: 14px;
  border: 1px solid #183153;
  border-radius: 5px;
  transition: .2s;

  &:hover, &.active {
    background-color: #183153;
    color: #fff;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;