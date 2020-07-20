import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import LoaderIndicator from 'components/common/LoaderIndicator';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import { faCheck, faTimes, faTrash, faEdit  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Root, useStyles, ButtonsWrapper } from './TaskActions.styles';
import { useTranslation } from 'react-i18next';
import { useMutation, queryCache } from 'react-query';
import { toast } from 'react-toastify';
import API from 'store/api';
import clsx from 'clsx';

const TaskActions = ({ id, token }) => {
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
      toast.error(`${t('You can not delete a task now')}! ${t('Try again later')}!`);
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
    <Root>
      <LoaderIndicator isOpen={isSending}/>
      <IconButton
        className={classes.iconButton}
        aria-label={t('done')}
        onClick={handleSetTaskAsDone}
        disabled={isSending}
      >
        <FontAwesomeIcon 
          className={clsx('positive', isSending && 'disabled')}
          icon={faCheck}
        />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        aria-label={t('failed')}
        onClick={handleSetTaskAsFailed}
        disabled={isSending}
      >
        <FontAwesomeIcon 
          className={clsx('negative', isSending && 'disabled')}
          icon={faTimes}
        />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        aria-label={t('edit')}
        component={Link}
        to="/tasks"
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
          className={clsx('negative', isSending && 'disabled')}
          icon={faTrash}
        />
      </IconButton>
      <Dialog 
        open={isDeletModalOpen}
        onClose={handleCloseDeleteModal}
        aria-labelledby="delete-question"
      >
        <DialogTitle id="delete-question">
          {t('Do you want to delete this task?')}
        </DialogTitle>
        <DialogContent>
          <ButtonsWrapper>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCloseDeleteModal}
            >
              {t('No')}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDeleteTask}
            >
              {t('Yes')}
            </Button>
          </ButtonsWrapper>
        </DialogContent>
      </Dialog>
    </Root>
   );
}

TaskActions.propTypes = {
  id: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};
 
export default TaskActions;