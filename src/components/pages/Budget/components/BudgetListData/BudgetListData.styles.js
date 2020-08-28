import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Root = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const useStyles = makeStyles({
  listItem: {
    padding: '0 10px',
    borderBottom: '1px solid #555',
  },
});