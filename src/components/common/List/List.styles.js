import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: ${props => props.inline ? 'inline-block' : 'block'};
`;

export default List;