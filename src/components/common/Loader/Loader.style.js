import styled from 'styled-components';
import theme from 'App.styles';

const squareSize = {
  big: '80px',
  normal: '60px',
  small: '40px',
};

const dotSize = {
  big: '6px',
  normal: '5px',
  small: '4px',
}

const colors = {
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
}

export const LoaderRoot = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => squareSize[props.size]};
  height: ${props => squareSize[props.size]};

  div {
    position: absolute;
    width: ${props => dotSize[props.size]};
    height: ${props => dotSize[props.size]};
    background: ${props => colors[props.color]};
    border-radius: 50%;
    animation: lds-default 1.2s linear infinite;
  }

  div:nth-child(1) {
    animation-delay: 0s;
    top: 46.25%;
    left: 82.5%;
  }

  div:nth-child(2) {
    animation-delay: -0.1s;
    top: 27.5%;
    left: 77.5%;
  }

  div:nth-child(3) {
    animation-delay: -0.2s;
    top: 13.75%;
    left: 65%;
  }

  div:nth-child(4) {
    animation-delay: -0.3s;
    top: 8.75%;
    left: 46.25%;
  }

  div:nth-child(5) {
    animation-delay: -0.4s;
    top: 13.75%;
    left: 27.5%;
  }

  div:nth-child(6) {
    animation-delay: -0.5s;
    top: 27.5%;
    left: 13.75%;
  }

  div:nth-child(7) {
    animation-delay: -0.6s;
    top: 46.25%;
    left: 8.75%;
  }

  div:nth-child(8) {
    animation-delay: -0.7s;
    top: 65%;
    left: 13.75%;
  }

  div:nth-child(9) {
    animation-delay: -0.8s;
    top: 77.75%;
    left: 27.5%;
  }

  div:nth-child(10) {
    animation-delay: -0.9s;
    top: 82.5%;
    left: 46.25%;
  }

  div:nth-child(11) {
    animation-delay: -1s;
    top: 77.5%;
    left: 65%;
  }

  div:nth-child(12) {
    animation-delay: -1.1s;
    top: 65%;
    left: 77.5%;
  }

  @keyframes lds-default {
    0%, 20%, 80%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
      background: transparent;
    }
  }
`;