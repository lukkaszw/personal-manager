import _v from 'validator';
import { getCategoriesFromFields } from './getCategoriesFromFields';
import { TYPE_ } from 'utils/budget.statuses';

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
        errors.password = 'Required minimum 8 chars (include capital, small letters, number, special char)';
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

export const validateNote = (values) => {
  const errors = {};
  if(!values.title) {
    errors.title = 'Required';
  } else if (values.title.length > 70) {
    errors.title = 'Max 70!';
  }

  if(!values.description) {
    errors.description = 'Required';
  } else if (values.description.length > 3000) {
    errors.description = 'Max 3000!';
  }

  return errors;
}

export const validateNoteCat = (values) => {
  const errors = {};

  if(!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 30) {
    errors.name = 'Max 30!'
  }

  return errors;
}

export const validateBudgetForm = (values) => {
  const errors = {};

  if(!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 30) {
    errors.name = 'Max 30!';
  }

  if(values.type === TYPE_.monthly && !values.date) {
    errors.date = 'Required';
  }

  const totalAmount = parseFloat(Number(values.totalAmount).toFixed(2));

  if(totalAmount  <= 0 || Number.isNaN(totalAmount)) {
    errors.totalAmount = 'Must be positive value!';
  }

  const categories = getCategoriesFromFields(values);

  let isSomeNegative = false;
  categories.forEach(c => {
    if(c.amount < 0 || Number.isNaN(c.amount)) {
      errors[c.category] = true;
      isSomeNegative = true;
    }
  }); 
  
  if(isSomeNegative) {
    errors.negative = 'Categories have to be positive values or 0!';
  }

  const catSum = categories.reduce((prevValue, nextCat) => {
    if(Number.isNaN(nextCat.amount)) {
      return prevValue;
    }
    return prevValue + nextCat.amount;
  }, 0);

  if(catSum > totalAmount) {
    errors.toBigSum = "Sum of categories can't be more than total amount!";
  }

  return errors;
}

export const validateTransaction = (values) => {
  const errors = {};

  if(!values.description) {
    errors.description = 'Required';
  } else if (values.description.length > 20) {
    errors.description = 'Max 20!';
  }

  if(!values.date) {
    errors.date = 'Required';
  }

  return errors;
}