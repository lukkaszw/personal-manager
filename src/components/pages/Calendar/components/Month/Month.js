import React from 'react';
import { Root } from './Month.styles';
import PropTypes from 'prop-types';
import Day from '../Day';
import { Days } from './Month.styles';
import WeekDays from '../WeekDays';

const Month = ({ days, month, onSelectDay, selectedDay }) => {

  return ( 
    <Root>
      <WeekDays />
      <Days>
        {
          days.map((day, index) => (
            <Day 
              key={`${day.day}.${day.month}`}
              unactive={month !== day.month}
              isSelected={index === selectedDay}
              disabled={month !== day.month}
              {...day}
              onClick={() => onSelectDay(index)}
            />
          ))
        }
      </Days>
    </Root>
  );
}

Month.propTypes = {
  month: PropTypes.number.isRequired,
  days: PropTypes.array.isRequired,
  onSelectDay: PropTypes.func.isRequired,
  selectedDay: PropTypes.number,
};
 
export default Month;