import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import LoaderIndicator from 'components/common/LoaderIndicator';
import FormSubmitBtns from 'components/common/FormSubmitBtns';
import SmallTitle from 'components/common/SmallTitle';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { validatePersonalData } from 'utils/validators';
import { Root, FieldContent } from './PersonalDataForm.styles';
import API from 'store/api';

const PersonalDataForm = ({ token, initialValues, onChangeUserData }) => {

  const { t } = useTranslation();
  const history = useHistory();

  const [submitAction, { isLoading: isSending }] = useMutation(API.user.updateData, {
    onSuccess: data => {
      onChangeUserData(data);
      history.goBack();
      toast.success(`${t('Your personal data changed')}!`);
    },
    onError: data => {
      toast.error(`${'Error'}! ${t('You can not change your personal data now')}! ${t('Try again later')}!`);
    }
  });

  const handleSubmit = useCallback((data) => submitAction({ data, token}), [submitAction, token]);

  return ( 
    <Root>
      <LoaderIndicator 
        isOpen={isSending}
        size="small"
      />
      <SmallTitle 
        margin="big" 
        title={t('Personal data form')}
      />
      <Form
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validate={validatePersonalData}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>

            <Field name="name">
              {({ input, meta }) => (
                <FieldContent>
                  <TextField 
                    fullWidth={true}
                    {...input}
                    label={t('Name')}
                    placeholder={t('Name')}
                    error={meta.error && meta.touched}
                    helperText={(meta.error && meta.touched) && 
                    (meta.error === 'Required' ? t('Required') : meta.error)}
                  />
                </FieldContent>
              )}
            </Field>

            <Field name="surname">
              {({ input, meta }) => (
                <FieldContent>
                  <TextField 
                    fullWidth={true}
                    {...input}
                    label={t('Surname')}
                    placeholder={t('Surname')}
                    error={meta.error && meta.touched}
                    helperText={(meta.error && meta.touched) && 
                    (meta.error === 'Required' ? t('Required') : meta.error)}
                  />
                </FieldContent>
              )}
            </Field>

            <FormSubmitBtns 
              isForEdit={true}
              onCancel={history.goBack}
              submitDescription='Update'
              disabled={isSending}
            />
          </form>
        )}
      />
    </Root>
  );
}

PersonalDataForm.propTypes = {
  token: PropTypes.string.isRequired,
  initialValues: PropTypes.object.isRequired,
  onChangeUserData: PropTypes.func.isRequired,
}
 
export default PersonalDataForm;