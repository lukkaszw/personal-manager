import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  button: {
    display: 'inline-block',
    width: '200px',
  }
})


export const ButtonWrapper = styled.div`
  margin: 20px 0;
  text-align: center;
`;