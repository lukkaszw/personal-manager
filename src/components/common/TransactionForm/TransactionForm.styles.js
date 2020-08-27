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
  max-height: 98vh;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  width: 280px;
  background-color: ${props => props.theme.palette.background.main};
  border-radius: 5px;
  overflow-y: auto;

  @media (max-height: 430px) {
    padding: 5px 20px;
  }
`;

export const FieldContainer = styled.div`
  min-height: 69px;
`;

export const CostContainer = styled.div`
  min-height: 60px;
  margin: 24px 0;
  text-align: right;

  @media (max-height: 430px) {
    min-height: 50px;
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export const CategoryLabel = styled.span`
  font-size: 12px;
`;