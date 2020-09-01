import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PasswordForm from './components/PasswordForm';
import { Root } from './UpdatePassword.styles';
import SELECTORS from 'store/selectors';

const UpdatePassword = ({ token }) => {
  return ( 
    <Root>
      <PasswordForm 
        token={token}
      />
    </Root>
  );
}

UpdatePassword.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(UpdatePassword);