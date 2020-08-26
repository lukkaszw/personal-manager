import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MainHeader from './components/MainHeader';
import Links from './components/Links';
import SELECTORS from 'store/selectors';


const Main = ({ isAuth }) => {
  return ( 
    <section>
      <MainHeader />
      <Links 
        isAuth={isAuth}
      />
    </section>
   );
}

Main.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isAuth: SELECTORS.user.getIsAuth(state),
});
 
export default connect(mapStateToProps)(Main);