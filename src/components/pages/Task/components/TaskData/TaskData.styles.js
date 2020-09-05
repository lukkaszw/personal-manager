import styled from 'styled-components';
import { Colors } from '../../Task.styles';

export const Root = styled(Colors)``;

export const StartDate = styled.p`
  font-size: 12px;
  text-align: right;
  margin-bottom: 10px;
`;

export const EndTime = styled.div`
 font-size: 16px;

 .time {
   margin-right: 26px;
 }
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