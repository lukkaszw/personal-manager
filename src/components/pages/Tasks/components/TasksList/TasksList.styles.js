import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const useStyles = makeStyles({
  table: {
    margin: '0 auto',
    textAlign: 'center',
    maxWidth: '100%',
  },
  cell: {
    textAlign: 'center',
  },
  statusCell: {
    fontWeight: 'bold',
    padding: '5px',
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
});

export const LinkTitle = styled(Link)`
  color: #000;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.palette.primary.main};
  }
`;