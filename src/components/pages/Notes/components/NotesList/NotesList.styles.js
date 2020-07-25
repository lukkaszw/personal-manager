import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';


export const useStyles = makeStyles({
  cart: {
    display: 'flex',
    margin: '20px',
    width: '200px',
    height: '206px',
    justifyContent: 'space-between',
    flexDirection: 'column',
    position: 'relative',
  },
  cartsActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  high: {
    backgroundColor: '#222',
    color: '#fff',
  },
});

export const CartsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 640px;
  justify-content: center;
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
  height: 100px;
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
  background-color: red;
  transform: rotate(45deg);
`;