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
    height: 100px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;

    &.active {
      height: 130px;
    }
  }
`;