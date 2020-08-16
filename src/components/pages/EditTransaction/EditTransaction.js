import React from 'react';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import PropTypes from 'prop-types';

const EditTransactionData = React.lazy(() => import('./components/EditTransactionData'));

const EditTransaction = ({ token, categories }) => {
  return ( 
    <SuspenseErrorBundary>
      <EditTransactionData 
        categories={categories}
        token={token}
      />
    </SuspenseErrorBundary>
   );
}

EditTransaction.propTypes = {
  categories: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
};
 
export default EditTransaction;