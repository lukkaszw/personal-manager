import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Root, InputWrapper, ButtonWrapper, useStyles } from './Auth.styles';
import { TEXTS } from './data';
import { useTranslation } from 'react-i18next';
import useAuthForm from './useAuthForm';
import LoaderIndicator from 'components/common/LoaderIndicator';
import ResponseModal from 'components/common/ResponseModal';

import API from 'store/api';
import SELECTORS from 'store/selectors';
import ACTION_CREATORS from 'store/actionCreators';

const Auth = ({ onSendCredentials, isSending, onResetRequest, errorCode, isSuccess }) => {

  const { t } = useTranslation();
  const classes = useStyles();

  const Messages = {
    1: t('Provided email is in use! Please use another one!'),
    2: t('Incorrect form data! Correct and try again!'),
    3: t('Internal server error! Please try again later!'),
  };

  const {
    formDestination,
    changeDestination,
    onSubmit,
    validateInputs,
    resetAction,
  } = useAuthForm(onSendCredentials, onResetRequest, isSuccess);

  const isModalOpen = !!errorCode || !!(isSuccess && (formDestination === 'register'));
  const modalTitle = errorCode ? t('Error occured!') : t('Successfull registration!');
  const modalMessage = Messages[errorCode];

  return ( 
    <Root>
      <LoaderIndicator isOpen={isSending} />
      <ResponseModal 
        isOpen={isModalOpen}
        isError={!!errorCode}
        title={modalTitle}
        message={modalMessage}
        onClose={resetAction}
      />
      <Form
        onSubmit={onSubmit}
        validate={validateInputs}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="login">
              {({ input, meta }) => (
                <InputWrapper>
                  <TextField 
                    {...input}
                    className={classes.input}
                    label="Email"
                    placeholder='Email'
                    error={meta.error && meta.touched}
                  />
                </InputWrapper>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <InputWrapper>
                  <TextField 
                    {...input}
                    className={classes.input}
                    placeholder={t("Password")}
                    label={t("Password")}
                    type="password"
                    error={meta.error && meta.touched}
                    helperText={(meta.error && meta.touched) && 
                    (meta.error === 'Required' ? t('Required') : meta.error)}
                  />
                </InputWrapper>
              )}
            </Field>
            {
              formDestination === 'register' &&
                <>
                  <Field name="confirmPassword">
                      {({ input, meta }) => (
                        <InputWrapper>
                          <TextField 
                            {...input}
                            className={classes.input}
                            placeholder={t("Confirm password")}
                            type="password"
                            error={meta.error && meta.touched}
                          />
                        </InputWrapper>
                      )}
                  </Field>
                  <Field name="name">
                      {({ input, meta }) => (
                        <InputWrapper>
                          <TextField 
                            {...input}
                            className={classes.input}
                            label={t("Name")}
                            placeholder={t("Name")}
                            error={meta.error && meta.touched}
                          />
                        </InputWrapper>
                      )}
                  </Field>
                  <Field name="surname">
                      {({ input, meta }) => (
                        <InputWrapper>
                        <TextField 
                            {...input}
                            className={classes.input}
                            label={t("Surname")}
                            placeholder={t("Surname")}
                            error={meta.error && meta.touched}
                          />
                        </InputWrapper>
                      )}
                  </Field>
                </>
            }
            <ButtonWrapper>
              <Button 
                variant="contained"
                color="primary"
                type="submit" 
                disabled={isSending}
              >
                {t(TEXTS[formDestination].submitBtnText)}
              </Button>
            </ButtonWrapper>
          </form>
        )}
      />
      <ButtonWrapper>
        <p>
          {t(TEXTS[formDestination].question)}
        </p>
        <Button 
          size="small"
          color="secondary"
          onClick={changeDestination}
        >
          {t(TEXTS[formDestination].switchBtnText)}
        </Button>
      </ButtonWrapper>
    </Root>
   );
}

Auth.propTypes = {
  onSendCredentials: PropTypes.func.isRequired,
  isSending: PropTypes.bool.isRequired,
  onResetRequest: PropTypes.func.isRequired,
  errorCode: PropTypes.number,
  isSuccess: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isSending: SELECTORS.user.getIsSending(state),
  isSuccess: SELECTORS.user.getIsSuccess(state),
  errorCode: SELECTORS.user.getErrorCode(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSendCredentials: (data, actionName) => dispatch(API.user.sendCredentials(data, actionName)),
  onResetRequest: () => dispatch(ACTION_CREATORS.user.resetError()),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Auth);