import React, { useState, useCallback } from 'react';
import Modal from '@material-ui/core/Modal';
import { 
  Root, BtnClose, ButtonWrapper,
  YearSwitcher, Year, 
  MonthPicker, MonthBtn } from './CalendarPicker.styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { MONTHS } from 'utils/months';
import clsx from 'clsx';

const CalendarPicker = ({ 
  isOpen, onClose,
  chosenYear, chosenMonth, 
  onChangeDate,
}) => {

  const { t } = useTranslation();
  
  const [year, setYear] = useState(chosenYear);
  const [month, setMonth] = useState(chosenMonth);

  const handleNextYear = useCallback(() => setYear(prevYear => prevYear + 1), [setYear]);
  const handlePrevYear = useCallback(() => setYear(prevYear => prevYear - 1), [setYear]);

  const handleChangeDate = useCallback(() => {
    onChangeDate({year, month});
    onClose();
  }, [year, month, onChangeDate, onClose]);

  return ( 
    <Modal
      open={isOpen}
    >
      <Root>

        <BtnClose>
          <IconButton
            aria-label={t('close')}
            size='small'
            color='secondary'
            onClick={onClose}
          >
            <FontAwesomeIcon 
              icon={faTimes}
            />
          </IconButton>
        </BtnClose>

        <YearSwitcher>
          <IconButton
            aria-label={t('previous')}
            size="small"
            color="primary"
            onClick={handlePrevYear}
          >
            <FontAwesomeIcon 
              icon={faAngleLeft}
            />
          </IconButton>
          <Year>
            {year}
          </Year>
          <IconButton
            aria-label={t('next')}
            size="small"
            color="primary"
            onClick={handleNextYear}
          >
            <FontAwesomeIcon 
              icon={faAngleRight}
            />
          </IconButton>
        </YearSwitcher>

        <MonthPicker>
          {
            MONTHS.map((monthName, index) => (
              <MonthBtn 
                className={clsx([(index + 1 === month) && 'active'])}
                key={monthName + index}
                onClick={() => setMonth(index + 1)}
              >
                {t(monthName)}
              </MonthBtn>
            ))
          }
        </MonthPicker>
        
        <ButtonWrapper> 
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={handleChangeDate}
          >
            {t('Submit')}
          </Button>
        </ButtonWrapper>

      </Root>
    </Modal>
   );
}

CalendarPicker.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  chosenYear: PropTypes.number.isRequired,
  chosenMonth: PropTypes.number.isRequired,
  onChangeDate: PropTypes.func.isRequired,
};

export default CalendarPicker;