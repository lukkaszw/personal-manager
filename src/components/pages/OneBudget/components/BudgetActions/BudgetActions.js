import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import AskDialog from 'components/common/AskDialog';
import LoaderIndicator from 'components/common/LoaderIndicator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faList } from '@fortawesome/free-solid-svg-icons';
import { Root } from './BudgetActions.styles';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import API from 'store/api';

const BudgetActions = ({ id, token }) => {

  const { t } = useTranslation();
  const history = useHistory();

  const [wantToDelete, setWantToDelete] = useState(false);

  const [deleteBudget, { isLoading: isDeleteLoading }] = useMutation(API.budget.deleteBudget, {
    onSuccess: data => {
      history.push('/budget/list');
      toast.success(`${t('You have deleted a budget')}`);
    },
    onError: () => {
      toast.error(`${t('You can not delete a budget now')}! ${t('Try again later')}!`);
    }
  });

  const handleStartDeleting = useCallback(() => setWantToDelete(true), [setWantToDelete]);
  const handleCancelDeleting = useCallback(() => setWantToDelete(false), [setWantToDelete]);
  
  const handleDeleteTask = useCallback(() => {
    handleCancelDeleting();
    deleteBudget({ id, token });
  }, [deleteBudget, id, token, handleCancelDeleting]);

  return ( 
    <>
      <LoaderIndicator 
          size="small"
          color="red"
          isOpen={isDeleteLoading}
        />
      <AskDialog 
        isOpen={wantToDelete}
        question={t(`Do you want to delete the budget and all related transactions?`)}
        yesAnswear={t('Yes')}
        noAnswear={t('No')}
        onClose={handleCancelDeleting}
        onNoAction={handleCancelDeleting}
        onYesAction={handleDeleteTask}
      />
      <Root>
        <div>
          <IconButton
            aria-label={t('Edit budget')}
            color="primary"
            component={Link}
            to={`/budget/edit/${id}`}
          >
            <FontAwesomeIcon 
              icon={faEdit}
            />
          </IconButton>
          <IconButton
            aria-label={t('Delete budget')}
            color="secondary"
            onClick={handleStartDeleting}
          >
            <FontAwesomeIcon 
              icon={faTrash}
            />
          </IconButton>
        </div>
        <IconButton
          aria-label={t('List of budgets')}
          color="primary"
          component={Link}
          to={'/budget/list'}
        >
          <FontAwesomeIcon 
            icon={faList}
          />
        </IconButton>
      </Root>
    </>
   );
}

BudgetActions.propTypes = {
  id: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};
 
export default BudgetActions;