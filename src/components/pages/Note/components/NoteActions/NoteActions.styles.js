import styled from 'styled-components';

export const Root = styled.div`
  position: fixed;
  bottom: 220px;
  right: 50%;
  transform: translateX(50%);
  width: 200px;

  @media (max-width: 1280px) {
    width: 150px;
    transform: translateX(0);
    right: 10px;
  }

  @media (max-width: 640px) {
    bottom: 110px;
  }

  @media (max-height: 500px) {
    bottom: 30px;
  }
`;

export const Panel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 50px;
  background-color: ${props => props.theme.palette.background.lighten};
  box-shadow: 4px 4px 10px black;
  border-radius: 10px;

  &.hide {
    visibility: hidden;
  }
  
  .neutral {
    color: ${props => props.theme.palette.primary.main};
  }

  .negative {
    color: ${props => props.theme.palette.secondary.main};
  }
`;

export const HideBtnWrapper = styled.div`
  text-align: center;

  @media (max-width: 1280px) {
    text-align: right;
  }
`;