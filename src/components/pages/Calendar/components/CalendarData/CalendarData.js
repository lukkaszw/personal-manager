import React from 'react';
import LoaderIndicator from 'components/common/LoaderIndicator';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import CalendarActions from '../CalendarActions';
import API from 'store/api';

const CalendarData = ({ month, year, token, onChangeMonth }) => {

  const { data: calendar, isLoading } = useQuery(
    ['calendar', { month, year, token }], 
    API.calendar.getMonthData, 
    { cacheTime: 0 }
  );

  return ( 
    <div>
      <CalendarActions 
        disabled={isLoading}
        month={month}
        year={year}
        onChangeMonth={onChangeMonth}
      />
      <LoaderIndicator size="small" isOpen={isLoading} />
 
      {JSON.stringify(calendar)}
    </div>
   );
}

CalendarData.propTypes = ({
  token: PropTypes.string.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChangeMonth: PropTypes.func.isRequired,
});
 
export default CalendarData;