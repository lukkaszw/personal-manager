import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AccountHeader from './components/AccountHeader';
import AccountActions from './components/AccountActions';
import SELECTORS from 'store/selectors';

const Account = ({ userName, userSurname }) => {
  return ( 
    <section>
      <AccountHeader 
        name={userName}
        surname={userSurname}
      />
      <AccountActions />
    </section>
   );
}

Account.propTypes = {
  userName: PropTypes.string.isRequired,
  userSurname: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  userName: SELECTORS.user.getName(state),
  userSurname: SELECTORS.user.getSurname(state),
});
 
export default connect(mapStateToProps)(Account);