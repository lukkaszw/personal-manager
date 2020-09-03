import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  select: {
    width: '130px',
  },
});

export const Root = styled.div`
  width: ${props => props.theme.sizes.formsWidth.task};
  max-width: 100%;
`;