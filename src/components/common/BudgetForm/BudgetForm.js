import React, { useState, useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import MonthYearPicker from 'components/common/datePickers/MonthYearPicker';
import { 
  Root, ButtonWrapper, ErrorsWrapper, 
  FieldContent, CategoryField, CategoryLabel, ImportantText,
  useStyles,  } from './BudgetForm.styles';
import { TYPE, TYPE_ } from 'utils/budget.statuses';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { validateBudgetForm } from 'utils/validators';
import { getSumOfCategories } from 'utils/getCategoriesFromFields';
import { parseMoneyInput } from 'utils/parseMoneyInput';
import { toast } from 'react-toastify';
import moment from 'moment';


const BudgetForm = ({ id, token, apiAction, initialValues, categories, isForEdit }) => {

  const { t } = useTranslation();
  const classes = useStyles();
  const history = useHistory();

  const [type, setType] = useState(initialValues.type);

  const minDate = useMemo(() => {
    if(isForEdit) {
      return moment('1900-01-01');
    } 
    return moment();
  }, [isForEdit]);

  const [submitAction, { isLoading: isSending }] = useMutation(apiAction, {
    onSuccess: data => {
      if(isForEdit) {
        console.log('isFor Edit!');
      }
      history.goBack();
      const message = isForEdit ? 'You have edited the budget' : 'You have added a budget'; 
      toast.success(`${t(message)}!`);
    },
    onError: data => {
      const message = isForEdit ? 'You can not edit a budget now' : 'You can not add a budget now';
      toast.error(`${t(message)}! ${t('Try again later')}!`);
    }
  });

  const handleSubmit = useCallback((data) => submitAction({ data, token, id }), [submitAction, token, id]);

  return ( 
    <Root>
      <Form
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validate={validateBudgetForm}
        render={({ handleSubmit, submitting,  values, errors }) => {

          const categoriesSum = getSumOfCategories(values);
          const savings = values.totalAmount - categoriesSum;
          const savingText = Number.isNaN(savings) ? '-' : Math.floor(savings * 100) / 100;

          return (
            <form onSubmit={handleSubmit}>
              <Field name="name">      
                {({ input, meta }) => (
                  <FieldContent>
                    <TextField 
                      fullWidth={true}
                      {...input}
                      label={t('Budget name')}
                      placeholder={t('Budget name')}
                      error={meta.error && meta.touched}
                      helperText={(meta.error && meta.touched) && 
                      (meta.error === 'Required' ? t('Required') : meta.error)}
                    />
                  </FieldContent>
                )}
              </Field>
              <Field name="type" parse = {value => parseInt(value)}>
                  {({ input, meta }) => (
                    <FieldContent>
                      <FormControl>
                      <InputLabel id="budget-type-label">{t('Type')}</InputLabel>
                      <Select
                        className={classes.select}
                        labelId="budget-type-label"
                        id="budget-type-select"
                        {...input}
                        onChange={(e) => {
                          input.onChange(e);
                          setType(Number(e.target.value));
                        }}
                      >
                        {
                          Object.entries(TYPE).map(([value, text]) => (
                            <MenuItem 
                              key={text}
                              value={value}
                            >
                              {t(text)}
                            </MenuItem>
                          ))
                        }
                      </Select>
                    </FormControl>
                  </FieldContent>
                )}
              </Field>
              {
                type === TYPE_.monthly &&
                  <Field name="date">
                    {(props) => (     
                      <FieldContent>
                          <MonthYearPicker 
                            {...props}
                            label={t('Budget for')}
                            minDate={minDate}
                          />
                      </FieldContent>
                    )}
                  </Field>
              }
              <Field name="totalAmount">
                {({ input, meta }) => (
                    <FieldContent>
                      <TextField 
                        className={classes.totalAmountInput}
                        fullWidth={true}
                        {...input}
                        onChange={(e) => parseMoneyInput(e.target.value, input.onChange)}
                        type="number"
                        label={t('Total capital')}
                        error={meta.error && meta.touched}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">zł</InputAdornment>,
                          inputProps: {
                            step: "0.01",
                            min: 0,
                          },
                        }}
                        helperText={(meta.error && meta.touched) && t(meta.error)}
                      />
                    </FieldContent>
                  )}
              </Field>
              {
                categories.map(category => (
                  <Field 
                    name={category._id} 
                    key={category._id}
                  >
                    {({ input, meta }) => (
                      <CategoryField >
                        <CategoryLabel htmlFor={category.name}>
                          {t(category.name)}
                        </CategoryLabel>
                        <TextField 
                          className={classes.catInput}
                          {...input}
                          onChange={(e) => parseMoneyInput(e.target.value, input.onChange)}
                          type="number"
                          error={meta.error && meta.touched}
                          InputProps={{
                            id: category.name,
                            endAdornment: <InputAdornment position="end">zł</InputAdornment>,
                            inputProps: {
                              step: "0.01",
                              min: 0,
                            },
                          }}
                        />
                      </CategoryField>
                    )}
                  </Field>
                ))
              }
              <Divider />
              <CategoryField >
                <ImportantText>{t('Planned savings')}: </ImportantText>
                <span>{savingText} zł</span>
              </CategoryField >
              <ErrorsWrapper>
                <p>
                  {errors.toBigSum ? t(errors.toBigSum) : ''}
                </p>
                <p>
                  {errors.negative ? t(errors.negative) : ''}
                </p>
              </ErrorsWrapper>
              <ButtonWrapper>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleSubmit}
                  disabled={submitting || isSending}
                >
                  {isForEdit ? t('Edit budget') : t('Add budget')}
                </Button>
              </ButtonWrapper>
            </form>
        )}}
      />
    </Root>
   );
}

BudgetForm.propTypes = {
  id: PropTypes.string,
  isForEdit: PropTypes.bool,
  token: PropTypes.string.isRequired,
  initialValues: PropTypes.object.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object),
  apiAction: PropTypes.func.isRequired,
};
 
export default BudgetForm;