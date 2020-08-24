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
  limegreen: {
    color: 'limegreen',
  },
  seagreen: {
    color: 'seagreen',
  },
  goldenrod: {
    color: 'goldenrod',
  },
});

export const IconWrapper = styled.span`
  color: ${props => props.color};
`;

export const LinkTitle = styled(Link)`
  color: #000;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.colors.mainLighten};
  }
`;