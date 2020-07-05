import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SELECTORS from 'store/selectors';
import API from 'store/api';

const Logout = ({ token, onLogoutUser }) => {
  useEffect(() => {
    onLogoutUser(token);
  }, [onLogoutUser, token]);

  return null;
}

Logout.propTypes = {
  token: PropTypes.string.isRequired,
  onLogoutUser: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutUser: (token) => dispatch(API.user.logoutUser(token)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Logout);