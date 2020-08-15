import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Root, ButtonsWrapper } from './TransactionsActions.styles';
import { useTranslation } from 'react-i18next';


const TransactionsActions = ({ checkedTransactions }) => {

  const { t } = useTranslation();

  return ( 
    <Root>
      <div>
        {checkedTransactions.length} {t('selected')}
      </div>
      <ButtonsWrapper>
        <IconButton
          aria-label={t('Delete transactions')}
          size="small"
          disabled={checkedTransactions.length === 0}
          color="secondary"
        >
          <FontAwesomeIcon icon={faTrash}/>
        </IconButton>
        <IconButton
          aria-label={t('Edit transaction')}
          size="small"
          disabled={checkedTransactions.length !== 1}
          color="primary"
        >
          <FontAwesomeIcon icon={faEdit}/>
        </IconButton>
      </ButtonsWrapper>
    </Root>
   );
}

TransactionsActions.propTypes = {
  checkedTransactions: PropTypes.array.isRequired,
};
 
export default TransactionsActions;