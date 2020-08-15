import React from 'react';
import { connect } from 'react-redux';
import TransactionForm from 'components/common/TransactionForm';
import PropTypes from 'prop-types';
import SELECTORS from 'store/selectors';
import API from 'store/api';


const AddTransaction = ({ categories, token, budgetId }) => {

  const initialValues = {
    description: '',
    category: 'others',
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
  budgetId: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(AddTransaction);