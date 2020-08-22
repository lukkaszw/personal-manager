import React from 'react';
import { Root } from './WeekDays.styles';
import { WEEK_DAYS } from 'utils/weekDays';
import { useTranslation } from 'react-i18next';

const WeekDays = () => {
  const { t } = useTranslation();

  return (  
    <Root>
      { 
        WEEK_DAYS.map(day => (
          <li key={day}>
            {t(day)}
          </li>
        ))
      }
    </Root>
  );
}
 
export default WeekDays;