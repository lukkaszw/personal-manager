import styled from 'styled-components';

export const Root = styled.div`
  padding: 30px 0;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StartDate = styled.p`
  font-size: 12px;
  text-align: right;
  margin-bottom: 10px;
`;

export const Header = styled.div`
  margin: 20px 0;
`;

export const EndTime = styled.div`
 font-size: 16px;

 .time {
   margin-right: 26px;
 }
`;

export const Title = styled.h2`
  font-size: 24px;
`;

export const Description = styled.p`
  font-size: 16px;
  text-align: justify;
  line-height: 1.7;
`;

export const StatusContent = styled.div`
  margin: 20px 0;

  & > * {
    margin: 10px 0;
  }
`;

export const StatusName = styled.span`
  display: inline-block;
  width: 90px;
`;