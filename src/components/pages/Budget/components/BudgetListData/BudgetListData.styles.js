import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: '0 10px',
    borderBottom: '1px solid #555',
    transition: '.3s',

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.font.secondary.main,
      borderRadius: '0 0 50px 5px',

      '& p': {
        color: theme.palette.font.secondary.darker,
      },
    }
  },
}));