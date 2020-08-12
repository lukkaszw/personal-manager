import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import PropTypes from 'prop-types';
import SELECTORS from 'store/selectors';

const EditBudgetData = React.lazy(() => import('./components/EditBudgetData'));

const EditBudget = ({ token }) => {
  const { id } = useParams();

  return ( 
    <SuspenseErrorBundary>
      <EditBudgetData 
        token={token}
        id={id}
      />
    </SuspenseErrorBundary>
   );
}

EditBudget.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(EditBudget);