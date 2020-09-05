import styled from 'styled-components';
import { Colors } from '../../Task.styles';

export const Root = styled(Colors)`
  position: fixed;
  bottom: 215px;
  left: 50%;
  transform: translateX(-50%);
  width: 30%;
  min-width: 250px;
  padding:  0 10px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  background-color: ${props => props.theme.palette.background.main};
  box-shadow: 4px 4px 10px black;

  @media (max-width: 640px) {
    bottom: 110px;
  }

  @media (max-height: 500px) {
    bottom: 30px;
  }

  &.hidden {
    visibility: hidden;
  }
`;

export const ShowPanelButton = styled.div`
  position: fixed;
  bottom: 260px;
  right: 50%;
  transform: translateX(50%);

  @media (max-width: 640px) {
    bottom: 150px;
    right: 10px;
    transform: translateX(0);
  }
  
  @media (max-height: 500px) {
    bottom: 70px;
    transform: translateX(0);
    right: 10px;
  }
`;