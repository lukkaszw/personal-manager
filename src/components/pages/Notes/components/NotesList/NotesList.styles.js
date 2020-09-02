import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';


export const useStyles = makeStyles((theme) => ({
  cart: {
    display: 'flex',
    margin: '16px',
    width: '200px',
    height: '212px',
    justifyContent: 'space-between',
    flexDirection: 'column',
    position: 'relative',
  },
  cartsActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  high: {
    backgroundColor: theme.palette.background.dark,
    color:  theme.palette.font.secondary.main,
  },
}));

export const CartsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  min-height: 486px;
  justify-content: center;

  @media (max-width: 640px) {
    min-height: 260px;
  }
`;

export const ModifyAt = styled.p`
  font-size: 10px;
`;

export const Title = styled.h4`
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  overflow: hidden;
  font-size: 14px;
  text-overflow: -o-ellipsis-lastline;
  height: 85px;
`;

export const ImportantSign = styled.div`
  position: absolute;
  top: 7%;
  left: 39%;
  width: 100%;
  height: 16px;
  line-height: 16px;
  font-size: 9px;
  text-align: center;
  background-color:  ${props => props.theme.palette.secondary.main};
  transform: rotate(45deg);
`;