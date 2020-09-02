import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.palette.primary.main};
  padding: 30px 20px 10px 20px;
`;

export const CopyRights = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: ${props => props.theme.sizes.footer.copyright.font};
`;

export const CategoryPart = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.sizes.footer.categoryPart.icon.big};

  span, a {
    lin-height: 1;
    font-size: ${props => props.theme.sizes.footer.categoryPart.link.big};
    margin-left: 10px;
    color: ${props => props.theme.palette.font.secondary.main};
    text-decoration: none;
  }

  a:hover {
    color: gold;
  }

  @media (max-width: 800px) {
    font-size: ${props => props.theme.sizes.footer.categoryPart.icon.small};

    span, a {
      font-size: ${props => props.theme.sizes.footer.categoryPart.link.small};
    }
  }

  @media (max-width: 600px) {
    flex: 0;
    margin: 5px 0;
  }
`;