import React from 'react';
import { Root, TasksWrapper, TaskMarker } from './Day.styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Day = ({ day, tasks, unactive, onClick, isSelected, disabled }) => {
  return ( 
    <Root
      unactive={unactive}
      className={clsx([isSelected && 'active'])}
      onClick={onClick}
      disabled={disabled}
    >
      {day}
      {tasks.length > 0 &&
        <TasksWrapper>
          {
            tasks.map(task => (
              <TaskMarker 
                key={task._id}
                status={task.status}
              />
            ))
          }
        </TasksWrapper>
      }
   
    </Root>
  );
}

Day.propTypes = {
  day: PropTypes.number.isRequired,
  tasks: PropTypes.array.isRequired,
  month: PropTypes.number.isRequired,
  isUnactive: PropTypes.bool,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  disabled: PropTypes.bool,
}
 
export default Day;