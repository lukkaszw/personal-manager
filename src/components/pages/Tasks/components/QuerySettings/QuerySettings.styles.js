import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  control: {
    margin: '10px',
  }
});

export const Form = styled.form`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;