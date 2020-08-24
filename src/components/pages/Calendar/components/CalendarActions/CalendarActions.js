import React, { useCallback, useState } from 'react';
import { Root, Title, Switcher } from './CalendarActions.styles';
import IconButton from '@material-ui/core/IconButton';
import CalendarPicker from 'components/common/datePickers/CalendarPicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { MONTHS } from 'utils/months';
import PropTypes from 'prop-types';

const CalendarActions = ({ month, year, onChangeMonth, disabled }) => {

  const { t } = useTranslation();

  const [isDateModalOpen, setDateModal] = useState(false);

  const handleGoToNextMonth = useCallback(() => onChangeMonth({
    month: month === 12 ? 1 : month + 1,
    year: month === 12 ? year + 1 : year,
  }), [month, year, onChangeMonth]);

  const handleGoToPrevMonth = useCallback(() => onChangeMonth({
    month: month === 1 ? 12 : month - 1,
    year: month === 1 ? year - 1 : year,
  }), [month, year, onChangeMonth]);

  const handleOpenModal = useCallback(() => setDateModal(true), [setDateModal]);
  const handleCloseModal = useCallback(() => setDateModal(false), [setDateModal]);

  return ( 
    <Root>
      <IconButton
        size="small"
        color="primary"
        onClick={handleOpenModal}
        disabled={disabled}
      >
        <FontAwesomeIcon icon={faCalendar} />
      </IconButton>
      <Switcher>
        <IconButton
          aria-label={t('previous')}
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
          aria-label={t('next')}
          color="primary"
          onClick={handleGoToNextMonth}
          disabled={disabled}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </IconButton>
      </Switcher>
      <CalendarPicker 
        isOpen={isDateModalOpen}
        onClose={handleCloseModal}
        chosenYear={year}
        chosenMonth={month}
        onChangeDate={onChangeMonth}
      />
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