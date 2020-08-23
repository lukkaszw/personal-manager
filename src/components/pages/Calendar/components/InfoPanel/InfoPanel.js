import React from 'react';
import PropTypes from 'prop-types';
import MonthBudgets from '../MonthBudgets';
import DayTasks from '../DayTasks';
import { Root } from './InfoPanel.styles';


const InfoPanel = ({ month, year, budgets, dayTasks, day, isAfterNow, isActiveDay }) => {
  return ( 
    <Root>
      <MonthBudgets 
        month={month}
        year={year}
        budgets={budgets}
        isAfterNow={isAfterNow}
      />
      <DayTasks 
        tasks={dayTasks}
        month={month}
        year={year}
        day={day}
        isActiveDay={isActiveDay}
      />
    </Root>
   );
}

InfoPanel.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  day: PropTypes.number,
  budgets: PropTypes.array.isRequired,
  dayTasks: PropTypes.array,
  isAfterNow: PropTypes.bool,
  isActiveDay: PropTypes.bool,
};
 
export default InfoPanel;