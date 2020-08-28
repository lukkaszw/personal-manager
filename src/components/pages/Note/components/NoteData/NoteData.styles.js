import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  height: calc(100vh - 36px - 115px);
  padding: 10px 0;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin: 10px 0;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 22px;
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