import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import LoaderIndicator from 'components/common/LoaderIndicator';
import FormSubmitBtns from 'components/common/FormSubmitBtns';
import { FormFieldRowB } from 'components/common/FormFieldRow';
import CustomTextField from 'components/common/CustomTextField';
import SmallTitle from 'components/common/SmallTitle';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { validatePassword } from 'utils/validators';
import { Root } from './PasswordForm.styles';
import API from 'store/api';

const PasswordForm = ({ token }) => {

  const { t } = useTranslation();
  const history = useHistory();

  const [submitAction, { isLoading: isSending }] = useMutation(API.user.updatePassword, {
    onSuccess: data => {
      history.goBack();
      toast.success(`${t('Your password has been changed')}!`);
    },
    onError: (data) => {
      if(data.response.status === 401) {
        toast.error(`${t('Error')}! ${t('Incorrect current password')}!`);
      } else {
        toast.error(`${t('Error')}! ${t('You can not change your password now')}! ${t('Try again later')}!`);
      }
    }
  });

  const handleSubmit = useCallback((data) => submitAction({ data, token}), [submitAction, token]);

  return ( 
    <Root>
      <LoaderIndicator 
        isOpen={isSending}
        size="small"
        color="secondary"
      />
      <SmallTitle  
        title={t('Change your password')}
      />
      <Form
        onSubmit={handleSubmit}
        validate={validatePassword}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>

            <Field name="password">
              {({ input, meta }) => (
                <FormFieldRowB>
                  <CustomTextField 
                    autoComplete="off"
                    fullWidth={true}
                    {...input}
                    label={t('New password')}
                    type="password"
                    placeholder={t('New password')}
                    error={meta.error && meta.touched}
                    helperText={(meta.error && meta.touched) ? t(meta.error) : <>	&nbsp;</>}
                  />
                </FormFieldRowB>
              )}
            </Field>

            <Field name="confirmPassword">
              {({ input, meta }) => (
                <div>
                  <br/>
                  <FormFieldRowB>
                    <CustomTextField 
                      fullWidth={true}
                      autoComplete="off"
                      {...input}
                      type="password"
                      placeholder={t('Confirm new password')}
                      error={meta.error && meta.touched}
                      helperText={(meta.error && meta.touched) && t(meta.error)}
                    />
                  </FormFieldRowB>
                </div>
         
              )}
            </Field>

            <Field name="currentPassword">
              {({ input, meta }) => (
                <FormFieldRowB>
                  <CustomTextField 
                    fullWidth={true}
                    autoComplete="off"
                    {...input}
                    label={t('Current password')}
                    placeholder={t('Current password')}
                    type="password"
                    error={meta.error && meta.touched}
                    helperText={(meta.error && meta.touched) && t(meta.error)}
                  />
                </FormFieldRowB>
              )}
            </Field>

            <FormSubmitBtns 
              center={true}
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

PasswordForm.propTypes = {
  token: PropTypes.string.isRequired,
}

export default PasswordForm;