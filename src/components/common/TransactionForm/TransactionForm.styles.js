import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  costInput: {
    width: '120px',
  },
});

export const Root = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
`;

export const FieldContainer = styled.div`
  min-height: 72px;
`;

export const CostContainer = styled(FieldContainer)`
  margin-top: 24px;
  text-align: right;
`;

export const CategoryLabel = styled.span`
  font-size: 12px;
`;