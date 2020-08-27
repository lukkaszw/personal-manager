import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const Root = styled.div`
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

export const TaskActionsRoot = styled(Root)`
  width: 40%;
  min-width: 250px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;

export const TaskDataRoot = styled(Root)`
  padding: 30px 0;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
