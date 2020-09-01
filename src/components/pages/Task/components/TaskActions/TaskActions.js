import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import LoaderIndicator from 'components/common/LoaderIndicator';
import AskDialog from 'components/common/AskDialog';
import { faCheck, faTimes, faTrash, faEdit, faList  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskActionsRoot, useStyles } from '../../Task.styles';
import { useTranslation } from 'react-i18next';
import { useMutation, queryCache } from 'react-query';
import { toast } from 'react-toastify';
import API from 'store/api';
import clsx from 'clsx';

const TaskActions = ({ id, token, status }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();
  const [isDeletModalOpen, setIsDeleteModalOpen] = useState(false);

  const [updateTask, { isLoading: isUpdateLoading }] = useMutation(API.tasks.updateTask, {
    onSuccess: data => {
      queryCache.setQueryData(['task', { id, token }], data);
    },
  });

  const [deleteTask, { isLoading: isDeleteLoading }] = useMutation(API.tasks.deleteTask, {
    onSuccess: data => {
      history.goBack();
      toast.success(`${t('You have deleted task')} ${data.title}`);
    },
    onError: () => {
      toast.error(`${'Error'}! ${t('You can not delete a task now')}! ${t('Try again later')}!`);
    }
  });
 
  const handleSetTaskAsDone = useCallback(() => {
    const data = { status: 2 };
    updateTask({ id, token, data });
  }, [updateTask, id, token]);

  const handleSetTaskAsFailed = useCallback(() => {
    const data = { status: 3 };
    updateTask({ id, token, data });
  }, [updateTask, id, token]);

  const handleOpenDeleteModal = useCallback(() => setIsDeleteModalOpen(true), [setIsDeleteModalOpen]);
  const handleCloseDeleteModal = useCallback(() => setIsDeleteModalOpen(false), [setIsDeleteModalOpen]);

  const handleDeleteTask = useCallback(() => {
    handleCloseDeleteModal();
    deleteTask({ id, token });
  }, [deleteTask, id, token, handleCloseDeleteModal]);

  const isSending = isUpdateLoading || isDeleteLoading;

  return ( 
    <TaskActionsRoot>
      <LoaderIndicator isOpen={isSending}/>
      <IconButton
        className={classes.iconButton}
        aria-label={t('back to list')}
        component={Link}
        to='/tasks'
        disabled={isSending}
      >
        <FontAwesomeIcon 
          className={clsx('neutral', isSending && 'disabled')}
          icon={faList}
        />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        aria-label={t('done')}
        onClick={handleSetTaskAsDone}
        disabled={isSending || (status === 2)}
      >
        <FontAwesomeIcon 
          className='positive'
          icon={faCheck}
        />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        aria-label={t('failed')}
        onClick={handleSetTaskAsFailed}
        disabled={isSending || (status === 3)}
      >
        <FontAwesomeIcon 
          className='negative'
          icon={faTimes}
        />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        aria-label={t('edit')}
        component={Link}
        to={`/tasks/edit/${id}`}
        disabled={isSending}
      >
        <FontAwesomeIcon 
          className={clsx('neutral', isSending && 'disabled')}
          icon={faEdit}
        />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        aria-label={t('delete')}
        onClick={handleOpenDeleteModal}
        disabled={isSending}
      >
        <FontAwesomeIcon 
          className='negative'
          icon={faTrash}
        />
      </IconButton>
      <AskDialog 
        isOpen={isDeletModalOpen}
        onClose={handleCloseDeleteModal}
        question={t('Do you want to delete this task?')}
        noAnswear={t('No')}
        yesAnswear={t('Yes')}
        onNoAction={handleCloseDeleteModal}
        onYesAction={handleDeleteTask}
      />
    </TaskActionsRoot>
   );
}

TaskActions.propTypes = {
  id: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
};
 
export default TaskActions;