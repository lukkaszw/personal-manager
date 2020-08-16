import React from 'react';
import { Root, Item, ItemName, ItemValue } from './BudgetSummary.styles';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const BudgetSummary = ({ expenses, expensesBalance, savings, savingsBalance }) => {

  const { t } = useTranslation();

  return ( 
    <Root>
      <Item>
        <ItemName>
          {t('Expenses')}:  
        </ItemName>
        <ItemValue warning={true}>
          {expenses.toFixed(2)} zł ({expensesBalance.toFixed(0)}%)
        </ItemValue>
      </Item>
      <Item>
        <ItemName>
          {t('Left')}:  
        </ItemName>
        <ItemValue
           warning={savings < 0}
        >
          {savings.toFixed(2)} zł ({savingsBalance.toFixed(0)}%)
        </ItemValue>
      </Item>
    </Root>
   );
} 

BudgetSummary.propTypes = {
  expenses: PropTypes.number.isRequired,
  expensesBalance: PropTypes.number.isRequired,
  savings: PropTypes.number.isRequired,
  savingsBalance: PropTypes.number.isRequired,
};


export default BudgetSummary;