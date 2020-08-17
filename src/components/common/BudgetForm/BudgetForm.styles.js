import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  select: {
    minWidth: '130px',
  },
  catInput: {
    width: '120px',
  },
  totalAmountInput: {
    width: '150px',
  }
});

export const Root = styled.div`
  max-width: 300px;
  margin: 30px auto;
`;

export const FieldContent = styled.div`
  min-height: 70px;
  margin-bottom: 10px;
`;

export const CategoryField = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 20px 0;
`;

export const CategoryLabel = styled.label`
  width: 120px;
`;

export const ErrorsWrapper = styled.div`
  color: red;
  text-align: right;
  font-size: 12px;
  height: 40px;
`;

export const ImportantText = styled.span`
  font-weight: bold;
  display: inline-block;
  min-width: 150px;
  padding-right: 10px;
`;