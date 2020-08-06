export const parseMoneyInput = (inputValue, inputOnChangeCallback) => {
  if(inputValue[0] === '0' && inputValue[1] !== undefined && inputValue[1] !== '.') {
    return;
  } 

  if(inputValue.includes('.')) {
    const parts = inputValue.split('.');

    if(parts[1].length > 2) {
      return;
    }
  }

  if(inputValue) {
    const value = parseFloat(inputValue);
    if(value < 0) {
      return;
    }
  }

  inputOnChangeCallback({ target: { value: inputValue }});
}