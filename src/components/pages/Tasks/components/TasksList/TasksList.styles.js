import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const useStyles = makeStyles({
  table: {
    margin: '0 auto',
    textAlign: 'center',
    maxWidth: '100%',
  },
  statuses: {
    '@media (max-width: 510px)': {
      maxWidth: '55px',
    },
  },
  cell: {
    textAlign: 'center',
    '@media (max-width: 510px)': {
      padding: '14px 8px',
    },
  },
  statusCell: {
    fontWeight: 'bold',
    padding: '5px',
  },
  nr: {
    width: '20px',
    padding: 0,
    '@media (max-width: 510px)': {
      display: 'none',
    },
  },  
  titleCell: {
    minWidth: '100px',
    '@media (max-width: 510px)': {
      textAlign: 'left',
    },
  }, 
  title: {
    maxWidth: '150px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '@media (max-width: 510px)': {
      textAlign: 'left',
      maxWidth: '100px',
    },
  },
  bold: {
    fontWeight: 'bold',
    width: '100px',
  },
  sortLabel: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    '@media (max-width: 510px)': {
      display: 'flex',
      flexDirection: 'column',
    },

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