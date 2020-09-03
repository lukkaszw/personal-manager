import React from 'react';
import PropTypes from 'prop-types';
import { CustomDatePicker } from '../CustomDatePicker.styles';
import useReactFinalForm from '../useReactFinalForm';
import { useTranslation } from 'react-i18next';

const DateField = props => {

  const { t } = useTranslation();

  const {   
    onChange,
    inputProps,
    submitting,
    error,
    touched,
    others,
    value,
    onBlur } = useReactFinalForm(props);

  return (
    <CustomDatePicker
      {...inputProps}
      {...others}
      autoOk={true}
      variant='dialog'
      label={props.label}
      format="YYYY-MM-DD"
      minDate={props.minDate}
      value={value ? new Date(value) : null}
      disabled={submitting}
      onBlur={() => onBlur(value ? new Date(value).toISOString() : null)}
      error={error && touched}
      onChange={onChange}
      cancelLabel={t('Cancel')}
      okLabel='OK'
    />
  );
};

DateField.propTypes = {
  minDate: PropTypes.object,
  label: PropTypes.string.isRequired,
}

export default DateField;