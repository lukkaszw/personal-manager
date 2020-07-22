import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import DateField from 'components/common/DateField';
import LoaderIndicator from 'components/common/LoaderIndicator';
import { Root, FieldContent, ButtonWrapper, useStyles } from './TaskForm.styles';
import { validateTask } from 'utils/validators';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';


const TaskForm = ({ token, initialValues, apiAction }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  const [submitAction, { isLoading: isSending }] = useMutation(apiAction, {
    onSuccess: data => {
      history.goBack();
      toast.success(`${t(`You have added a task`)}!`);
    },
    onError: data => {
      toast.error(`${t('You can not add a task now')}! ${t('Try again later')}!`);
    }
  });

  const handleSubmit = useCallback((data) => submitAction({ data, token }), [submitAction, token]);

  return ( 
    <Root>
      <LoaderIndicator isOpen={isSending}/>
      <Form
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validate={validateTask}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="title">
              {({ input, meta }) => (
                <FieldContent>
                  <TextField 
                    fullWidth={true}
                    {...input}
                    label={t('Title')}
                    placeholder={t('Title')}
                    error={meta.error && meta.touched}
                    helperText={(meta.error && meta.touched) && 
                    (meta.error === 'Required' ? t('Required') : meta.error)}
                  />
                </FieldContent>
              )}
            </Field>
            <Field name="priority">
              {({ input, meta }) => (
                <FieldContent>
                   <FormControl>
                    <InputLabel id="demo-simple-select-label">{t('Priority')}</InputLabel>
                    <Select
                      className={classes.select}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      {...input}
                    >
                      <MenuItem value={1}>{t('low')}</MenuItem>
                      <MenuItem value={2}>{t('normal')}</MenuItem>
                      <MenuItem value={3}>{t('high')}</MenuItem>
                      <MenuItem value={4}>{t('v_high')}</MenuItem>
                    </Select>
                  </FormControl>
                </FieldContent>
              )}
            </Field>
            <Field name="endDate" component={DateField}>
            </Field>
            <Field name="description">
              {({ input, meta }) => (
                <FieldContent>
                  <TextField 
                    fullWidth={true}
                    rows={14}
                    multiline={true}
                    variant='outlined'
                    {...input}
                    label={t('Description')}
                    placeholder={t('Description')}
                    error={meta.error && meta.touched}
                    helperText={(meta.error && meta.touched) && 
                    (meta.error === 'Required' ? t('Required') : meta.error)}
                  />
                </FieldContent>
              )}
            </Field>
            <ButtonWrapper>
              <Button 
                variant="contained"
                color="primary"
                type="submit" 
                disabled={isSending}
              >
                {t('Add task')}
              </Button>
            </ButtonWrapper>
          </form>
        )}
      />
    </Root>
   );
}

TaskForm.propTypes = {
  token: PropTypes.string.isRequired,
  apiAction: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};
 
export default TaskForm;