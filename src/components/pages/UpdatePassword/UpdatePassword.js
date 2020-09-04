import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PasswordForm from './components/PasswordForm';
import Page from 'components/layout/Page';
import SELECTORS from 'store/selectors';

const UpdatePassword = ({ token }) => {
  return ( 
    <Page centeredContent>
      <PasswordForm 
        token={token}
      />
    </Page>
  );
}

UpdatePassword.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(UpdatePassword);