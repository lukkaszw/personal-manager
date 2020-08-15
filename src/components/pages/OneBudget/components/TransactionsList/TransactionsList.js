import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Root } from './TransactionsList.styles';
import TransactionsActions from '../TransactionsActions';
import Table from '@material-ui/core/Table';
import Checkbox from '@material-ui/core/Checkbox';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import useCheckedTransactions from './useCheckedTransactions';
import API from 'store/api';

const TransactionsList = ({ token, budgetId }) => {

  const { t } = useTranslation();

  const { data } = useQuery([
    'transactions', 
    { token, budgetId },
  ], API.transactions.getTransactions,  { suspense: true, cacheTime: 0 });

  const filteredTransactions = useMemo(() => data.filter(trans => true), [data]);

  const { 
    checkedTransactions,
    handleToggleAllTransactions,
    handleToggleTransaction } = useCheckedTransactions(filteredTransactions);

  return ( 
    <Root>
      <TransactionsActions 
        checkedTransactions={checkedTransactions}
      />
      <Table size="small" >
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={checkedTransactions.length >= filteredTransactions.length}
                onChange={handleToggleAllTransactions}
              />
            </TableCell>
            <TableCell align="right">{t('Cost')} (zł)</TableCell>
            <TableCell align="left">{t('Description')}</TableCell>
            <TableCell align="right">{t('Category')}</TableCell>
            <TableCell align="right">{t('Subcategory')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            filteredTransactions.map(transaction => (
              <TableRow key={transaction._id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={checkedTransactions.includes(transaction._id)}
                    onChange={() => handleToggleTransaction(transaction._id)}
                  />
                </TableCell>
                <TableCell align="right" width="70px">
                  {transaction.cost.toFixed(2)}
                </TableCell>
                <TableCell>
                  {transaction.description}
                </TableCell>
                <TableCell align="right" width="100px">
                  {
                    transaction.category ? t(transaction.category.name) : t('Others')
                  }
                </TableCell>
                <TableCell align="right" width="100px">
                  {
                    transaction.subcategory ? t(transaction.subcategory.name) : t('Others')
                  }
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>  
    </Root>
   );
}

TransactionsList.propTypes = {
  budgetId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};
 
export default TransactionsList;