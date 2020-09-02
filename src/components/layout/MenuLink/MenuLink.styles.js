import styled from 'styled-components';

export const Li = styled.li`
  display: inline-block;
  height: ${props => props.theme.sizes.header.normal.height};
  font-family: 'Courgette',cursive;

  & > a {
    display: inline-block;
    padding: 0 10px;
    color: ${props => props.theme.palette.font.secondary.darker};
    font-family: inherit;
    font-weight: 500;
    font-size: ${props => props.theme.sizes.header.normal.linkFont};
    text-decoration: none;
    line-height: ${props => props.theme.sizes.header.normal.height};
    transition: .2s;
  }

  &:hover > a, & > a.active {
    background-color: ${props => props.theme.palette.primary.darker};
    color: ${props => props.theme.palette.font.secondary.main};
  }

  @media (max-width: 640px) {
    height: ${props => props.theme.sizes.header.small.height};
    
    & > a {
      font-size: ${props => props.theme.sizes.header.small.linkFont};
      line-height: ${props => props.theme.sizes.header.small.height};
    }
  }
`;

