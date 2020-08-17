import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import DateField from 'components/common/datePickers/DateField';
import LoaderIndicator from 'components/common/LoaderIndicator';
import FormSubmitBtns from 'components/common/FormSubmitBtns';
import { Root, FieldContent, useStyles } from './TaskForm.styles';
import { validateTask } from 'utils/validators';
import { useMutation, queryCache } from 'react-query';
import { toast } from 'react-toastify';
import { STATUS, PRIORITY } from 'utils/tasks.statuses';
import moment from 'moment';


const TaskForm = ({ token, initialValues, apiAction, isForEdit, id }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  const [submitAction, { isLoading: isSending }] = useMutation(apiAction, {
    onSuccess: data => {
      if(isForEdit) {
        queryCache.setQueryData(['task', { id, token }], data);
      }
      history.goBack();
      const message = isForEdit ? 'You have edited the task' : 'You have added a task'; 
      toast.success(`${t(message)}!`);
    },
    onError: data => {
      const message = isForEdit ? 'You can not edit a task now' : 'You can not add a task now';
      toast.error(`${t(message)}! ${t('Try again later')}!`);
    }
  });

  const handleSubmit = useCallback((data) => submitAction({ data, token, id }), [submitAction, token, id]);

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
                    <InputLabel id="priority-label">{t('Priority')}</InputLabel>
                    <Select
                      className={classes.select}
                      labelId="priority-label"
                      id="priority-select"
                      {...input}
                    >
                      {
                        Object.entries(PRIORITY).map(([value, text]) => (
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
              isForEdit &&
              <Field name="status">
                {({ input, meta }) => (
                  <FieldContent>
                    <FormControl>
                      <InputLabel id="status-label">Status</InputLabel>
                      <Select
                        className={classes.select}
                        labelId="status-label"
                        id="status-select"
                        {...input}
                      >
                        {
                          Object.entries(STATUS).map(([value, text]) => (
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
            }
            <Field name="endDate">
              {(props) => (
                <DateField 
                  {...props}
                  label={t('End time')}
                  minDate={isForEdit ? moment('1900-01-01') : moment().add(1, 'd')}
                />
              )}
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
            <FormSubmitBtns 
              isForEdit={isForEdit}
              onCancel={history.goBack}
              submitDescription={isForEdit ? 'Edit task' : 'Add task'}
              disable={isSending}
            />
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
  isForEdit: PropTypes.bool,
  id: PropTypes.string,
};
 
export default TaskForm;