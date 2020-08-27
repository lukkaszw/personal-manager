import styled from 'styled-components';
import { STATUS } from 'utils/tasks.statuses';
import theme from 'App.styles';

const TASKS_MARKS_COLORS = {
  in_progress: theme.palette.icon.neutral,
  done: theme.palette.icon.positive,
  failed: theme.palette.icon.negative,
};

export const Root = styled.button`
  position: relative;
  display: block;
  text-align: center;
  padding: 12px 10px;
  width: 14%;
  background-color: ${props => props.unactive  ? 
    props.theme.palette.background.disabled : props.theme.palette.background.lighten};
  color: ${props => props.unactive  ? 
    props.theme.palette.font.primary.lighten : props.theme.palette.font.primary.main};
  border: 1px solid #999;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 6px #ddd;
  transition: all .2s;
  cursor: not-allowed;

  &:not(:disabled) {
    cursor: pointer;

    &:hover, &.active {
      background-color: ${props => props.theme.palette.primary.darker};
      color:${props => props.theme.palette.font.secondary.main};
    }
  }
`;

export const TasksWrapper = styled.div`
  position: absolute;
  top: 70%;
  left: 5%;
  width: 90%;
  padding: 2px 0;
  overflow: hidden;
  display: flex;
`;

export const TaskMarker = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 2px;
  background-color: ${props => TASKS_MARKS_COLORS[STATUS[props.status]]};
`;