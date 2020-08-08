import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import SELECTORS from 'store/selectors';

const OneBudgetData = React.lazy(() => import('./components/OneBudgetData'));


const OneBudget = ({ token }) => {
  const { id } = useParams();


  return ( 
    <SuspenseErrorBundary>
      <OneBudgetData 
        token={token}
        id={id}
      />
    </SuspenseErrorBundary>
   );
}

OneBudget.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(OneBudget);