import React from 'react';
import PropTypes from 'prop-types';
import TransactionForm from 'components/common/TransactionForm';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import API from 'store/api';

const EditTransactionData = ({ token, categories }) => {

  const { id: budgetId, transactionId } = useParams();

  const { data } = useQuery([
    'transaction', 
    { id: transactionId, token }
    ], 
      API.transactions.getTransaction, 
    { suspense: true }
  );

  const initialValues = {
    description: data.description,
    cost: data.cost,
    date: data.date,
    category: data.subcategory ? data.subcategory._id : 'others',
  }

  return ( 
    <TransactionForm
      id={transactionId}
      budgetId={budgetId} 
      initialValues={initialValues}
      isForEdit={true}
      apiAction={API.transactions.editTransaction}
      categories={categories}
      token={token}
    />
   );
}

EditTransactionData.propTypes = {
  categories: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
};
 
export default EditTransactionData;