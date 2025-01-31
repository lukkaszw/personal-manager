import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page from 'components/layout/Page';
import AccountHeader from './components/AccountHeader';
import AccountActions from './components/AccountActions';
import SELECTORS from 'store/selectors';

const Account = ({ login, token }) => {
  return ( 
    <Page>
      <AccountHeader 
        login={login}
      />
      <AccountActions 
        token={token}
      />
    </Page>
   );
}

Account.propTypes = {
  token: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
  login: SELECTORS.user.getLogin(state),
});
 
export default connect(mapStateToProps)(Account);