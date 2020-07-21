import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const Root = styled.div`
  .positive {
    color: ${props => props.theme.colors.green};
  }

  .neutral {
    color: ${props => props.theme.colors.main};
  }

  .negative {
    color: red;
  }

  .neutral.disabled {
    color: #555;
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

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 0 10px;
  }
`;

export const useStyles = makeStyles({
  iconButton: {
    '&:disabled .positive': {
      color: '#555',
    },

    '&:disabled .negative': {
      color: '#555',
    },
  },
});
