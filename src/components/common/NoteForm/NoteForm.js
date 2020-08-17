import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import LoaderIndicator from 'components/common/LoaderIndicator';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormSubmitBtns from 'components/common/FormSubmitBtns';
import PropTypes from 'prop-types';
import { Root, FieldContent, useStyles } from './NoteForm.styles';
import { useTranslation } from 'react-i18next';
import { useMutation, queryCache } from 'react-query';
import { toast } from 'react-toastify';
import { validateNote } from 'utils/validators';
import { PRIORITY } from 'utils/notes.statuses';

const NoteForm = ({ token, apiAction, initialValues, isForEdit, id, categories }) => {

  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  const [submitAction, { isLoading: isSending }] = useMutation(apiAction, {
    onSuccess: data => {
      if(isForEdit) {
        queryCache.setQueryData(['note', { id, token }], data);
      }
      history.goBack();
      const message = isForEdit ? 'You have edited the note' : 'You have added a note'; 
      toast.success(`${t(message)}!`);
    },
    onError: data => {
      const message = isForEdit ? 'You can not edit a note now' : 'You can not add a note now';
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
        validate={validateNote}
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
                    <InputLabel id="priority-note-label">{t('Priority')}</InputLabel>
                    <Select
                      className={classes.select}
                      labelId="priority-note-label"
                      id="priority-note-select"
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
            <Field name="category">
              {({ input, meta }) => (
                <FieldContent>
                  <FormControl>
                    <InputLabel id="category-note-label">{t('Category')}</InputLabel>
                    <Select
                      className={classes.select}
                      labelId="category-note-label"
                      id="category-note-select"
                      {...input}
                    >
                      <MenuItem 
                        value='none'
                      >
                        {t('not assigned')}
                      </MenuItem>
                      {
                        categories.map(category => (
                          <MenuItem 
                            key={category._id}
                            value={category._id}
                          >
                            {category.name}
                          </MenuItem>
                        ))
                      }
                    </Select>
                  </FormControl>
                </FieldContent>
              )}
            </Field>
            <Field name="description">
              {({ input, meta }) => (
                <FieldContent>
                  <TextField 
                    fullWidth={true}
                    multiline={true}
                    rows={15}
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
              submitDescription={isForEdit ? 'Edit note' : 'Add note'}
              disable={isSending}
            />
          </form>
        )}
      />
    </Root>
   );
}

NoteForm.propTypes = {
  token: PropTypes.string.isRequired,
  apiAction: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
  isForEdit: PropTypes.bool,
  id: PropTypes.string,
  categories: PropTypes.arrayOf(PropTypes.object),
};
 
export default NoteForm;