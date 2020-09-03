import React from 'react';
import PropTypes from 'prop-types';
import { CustomDatePicker } from '../CustomDatePicker.styles';
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
    <CustomDatePicker
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
      inputProps={{
        width: '100px',
      }}
    />
   );
}

MonthYearPicker.propTypes = {
  label: PropTypes.string.isRequired,
  minDate: PropTypes.object.isRequired,
}
 
export default MonthYearPicker;