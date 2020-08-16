import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Root, Sum } from './TransactionsList.styles';
import TransactionsActions from '../TransactionsActions';
import Table from '@material-ui/core/Table';
import Checkbox from '@material-ui/core/Checkbox';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TransactionRow from '../TransactionRow';
import { useTranslation } from 'react-i18next';
import useCheckedTransactions from './useCheckedTransactions';

const TransactionsList = ({ token, budgetId, selectedCategory, selectedSubcategory, transactions }) => {

  const { t, i18n } = useTranslation();

  const { filteredTransactions, transactionsSum } = useMemo(() => {
    let filteredTransactions = transactions;

    if(selectedCategory !== 'all') {
      if(selectedCategory === 'others') {
        filteredTransactions = transactions.filter(transaction => !transaction.category);
      } else if (selectedSubcategory === 'all') {
        filteredTransactions = transactions.filter(transaction => transaction.category && transaction.category._id === selectedCategory);
      } else {
        filteredTransactions = transactions.filter(transaction => transaction.subcategory && transaction.subcategory._id === selectedSubcategory)
      }
    }

    const transactionsSum = filteredTransactions.reduce((prevAmount, nextTransaction) => {
      return prevAmount + nextTransaction.cost;
    }, 0);

    return { filteredTransactions, transactionsSum };
  }, [transactions, selectedSubcategory, selectedCategory]);

  const { 
    checkedTransactions,
    handleToggleAllTransactions,
    handleToggleTransaction } = useCheckedTransactions(filteredTransactions);

    const lang = i18n.language === 'pl-PL' ? i18n.language : 'eng-Gb';

  return ( 
    <Root>
      <TransactionsActions
        budgetId={budgetId} 
        token={token}
        checkedTransactions={checkedTransactions}
      />
      <Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" width="70px">
              <Checkbox
                checked={checkedTransactions.length >= filteredTransactions.length}
                onChange={handleToggleAllTransactions}
              />
            </TableCell>
            <TableCell align="center" width="100px">{t('Cost')} (zł)</TableCell>
            <TableCell align="left">{t('Description')}</TableCell>
            <TableCell align="center" width="80px">{t('Category')}</TableCell>
            <TableCell align="center" width="100px">{t('Subcategory')}</TableCell>
            <TableCell align="center" width="100px">{t('Date')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            filteredTransactions.map(transaction => (
              <TransactionRow 
                key={transaction._id}
                {...transaction}
                checked={checkedTransactions.includes(transaction._id)}
                onChange={() => handleToggleTransaction(transaction._id)}
                lang={lang}
              />
            ))
          }
        </TableBody>
      </Table>
      <Sum>
          {t('Sum')}: {transactionsSum.toFixed(2)} zł
      </Sum>
    </Root>
   );
}

TransactionsList.propTypes = {
  budgetId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  transactions: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  selectedSubcategory: PropTypes.string.isRequired,
};
 
export default TransactionsList;