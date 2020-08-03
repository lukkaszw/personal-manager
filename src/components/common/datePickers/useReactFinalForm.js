const useReactFinalForm = (props) => {
  const {
    meta: { submitting, error, touched },
    input: { onBlur, value, ...inputProps },
    ...others
  } = props;

  const onChange = date => {
    Date.parse(date) ? inputProps.onChange(date.toISOString()) : inputProps.onChange(null);
  };

  return {
    onChange,
    inputProps,
    submitting,
    error,
    touched,
    others,
    value,
    onBlur,
  }
}

export default useReactFinalForm;