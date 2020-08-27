import styled from 'styled-components';

export const Root = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color:  ${props => props.theme.palette.background.main};
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
  color: ${props => props.theme.palette.font.primary.main};
  font-size: 14px;
  border: 1px solid  ${props => props.theme.palette.primary.darker};
  border-radius: 5px;
  transition: .2s;

  &:hover, &.active, &:focus {
    background-color:  ${props => props.theme.palette.primary.darker};
    color:  ${props => props.theme.palette.font.secondary.main};
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;