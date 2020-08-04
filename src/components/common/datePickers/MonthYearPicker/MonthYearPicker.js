import React from 'react';
import PropTypes from 'prop-types';
import { KeyboardDatePicker } from "@material-ui/pickers";
import useReactFinalForm from '../useReactFinalForm';

const MonthYearPicker = (props) => {

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
      variant="inline"
      openTo="year"
      views={["year", "month"]}
      label={props.label}
      minDate={props.minDate}
      value={value ? new Date(value) : null}
      error={error && touched}
      onBlur={() => onBlur(value ? new Date(value).toISOString() : null)}
      disabled={submitting}
      onChange={onChange}
    />
   );
}

MonthYearPicker.propTypes = {
  label: PropTypes.string.isRequired,
  minDate: PropTypes.object.isRequired,
}
 
export default MonthYearPicker;