import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  height: calc(100vh - 36px);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin: 20px 0;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
`;

export const ModifyDate = styled.p`
  font-size: 12px;
  text-align: right;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  flex: 1;
  padding-bottom: 60px;
  overflow-y: auto;
`;