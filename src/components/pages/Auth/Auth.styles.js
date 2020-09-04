import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  input: {
    width: '250px',
  }
}));

export const Root = styled.div`
  text-align: center;
`;

export const InputWrapper = styled.div`
  height: 62px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const DividedLine = styled.div`
  height: 30px;
`;

export const Info = styled.p`
  text-align: center;
  margin: 10px 0;
  font-size: 10px;
  font-style: cursive;
`;