import styled from 'styled-components';

export const Div = styled.div`
  position: relative;
  text-align: center;
`;

export const Button = styled.button`
  font-size: ${props => props.theme.sizes.footer.iconButton.big};
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.theme.palette.font.secondary.darker};
  transition: .2s;

  .title {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(.5);
    font-size: ${props => props.theme.sizes.footer.iconButton.title.big};
    opacity: 0;
    transition: .3s;
  }

  &:hover, &.active {
    color: ${props => props.theme.palette.font.secondary.main};

    .title {
      transform: translate(-50%, -210%) scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 800px) {
    font-size: ${props => props.theme.sizes.footer.iconButton.small};

    .title {
      font-size:  ${props => props.theme.sizes.footer.iconButton.title.small};
    }
  }
`;