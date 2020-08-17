import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  select: {
    width: '130px',
  },
});


export const Root = styled.div`
  min-height: calc(100vh - 36px - 112px);
  padding: 18px 0;
`;

export const FieldContent = styled.div`
  min-height: 70px;
  margin: 20px 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 30px;
  text-align: right;

  & > * {
    margin-right: 10px;
  }
`;