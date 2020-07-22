import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { useTranslation } from 'react-i18next';
import moment from 'moment';


const DateField = props => {
  const { t } = useTranslation();

  const {
    meta: { submitting, error, touched },
    input: { onBlur, value, ...inputProps },
    ...others
  } = props;

  const onChange = date => {
    Date.parse(date) ? inputProps.onChange(date.toISOString()) : inputProps.onChange(null);
  };

  return (
    <KeyboardDatePicker
      {...inputProps}
      {...others}
      autoOk={true}
      label={t('End time')}
      format="YYYY-MM-DD"
      minDate={moment().add(1, 'd')}
      value={value ? new Date(value) : null}
      disabled={submitting}
      onBlur={() => onBlur(value ? new Date(value).toISOString() : null)}
      error={error && touched}
      onChange={onChange}
    />
  );
};

export default DateField;