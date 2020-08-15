import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { useQuery } from 'react-query';
import API from 'store/api';
import { Root, TransactionsWrapper } from './OneBudgetData.styles';
import CategoryList from '../CategoryList';
import TransactionsList from '../TransactionsList';
import BudgetActions from '../BudgetActions';
import AddTransaction from 'components/pages/AddTransaction';

const OneBudgetData = ({ token, id }) => {

  const { data: budgetData } = useQuery(['budget', { id, token }], API.budget.getBudget, { suspense: true });

  return ( 
    <Root>
      <BudgetActions 
        id={id}
      />
      <TransactionsWrapper>
        <CategoryList
          budgetData={budgetData}
        />
        <TransactionsList />
      </TransactionsWrapper>
      <Route path={`/budget/:id/add-transaction`}>
        <AddTransaction 
          budgetId={id}
          categories={budgetData.budgetedCategories}
        />
      </Route>
    </Root>
   );
}

OneBudgetData.propTypes = {
  token: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
 
export default OneBudgetData;