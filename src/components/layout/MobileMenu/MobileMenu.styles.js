import styled, { keyframes } from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

 
export const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100px) skew(0);
    opacity: 0;
  }

  80% {
    transform: translateX(30px) skew(10deg);
  }

  100% {
    transform: translateX(0) skew(20deg);
    opacity: 1;
  }
`;

export const slideInActive = keyframes`
  0% {
    transform: translateY(-800px) skew(0);
  }

  100% {
    transform: translateY(0) skew(0);
  }
`;

export const slideInFromRight = keyframes`
  0% {
    transform: translateX(100px) skew(0);
    opacity: 0;
  }

  80% {
    transform: translateX(-30px) skew(10deg);
  }

  100% {
    transform: translateX(0) skew(20deg);
    opacity: 1;
  }
`;

export const useStyles = makeStyles((theme) => ({
  closeBtn: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    color: '#fff',
  }
}));

export const Background = styled.div`
  display: none;
  position: fixed;
  top: -110px;
  left: -110px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(
    ${props => props.theme.colors.main},
    ${props => props.theme.colors.main},
    ${props => props.theme.colors.mainLighten});
  transform: scale(1);
  z-index: 2000;
  transition: .5s;

  &.active { 
    transform: scale(25);
  }

  @media (max-width: 640px) {
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2001;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    &.active {
      display: flex;
    }
  }
`;

export const MenuList = styled.ul`
  list-style: none;

  .mobileMenuItem {
    margin: 16px 0;

    &:nth-child(2n) {
      .mobileMenuLink {
        animation: ${slideInFromLeft} 1s;
      }
    }

    &:nth-child(2n - 1) {
      .mobileMenuLink {
        animation: ${slideInFromRight} 1s;
      }
    }

    .mobileMenuLink.active {
      animation: ${slideInActive} .5s both;
    }
  }

  .mobileMenuLink {
    display: block;
    width: 180px;
    height: 28px;
    background-color: #fff;
    color: ${props => props.theme.colors.main};
    font-size: 18px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    line-height: 28px;
    transform: skew(20deg);
    transition: .3s;
    box-shadow: -2px 2px 10px black;
    

    .text {
      display: inline-block;
      transform: skew(-20deg);
      transition: .3s;
    }

    &.active {
      transform: skew(0);
      background-color: ${props => props.theme.colors.mainLighten};
      color: #fff;
      box-shadow:  0 0 10px black;

      .text {
        transform: skew(0);
      }
    }
  }

`;