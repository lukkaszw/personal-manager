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
import { validatePassword } from 'utils/validators';
import { Root, FieldContent } from './PasswordForm.styles';
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
        margin="big" 
        title={t('Change your password')}
      />
      <Form
        onSubmit={handleSubmit}
        validate={validatePassword}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>

            <Field name="password">
              {({ input, meta }) => (
                <FieldContent>
                  <TextField 
                    autoComplete="off"
                    fullWidth={true}
                    {...input}
                    label={t('New password')}
                    type="password"
                    placeholder={t('New password')}
                    error={meta.error && meta.touched}
                    helperText={(meta.error && meta.touched) && t(meta.error)}
                  />
                </FieldContent>
              )}
            </Field>

            <Field name="confirmPassword">
              {({ input, meta }) => (
                <FieldContent>
                  <TextField 
                    fullWidth={true}
                    autoComplete="off"
                    {...input}
                    type="password"
                    placeholder={t('Confirm new password')}
                    error={meta.error && meta.touched}
                    helperText={(meta.error && meta.touched) && t(meta.error)}
                  />
                </FieldContent>
              )}
            </Field>

            <Field name="currentPassword">
              {({ input, meta }) => (
                <FieldContent>
                  <TextField 
                    fullWidth={true}
                    autoComplete="off"
                    {...input}
                    label={t('Current password')}
                    placeholder={t('Current password')}
                    type="password"
                    error={meta.error && meta.touched}
                    helperText={(meta.error && meta.touched) && t(meta.error)}
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

PasswordForm.propTypes = {
  token: PropTypes.string.isRequired,
}

export default PasswordForm;