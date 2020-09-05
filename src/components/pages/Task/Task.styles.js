import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Colors = styled.div`
  .positive {
    color: ${props => props.theme.palette.tertiary.main};
  }

  .neutral {
    color: ${props => props.theme.palette.primary.main};
  }

  .negative {
    color: ${props => props.theme.palette.secondary.main};
  }

  .neutral.disabled {
    color: ${props => props.theme.palette.disabled.main};
  }
`;

export const useStyles = makeStyles((theme) => ({
  iconButton: {
    '&:disabled .positive': {
      color: theme.palette.disabled.main,
    },

    '&:disabled .negative': {
      color: theme.palette.disabled.main,
    },
  },
}));
