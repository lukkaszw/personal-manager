import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoaderIndicator from 'components/common/LoaderIndicator';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AskDialog from 'components/common/AskDialog';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Root, ButtonsWrapper } from './TransactionsActions.styles';
import { useTranslation } from 'react-i18next';
import { useMutation, queryCache } from 'react-query';
import { toast } from 'react-toastify';
import API from 'store/api';


const TransactionsActions = ({ checkedTransactions, token, budgetId }) => {

  const { t } = useTranslation();
  const [wantToDelete, setWantToDelete] = useState(false);
  const history = useHistory();
  
  const [deleteTransactions, { isLoading: isDeleting }] = useMutation(API.transactions.deleteMany, {
    onSuccess: data => {
      queryCache.invalidateQueries('transactions', { refetchActive: true }) 
      toast.success(`${t('You have deleted transactions')}!`);
    },
    onError: data => {
      toast.error(`${t('You can not delete transactions now')}! ${t('Try again later')}!`);
    }
  });

  const handleWantToDelete = useCallback(() => setWantToDelete(true), [setWantToDelete]);
  const handleCancelToDelete = useCallback(() => setWantToDelete(false), [setWantToDelete]);

  const handleDeleteTransactions = useCallback(() => {
      deleteTransactions({ transactions: checkedTransactions, token });
      handleCancelToDelete();
    },
    [checkedTransactions, token, deleteTransactions, handleCancelToDelete],
  );

  const goToEditPage = useCallback(() => 
    history.push(`/budget/${budgetId}/edit_transaction/${checkedTransactions[0]}`),
    [checkedTransactions, budgetId, history]
  );

  return ( 
    <div>
      <LoaderIndicator 
        size="small"
        color="red"
        isOpen={isDeleting}
      />
      <AskDialog 
        isOpen={wantToDelete}
        onClose={handleCancelToDelete}
        question={t('Do you really want to delete selected transactions?')}
        yesAnswear={t('Yes')}
        noAnswear={t('No')}
        onYesAction={handleDeleteTransactions}
        onNoAction={handleCancelToDelete}
      />
      <Root>
        <div>
          {checkedTransactions.length} {t('selected')}
        </div>
        <ButtonsWrapper>
          <IconButton
            aria-label={t('Delete transactions')}
            size="small"
            onClick={handleWantToDelete}
            disabled={checkedTransactions.length === 0 || isDeleting}
            color="secondary"
          >
            <FontAwesomeIcon icon={faTrash}/>
          </IconButton>
          <IconButton
            aria-label={t('Edit transaction')}
            size="small"
            onClick={goToEditPage}
            disabled={checkedTransactions.length !== 1 || isDeleting}
            color="primary"
          >
            <FontAwesomeIcon icon={faEdit}/>
          </IconButton>
        </ButtonsWrapper>
      </Root>
    </div>

   );
}

TransactionsActions.propTypes = {
  token: PropTypes.string.isRequired,
  budgetId: PropTypes.string.isRequired,
  checkedTransactions: PropTypes.array.isRequired,
};
 
export default TransactionsActions;