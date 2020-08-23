import React, { useMemo } from 'react';
import LoaderIndicator from 'components/common/LoaderIndicator';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import CalendarActions from '../CalendarActions';
import Month from '../Month';
import MonthBudgets from '../MonthBudgets';
import API from 'store/api';
import moment from 'moment';

const CalendarData = ({ month, year, token, onChangeMonth }) => {

  const { data: calendar, isLoading } = useQuery(
    ['calendar', { month, year, token }], 
    API.calendar.getMonthData, 
    { cacheTime: 0 }
  );

  const isAfterNow = useMemo(() => {
    const thisMonthDate = moment().startOf('month');
    const relatedDate = moment(`${year}-${month > 9 ? month: `0${month}`}-15`);

    return relatedDate > thisMonthDate;
  }, [month, year]);

  return ( 
    <div>
      <CalendarActions 
        disabled={isLoading}
        month={month}
        year={year}
        onChangeMonth={onChangeMonth}
      />
      <LoaderIndicator size="small" isOpen={isLoading} />
      {
        !isLoading &&
          <>
            <Month 
              month={month}
              days={calendar.days}
            />
            <MonthBudgets 
              month={month}
              year={year}
              budgets={calendar.budgets}
              isAfterNow={isAfterNow}
            />
          </>
      }
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