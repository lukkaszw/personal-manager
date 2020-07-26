import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import LoaderIndicator from 'components/common/LoaderIndicator';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Root, ButtonsWrapper } from './NoteActions.styles';
import { useMutation } from 'react-query';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import API from 'store/api';

const NoteActions = ({ id, token }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const [deleteNote, { isLoading: isDeleteLoading }] = useMutation(API.notes.deleteNote, {
    onSuccess: data => {
      history.goBack();
      toast.success(`${t('You have deleted note')} ${data.title}`);
    },
    onError: () => {
      toast.error(`${t('You can not delete a note now')}! ${t('Try again later')}!`);
    }
  });

  const [isDeletModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleOpenDeleteModal = useCallback(() => setIsDeleteModalOpen(true), [setIsDeleteModalOpen]);
  const handleCloseDeleteModal = useCallback(() => setIsDeleteModalOpen(false), [setIsDeleteModalOpen]);
  const handleDeleteNote = useCallback(() => {
    deleteNote({ id, token });
    handleCloseDeleteModal();
  }, [deleteNote, handleCloseDeleteModal, id, token]);

  return ( 
    <>
      <LoaderIndicator isOpen={isDeleteLoading} />
      <Root>
        <IconButton
          aria-label={t('edit')}
          component={Link}
          to={`/notes/edit/${id}`}
          disabled={isDeleteLoading}
        >
          <FontAwesomeIcon 
            className="neutral"
            icon={faEdit}
          />
        </IconButton>
        <IconButton
          aria-label={t('delete')}
          onClick={handleOpenDeleteModal}
          disabled={isDeleteLoading}
        >
          <FontAwesomeIcon 
            className='negative'
            icon={faTrash}
          />
        </IconButton>
        <Dialog 
          open={isDeletModalOpen}
          onClose={handleCloseDeleteModal}
          aria-labelledby="delete-note-question"
        >
          <DialogTitle id="delete-note-question">
            {t('Do you want to delete this note?')}
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
                onClick={handleDeleteNote}
              >
                {t('Yes')}
              </Button>
            </ButtonsWrapper>
          </DialogContent>
        </Dialog>
      </Root>
    </>
   );
}

NoteActions.propTypes = {
  id: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
}
 
export default NoteActions;