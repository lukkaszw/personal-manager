import React from 'react';
import { connect } from 'react-redux';
import TransactionForm from 'components/common/TransactionForm';
import PropTypes from 'prop-types';
import SELECTORS from 'store/selectors';
import API from 'store/api';


const AddTransaction = ({ categories, token, budgetId, subcategoryId }) => {

  const initialValues = {
    description: '',
    category: subcategoryId || 'others',
    cost: 0,
  };

  return ( 
      <TransactionForm 
        budgetId={budgetId}
        categories={categories}
        token={token}
        initialValues={initialValues}
        apiAction={API.transactions.addTransation}
      />
   );
}

AddTransaction.propTypes = {
  token: PropTypes.string.isRequired,
  budgetId: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  subcategoryId: PropTypes.string,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
  subcategoryId: SELECTORS.transactions.getQuerySubcategory(state),
});
 
export default connect(mapStateToProps)(AddTransaction);