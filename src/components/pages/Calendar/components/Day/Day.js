import React from 'react';
import { Root, TasksWrapper, TaskMarker } from './Day.styles';
import PropTypes from 'prop-types';

const Day = ({ day, weekDay, tasks, month, unactive }) => {
  return ( 
    <Root
      unactive={unactive}
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
  weekDay: PropTypes.number.isRequired,
  tasks: PropTypes.array.isRequired,
  month: PropTypes.number.isRequired,
  isUnactive: PropTypes.bool,
}
 
export default Day;