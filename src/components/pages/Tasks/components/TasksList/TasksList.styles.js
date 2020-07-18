import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const useStyles = makeStyles({
  tableContainer: {
    minHeight: '70vh',
  },  
  table: {
    margin: '30px auto',
    textAlign: 'center',
  },
  cell: {
    textAlign: 'center',
  },
  statusCell: {
    minWidth: '100px',
  },
  nr: {
    width: '20px',
    padding: 0,
  },  
  titleCell: {
    minWidth: '120px',
  }, 
  title: {
    maxWidth: '150px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  bold: {
    fontWeight: 'bold',
    width: '100px',
  },
  priority_low: {
    color: 'lightgreen',
  },
  priority_normal: {
    color: 'green',
  },
  priority_high: {
    color: 'orange',
  },
  priority_v_high: {
    color: 'red',
  },
  'status_in_progress': {
    color: 'orange',
  },
  status_done: {
    color: 'green',
  },
  status_failed: {
    color: 'red',
  },
});


export const LinkTitle = styled(Link)`
  color: #000;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.mainLighten};
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;