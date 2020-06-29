import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    
  },
  toolbar: {
    padding: '0 10px',
    minHeight: '30px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    padding: '0 10px',
    display: 'none',
    '@media (max-width: 640px)': {
      display: 'block',
    }
  },
}));

export default useStyles;