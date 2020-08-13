import React from 'react';
import { connect } from 'react-redux';
import TransactionForm from 'components/common/TransactionForm';
import PropTypes from 'prop-types';
import SELECTORS from 'store/selectors';


const AddTransaction = ({ categories, token }) => {

  const initialValues = {
    description: '',
    category: 'others',
    cost: 0,
  };

  return ( 
      <TransactionForm 
        categories={categories}
        token={token}
        initialValues={initialValues}
        apiAction={() => console.log('add transaction')}
      />
   );
}

AddTransaction.propTypes = {
  categories: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(AddTransaction);