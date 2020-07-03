import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #3f51b5;
  padding: 30px 20px 10px 20px;
`;

export const CopyRights = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
`;

export const CategoryPart = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  span, a {
    lin-height: 1;
    font-size: 18px;
    margin-left: 10px;
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    color: gold;
  }

  @media (max-width: 800px) {
    font-size: 20px;

    span, a {
      font-size: 14px;
    }
  }

  @media (max-width: 600px) {
    flex: 0;
    margin: 5px 0;
  }
`;