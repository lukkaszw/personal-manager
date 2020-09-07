import styled, { css } from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.palette.primary.main};
  padding: 30px 20px 10px 20px;

  @media (max-width: 400px) {
    padding: 30px 0 10px 0;
  }
`;

export const CopyRights = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: ${props => props.theme.sizes.footer.copyright.font};
`;

const CategoryPartStyles = css`
  flex: 1;
  text-align: center;
  line-height: 1;
  display: flex;
  align-items: center;
  color: ${props => props.theme.palette.font.secondary.main};
  justify-content: center;
  text-decoration: none;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const CategoryPart = styled.div`
  ${CategoryPartStyles}
`;

export const CategoryLink = styled.a`
  ${CategoryPartStyles}
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.palette.special.linkHover};
  }
`;

export const ItemIcon = styled.span`
  font-size: ${props => props.theme.sizes.footer.categoryPart.icon.big};
  margin-right: 10px;

  @media (max-width: 640px) {
    font-size: ${props => props.theme.sizes.footer.categoryPart.icon.small};
    margin-right: 0;
    margin-bottom: 5px;
  }
`;

export const ItemName = styled.span`
  lin-height: 1;
  font-size: ${props => props.theme.sizes.footer.categoryPart.link.big};
  text-decoration: none;

  @media (max-width: 640px) {
    font-size: ${props => props.theme.sizes.footer.categoryPart.link.small};
  }
`;