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
  margin-top: 10px;
  width: ${props => props.theme.sizes.formsWidth.budget};
  max-width: 100%;
`;

export const CategoryField = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 6px 0;
`;

export const CategoryLabel = styled.label`
  width: 120px;
`;

export const ErrorsWrapper = styled.div`
  color: red;
  text-align: center;
  font-size: 12px;
  height: 30px;

  p {
    line-height: 14px;
  }
`;

export const ImportantText = styled.span`
  font-weight: bold;
  display: inline-block;
  min-width: 150px;
  padding-right: 10px;
`;