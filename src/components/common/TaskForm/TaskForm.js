import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import DateField from 'components/common/datePickers/DateField';
import LoaderIndicator from 'components/common/LoaderIndicator';
import FormSubmitBtns from 'components/common/FormSubmitBtns';
import SmallTitle from 'components/common/SmallTitle';
import { Root, useStyles } from './TaskForm.styles';
import CustomTextField from 'components/common/CustomTextField';
import FormFieldRow from 'components/common/FormFieldRow';
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
      toast.error(`${'Error'}! ${t(message)}! ${t('Try again later')}!`);
    }
  });

  const handleSubmit = useCallback((data) => submitAction({ data, token, id }), [submitAction, token, id]);

  return ( 
    <Root>
      <LoaderIndicator isOpen={isSending}/>
      <SmallTitle
        margin="smallBottom"
        title={isForEdit ? initialValues.title : t('Add a task')}
      />
      <Form
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validate={validateTask}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>

            <Field name="title">
              {({ input, meta }) => (
                <FormFieldRow>
                  <CustomTextField 
                    className={classes.input}
                    fullWidth={true}
                    {...input}
                    label={t('Title')}
                    placeholder={t('Title')}
                    error={meta.error && meta.touched}
                    helperText={(meta.error && meta.touched) ? 
                    (meta.error === 'Required' ? t('Required') : meta.error) : <>&nbsp;</>}
                  />
                </FormFieldRow>
              )}
            </Field>

            <FormFieldRow inlineGroup>

              <div>
                <Field name="priority">
                  {({ input, meta }) => (
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
                  )}
                </Field>
              </div>

              {
                isForEdit &&
                <Field name="status">
                  {({ input, meta }) => (
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
                  )}
                </Field>
              }

            </FormFieldRow>

            <Field name="endDate">
              {(props) => (
                <FormFieldRow>
                  <DateField 
                    {...props}
                    label={t('End time')}
                    minDate={isForEdit ? moment('1900-01-01') : moment().add(1, 'd')}
                    helperText={<>&nbsp;</>}
                  />
                </FormFieldRow>
              )}
            </Field>

            <Field name="description">
              {({ input, meta }) => (
                <FormFieldRow>
                  <CustomTextField 
                    fullWidth={true}
                    rows={12}
                    multiline={true}
                    variant='outlined'
                    {...input}
                    label={t('Description')}
                    placeholder={t('Description')}
                    error={meta.error && meta.touched}
                    helperText={(meta.error && meta.touched) ? 
                    (meta.error === 'Required' ? t('Required') : meta.error) :  <>&nbsp;</>}
                  />
                </FormFieldRow>
              )}
            </Field>

            <FormSubmitBtns
              smallMargin={true}
              isForEdit={isForEdit}
              onCancel={history.goBack}
              submitDescription={isForEdit ? 'Edit task' : 'Add task'}
              disabled={isSending}
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