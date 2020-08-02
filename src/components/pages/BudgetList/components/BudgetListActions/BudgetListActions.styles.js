import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

export const useStyles = makeStyles({
  icon: {
    marginRight: '10px',
  },
  input: {
    minWidth: '130px',
  },
  typeOption: {
    minWidth: '130px',
  }
});