import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import LoaderIndicator from 'components/common/LoaderIndicator';
import { Form, Field } from 'react-final-form';
import CustomTextField from 'components/common/CustomTextField';
import FormSubmitBtns from 'components/common/FormSubmitBtns';
import SmallTitle from 'components/common/SmallTitle';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { validateNoteCat } from 'utils/validators';

const NotesCatForm = ({ token, initialValues, apiAction, isForEdit, id, categoryName, children }) => {

  const history = useHistory();

  const { t } = useTranslation();

  const [submitAction, { isLoading: isSending }] = useMutation(apiAction, {
    onSuccess: data => {
      history.goBack();
      const message = isForEdit ? 'You have edited the category' : 'You have added a category'; 
      toast.success(`${t(message)}!`);
    },
    onError: data => {
      history.goBack();
      const message = isForEdit ? 'You can not edit a category now' : 'You can not add a category now';
      toast.error(`${'Error'}! ${t(message)}! ${t('Try again later')}!`);
    }
  });

  const handleSubmit = useCallback((data) => submitAction({ data, token, id }), [submitAction, token, id]);

  return ( 
    <div>
      <LoaderIndicator isOpen={isSending} />
      <SmallTitle 
        title={isForEdit ? categoryName : t('Add notes category')}
        margin="normalBottom"
      />
      <Form
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validate={validateNoteCat}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>

            <Field name="name">
              {({ input, meta }) => (
                  <CustomTextField 
                    fullWidth={true}
                    {...input}
                    label={t('Category name')}
                    placeholder={t('Category name')}
                    error={meta.error && meta.touched}
                    helperText={(meta.error && meta.touched) ? 
                    (meta.error === 'Required' ? t('Required') : meta.error) : <>&nbsp;</>}
                  />
              )}
            </Field>

            <FormSubmitBtns 
              isForEdit={isForEdit}
              onCancel={history.goBack}
              disabled={isSending}
              submitDescription={isForEdit ? 'Edit category' : 'Add category'}
              center={true}
            />
            
          </form>
        )}
      />
      {children}
    </div>
   );
}

NotesCatForm.propTypes = {
  categoryName: PropTypes.string,
  token: PropTypes.string.isRequired,
  initialValues: PropTypes.object.isRequired,
  apiAction: PropTypes.func.isRequired,
  id: PropTypes.string,
  isForEdit: PropTypes.bool,
};
 
export default NotesCatForm;