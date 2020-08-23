import React, { useMemo, useState, useEffect } from 'react';
import LoaderIndicator from 'components/common/LoaderIndicator';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import CalendarActions from '../CalendarActions';
import Month from '../Month';
import InfoPanel from '../InfoPanel';
import API from 'store/api';
import moment from 'moment';

const CalendarData = ({ month, year, token, onChangeMonth }) => {

  const [selectedDay, selectDay] = useState(null);

  useEffect(() => {
    selectDay(null);
  }, [month, selectDay])

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

  const { chosenDay, dayTasks, isActiveDay } = useMemo(() => {
    const day = selectedDay && calendar ? calendar.days[selectedDay] : null;

    const now = moment();

    const isActiveDay = day && now < moment([year, month - 1, day.day]);
    
    return {
      chosenDay: day ? day.day : null,
      dayTasks: day ? day.tasks : null,
      isActiveDay,
    }
  }, [selectedDay, calendar, year, month]);

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
              onSelectDay={selectDay}
              selectedDay={selectedDay}
            />
            <InfoPanel 
              month={month}
              year={year}
              day={chosenDay}
              budgets={calendar.budgets}
              dayTasks={dayTasks}
              isAfterNow={isAfterNow}
              isActiveDay={isActiveDay}
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