import styled from 'styled-components';

export const MenuList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  color: ${props => props.theme.palette.font.secondary.main};
`;


export const MenuItem = styled.li`
  flex: 1;
`;
