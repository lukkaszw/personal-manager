import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import { Root, ButtonWrapper, useStyles, Info } from './Auth.styles';
import FormFieldRow from 'components/common/FormFieldRow';
import { TEXTS } from './data';
import CustomTextField from 'components/common/CustomTextField';
import { useTranslation } from 'react-i18next';
import useAuthForm from './useAuthForm';
import Page from 'components/layout/Page';
import LoaderIndicator from 'components/common/LoaderIndicator';
import ResponseModal from 'components/common/ResponseModal';

import API from 'store/api';
import SELECTORS from 'store/selectors';
import ACTION_CREATORS from 'store/actionCreators';

const Auth = ({ onSendCredentials, isSending, onResetRequest, errorCode, isSuccess }) => {

  const { t } = useTranslation();
  const classes = useStyles();

  const Messages = {
    1: t('Provided login is in use! Please use another one!'),
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
    <Page centeredContent>
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
                  <FormFieldRow>
                    <CustomTextField 
                      {...input}
                      className={classes.input}
                      label="Login"
                      placeholder='Login'
                      error={meta.error && meta.touched}
                      helperText={(meta.touched && (meta.error === 'Required' || (formDestination === 'register' && meta.error))) ? t(meta.error) : <>&nbsp;</>}
                    />
                  </FormFieldRow>
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <FormFieldRow>
                    <CustomTextField 
                      {...input}
                      className={classes.input}
                      placeholder={t("Password")}
                      label={t("Password")}
                      type="password"
                      autoComplete="off"
                      error={meta.error && meta.touched}
                      helperText={((meta.error && meta.touched) &&
                      t(meta.error)) || <>&nbsp;</>}
                    />
                  </FormFieldRow>
                )}
              </Field>
              {
                formDestination === 'register' &&
                  <>
                    <FormFieldRow>
                      <Field name="confirmPassword">
                        {({ input, meta }) => (
                          <CustomTextField 
                            {...input}
                            className={classes.input}
                            label={t("Confirm password")}
                            placeholder={t("Confirm password")}
                            type="password"
                            autoComplete="off"
                            error={meta.error && meta.touched}
                          />
                        )}
                      </Field>
                    </FormFieldRow>
                  </>
              }
              <ButtonWrapper>
                <Button 
                  size="small"
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
        {
          formDestination === 'register' && 
          <Info>
            {`${t('This app was created only for development purposes')}. 
            ${t('Please do not provide your personal data')}`}! 
          </Info>  
        }
      </Root>
    </Page>
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