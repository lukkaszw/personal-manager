import React from 'react';
import { connect } from 'react-redux';
import SuspenseErroBundary from 'components/common/SuspenseErrorBundary';
import PropTypes from 'prop-types';
import SELECTORS from 'store/selectors';

const AddBudgetData= React.lazy(() => import('./components/AddBudgetData'));

const AddBudget = ({ token }) => {

  return ( 
    <SuspenseErroBundary>
      <AddBudgetData 
        token={token}
      />
    </SuspenseErroBundary>
   );
}

AddBudget.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(AddBudget);