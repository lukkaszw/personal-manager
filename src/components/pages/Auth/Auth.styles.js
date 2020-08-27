import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  input: {
    width: '250px',
  }
}));

export const Root = styled.div`
  height: 73vh;
  padding: 20px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InputWrapper = styled.div`
  height: 62px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;


