import React from 'react';
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
import { Root, FieldContent, ButtonWrapper, useStyles } from './TaskForm.styles';
import { validateTask } from 'utils/validators';


const TaskForm = ({ initialValues }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return ( 
    <Root>
      <Form
        onSubmit={(data) => console.log(data)}
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
                disabled={false}
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
  initialValues: PropTypes.object.isRequired,
};
 
export default TaskForm;