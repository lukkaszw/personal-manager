import styled from 'styled-components';

export const Root = styled.div`
  min-height: ${props => props.theme.sizes.pageHeight.big}; 
  padding: ${props => props.theme.margins.normal} 0;
  display: ${props => props.centeredContent ? 'flex' : 'block'};
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    min-height: ${props => props.theme.sizes.pageHeight.small};
  }

  @media (max-height: 500px) {
    min-height: ${props => props.theme.sizes.pageHeight.smallHorizontal};
  }
`;