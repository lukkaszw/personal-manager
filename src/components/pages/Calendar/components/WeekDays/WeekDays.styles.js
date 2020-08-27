import styled from 'styled-components';

export const Root = styled.ul`
  list-style: none;
  display: flex;

  li {
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.palette.font.primary.lighten};
    text-align: center;
    flex: 1;

    &:not(:last-child) {
      border-right: 1px solid ${props => props.theme.palette.font.primary.lighten};
    }

    @media (max-width: 380px) {
      font-size: 14px;
    }
  }
`;