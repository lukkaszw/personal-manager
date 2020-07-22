import _v from 'validator';

const passwordRegExp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

export const validateAuthInputs = (values, destination) => {
  const isForRegister = destination === 'register';

  const errors = {};
    if (!values.login || !_v.isEmail(values.login)) {
      errors.login = 'Has to be an email';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    if(isForRegister) {
      if(!values.name) {
        errors.name = 'Required';
      }
      if(!values.surname) {
        errors.surname = 'Required';
      }
      if (!values.password || !passwordRegExp.test(values.password)) {
        errors.password = 'Min. 8 (A-Z, a-z, 0-9, !(){}[]=+-;*,...)';
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = 'Required'
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Must match'
      }
    }

    return errors
}

export const validateTask = (values) => {

  const errors = {};
  if(!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 70) {
    errors.title = 'Max 70!';
  }

  if(!values.endDate) {
    errors.endDate = 'Required';
  }

  if(!values.description) {
    errors.description = 'Required';
  } else if (values.description.length > 3000) {
    errors.description = 'Max 3000!';
  }

  return errors;
}