import { connect } from 'react-redux';
import Header from './Header';
import SELECTORS from 'redux/selectors';


const mapStateToProps = (state) => ({
  isAuth: SELECTORS.getIsAuth(state),
});

export default connect(mapStateToProps)(Header);



