import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
  transition: .3s;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${props => props.theme.palette.font.secondary.main};

  &.active {
    height: ${props => props.theme.sizes.footer.footerContent.big};
  }

  @media (max-width: 640px) {
    justify-content: space-between;

    &.active {
      height: ${props => props.theme.sizes.footer.footerContent.small};
    }
  }
`;