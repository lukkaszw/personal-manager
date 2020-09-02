import styled from 'styled-components';

export const Root = styled.div`
  min-height: ${props => props.theme.sizes.pageHeight.big};
  padding: ${props => props.theme.margins.normal};

  @media (max-width: 640px) {
    min-height: ${props => props.theme.sizes.pageHeight.small};
  }
`;