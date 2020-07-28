import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import DeleteNoteCatDialog from '../DeleteNoteCatDialog';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Root } from './DeleteNoteCat.styles';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import API from 'store/api';

const DeleteNoteCat = ({ token, id }) => {

  const history = useHistory();
  const { t } = useTranslation();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteModalOpen = useCallback(() => setIsDeleteModalOpen(true), [setIsDeleteModalOpen]);
  const handleDeleteModalClose = useCallback(() => setIsDeleteModalOpen(false), [setIsDeleteModalOpen]);

  const [deleteCategory, { isLoading: isSending }] = useMutation(API.notes.deleteNoteCategory, {
    onSuccess: data => {
      history.goBack();
      toast.success(`${t('You have deleted category')} ${data.name}!`);
    },
    onError: data => {
      toast.error(`${t('You can not delete this category now')}! ${t('Try again later')}!`);
    }
  });

  const handleDeleteCategory = useCallback(
    () => deleteCategory({ id, token }), 
    [deleteCategory, id, token]
  );
  const handleDeleteCategoryWihNotes = useCallback(
    () => deleteCategory({ id, token, withNotes: true }), 
    [deleteCategory, id, token]
  );

  return ( 
    <Root>
      <Button 
        variant="contained"
        color="secondary"
        size="small"
        onClick={handleDeleteModalOpen}
      >
        {t('Delete category')}
      </Button>
      <DeleteNoteCatDialog 
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
        onYes={handleDeleteCategory}
        onYesWithRelatedNotes={handleDeleteCategoryWihNotes}
        isSending={isSending}
        disabled={isSending}
      />
    </Root>
   );
}

DeleteNoteCat.propTypes = {
  token: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
 
export default DeleteNoteCat;