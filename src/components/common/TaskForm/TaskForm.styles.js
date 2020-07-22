import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  select: {
    width: '130px',
  }
});

export const Root = styled.div`
  max-width: 600px;
  margin: 80px auto;

  @media (max-height: 800px) {
    margin: 20px auto;
  }
`;

export const FieldContent = styled.div`
  min-height: 70px;
  margin: 20px 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: right;
`;