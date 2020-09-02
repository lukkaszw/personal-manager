import styled from 'styled-components';

const ActionsPanel = styled.div`
  height: 48px;
  display: flex;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-between'};
  align-items: center;
  margin-bottom: ${props => props.theme.margins.normal};
`;

export default ActionsPanel;