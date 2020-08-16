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
import TransactionRow from '../TransactionRow';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import useCheckedTransactions from './useCheckedTransactions';
import API from 'store/api';

const TransactionsList = ({ token, budgetId }) => {

  const { t, i18n } = useTranslation();

  const { data } = useQuery([
    'transactions', 
    { token, budgetId },
  ], API.transactions.getTransactions,  { suspense: true, cacheTime: 0 });

  const filteredTransactions = useMemo(() => data.filter(trans => true), [data]);

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
    </Root>
   );
}

TransactionsList.propTypes = {
  budgetId: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};
 
export default TransactionsList;