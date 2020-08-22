import React from 'react';
import { Root } from './Month.styles';
import PropTypes from 'prop-types';
import Day from '../Day';
import { Days } from './Month.styles';
import WeekDays from '../WeekDays';

const Month = ({ days, month }) => {
  return ( 
    <Root>
      <WeekDays />
      <Days>
        {
          days.map(day => (
            <Day 
              key={`${day.day}.${day.month}`}
              unactive={month !== day.month}
              {...day}
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
};
 
export default Month;