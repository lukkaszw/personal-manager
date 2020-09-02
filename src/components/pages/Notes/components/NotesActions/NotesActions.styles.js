import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  btnGroup: {
    display: 'block',
    textAlign: 'center',
  },
  btn: {
    display: 'inline-block',
    width: '90px',
  },
  icon: {
    marginRight: '5px',
  },
  catSelect: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '20px',
    width: '150px',
  },
  input: {
    padding: 0,
  }
});

export const Actions = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 840px) {
    margin-top: 0;
  }
`;

export const ActionsPart = styled.div`
  margin: 10px 0;
`;

export const Categories = styled.div`
  display: flex;
  flex: 1;
  min-width: 260px;
  justify-content: flex-end;
  align-items: center;
`;

export const Label = styled.label`
  display: inline;
`;