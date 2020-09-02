import styled from 'styled-components';

const ListContainer = styled.div`
  min-height: 54vh;
  overflow-x: auto;

  @media (max-width: 640px) {
    min-height: 75vh;
  }
`;

export default ListContainer;