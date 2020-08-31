import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  height: calc(100vh - 30px - 115px);
  padding: 10px 0;
  display: flex;
  flex-direction: column;

  @media (max-height: 600px) {
    height: calc(100vh - 30px);
  }
`;

export const Header = styled.div`
  margin: 10px 0;
`;

export const ModifyDate = styled.p`
  font-size: 12px;
  text-align: right;
  margin-bottom: 8px;
`;

export const Content = styled.div`
  flex: 1;
  padding-bottom: 60px;
  overflow-y: auto;
`;