import React, { useCallback } from 'react';
import { Root, Title } from './CalendarActions.styles';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { MONTHS } from 'utils/months';
import PropTypes from 'prop-types';

const CalendarActions = ({ month, year, onChangeMonth, disabled }) => {

  const { t } = useTranslation();

  const handleGoToNextMonth = useCallback(() => onChangeMonth({
    month: month === 12 ? 1 : month + 1,
    year: month === 12 ? year + 1 : year,
  }), [month, year, onChangeMonth]);

  const handleGoToPrevMonth = useCallback(() => onChangeMonth({
    month: month === 1 ? 12 : month - 1,
    year: month === 1 ? year - 1 : year,
  }), [month, year, onChangeMonth]);

  return ( 
    <Root>
      <IconButton
        color="primary"
        onClick={handleGoToPrevMonth}
        disabled={disabled}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
       </IconButton>
      <Title>
        {t(MONTHS[month - 1])}  {year}
      </Title>
      <IconButton 
        color="primary"
        onClick={handleGoToNextMonth}
        disabled={disabled}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </IconButton>
    </Root>
   );
}

CalendarActions.propTypes = ({
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChangeMonth: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
});
 
export default CalendarActions;