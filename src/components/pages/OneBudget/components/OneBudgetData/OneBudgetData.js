import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { useQuery } from 'react-query';
import API from 'store/api';
import { Root, TransactionsWrapper } from './OneBudgetData.styles';
import CategoryList from '../CategoryList';
import TransactionsList from '../TransactionsList';
import BudgetActions from '../BudgetActions';
import AddTransaction from 'components/pages/AddTransaction';
import EditTransaction from 'components/pages/EditTransaction';

const OneBudgetData = ({ 
  token, id,
  selectedCategory, selectedSubcategory,
  onChangeCategory, onChangeSubcategory, onResetQueries }) => {

  const { data: budgetData } = useQuery([
    'budget', { id, token }], 
    API.budget.getBudget, 
    { suspense: true });

  const { data: transactions } = useQuery([
    'transactions', 
    { token, budgetId: id },
  ], API.transactions.getTransactions,  
  { suspense: true, cacheTime: 0 });


  const categories = useMemo(() => budgetData.budgetedCategories.map(cat => {
    const expenses = transactions
      .filter(transaction => (transaction.category && transaction.category._id === cat.category._id))
      .reduce((prevAmount, nextTransaction) => {
        return prevAmount + nextTransaction.cost;
      }, 0);

    const balance = (expenses / cat.amount) * 100;

    return { ...cat, expenses, balance };
  }), [budgetData, transactions]);


  const budget = useMemo(() => {
    const expenses = transactions.reduce((prevAmount, nextTrans) => {
      return prevAmount + nextTrans.cost;
    }, 0);

    const balance = (expenses/budgetData.totalAmount) * 100;
    const savings = budgetData.totalAmount - expenses;

    return {
      ...budgetData,
      expenses,
      expensesBalance: balance,
      savings,
      savingsBalance: 100 - balance,
    }
  }, [budgetData, transactions]);

  return ( 
    <Root>
      <BudgetActions 
        id={id}
        token={token}
      />
      <TransactionsWrapper>
        <CategoryList
          budgetData={budget}
          categories={categories}
          selectedCategory={selectedCategory}
          onChangeCategory={onChangeCategory}
          onChangeSubcategory={onChangeSubcategory}
          onResetQueries={onResetQueries}
        />
        <TransactionsList
          budgetId={id} 
          token={token}
          transactions={transactions}
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
        />
      </TransactionsWrapper>
      <Route path={'/budget/:id/add-transaction'}>
        <AddTransaction 
          budgetId={id}
          categories={budgetData.budgetedCategories}
        />
      </Route>
      <Route path={'/budget/:id/edit_transaction/:transactionId'}>
        <EditTransaction 
          token={token}
          categories={budgetData.budgetedCategories}
        />
      </Route>
    </Root>
   );
}

OneBudgetData.propTypes = {
  token: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  selectedSubcategory: PropTypes.string.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  onChangeSubcategory: PropTypes.func.isRequired,
  onResetQueries: PropTypes.func.isRequired,
};
 
export default OneBudgetData;