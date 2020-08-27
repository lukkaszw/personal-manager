import styled from 'styled-components';

export const Root = styled.button`
  display: flex;
  width: 100%;
  border: none;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
  background-color: ${props => props.theme.palette.background.lighten};
  border-radius: 0;
  transition: all .2s;

  &.title {
    background-color: ${props => props.theme.palette.primary.darker};
    color: ${props => props.theme.palette.font.secondary.main};
    font-weight: bold;
  }

  &.main {
    background-color: ${props => props.theme.palette.primary.main};
    color: ${props => props.theme.palette.font.secondary.main};
  }

  &:hover, &.active, &:focus {
    outline: none;
    background-color: ${props => props.theme.palette.primary.darkest};
    color: ${props => props.theme.palette.font.secondary.main};
  }
`;


export const CatName = styled.span`
  margin-right: 10px; 
`;

export const CatValue = styled.span`
  font-weight: bold;
`;