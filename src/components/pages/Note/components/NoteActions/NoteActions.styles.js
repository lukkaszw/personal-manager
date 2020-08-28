import styled from 'styled-components';

export const Root = styled.div`
  position: absolute;
  bottom: 15px;
  right: 30px;
  width: 150px;

  @media (max-width: 640px) {
    bottom: -10px;
    right: 0;
  }
`;

export const Panel = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.palette.background.lighten};
  box-shadow: 4px 4px 4px #555;
  border-radius: 5px;

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

export const HideBtn = styled.div`
  text-align: right;

  &.hide {
    opacity: .5;
  }
`;