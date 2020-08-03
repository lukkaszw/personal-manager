import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from '@material-ui/pickers';
import useReactFinalForm from '../useReactFinalForm';

const DateField = props => {

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
    <KeyboardDatePicker
      {...inputProps}
      {...others}
      autoOk={true}
      label={props.label}
      format="YYYY-MM-DD"
      minDate={props.minDate}
      value={value ? new Date(value) : null}
      disabled={submitting}
      onBlur={() => onBlur(value ? new Date(value).toISOString() : null)}
      error={error && touched}
      onChange={onChange}
    />
  );
};

DateField.propTypes = {
  minDate: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
}

export default DateField;