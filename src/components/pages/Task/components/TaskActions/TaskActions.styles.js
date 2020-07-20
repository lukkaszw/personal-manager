import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Root = styled.div`
  width: 40%;
  min-width: 250px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;

  .positive {
    color: ${props => props.theme.colors.green};
  }

  .neutral {
    color: ${props => props.theme.colors.main};
  }

  .negative {
    color: red;
  }

  .positive.disabled, .neutral.disabled, .negative.disabled {
    color: #555;
  }
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
  },
});

