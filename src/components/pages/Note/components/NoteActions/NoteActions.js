import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import LoaderIndicator from 'components/common/LoaderIndicator';
import AskDialog from 'components/common/AskDialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faList } from '@fortawesome/free-solid-svg-icons';
import HideBtn from 'components/common/HideBtn';
import Portal from 'components/layout/Portal';
import { Root, HideBtnWrapper, Panel } from './NoteActions.styles';
import { useMutation } from 'react-query';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import API from 'store/api';
import clsx from 'clsx';

const NoteActions = ({ id, token }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const [deleteNote, { isLoading: isDeleteLoading }] = useMutation(API.notes.deleteNote, {
    onSuccess: data => {
      history.goBack();
      toast.success(`${t('You have deleted a note')} ${data.title}`);
    },
    onError: () => {
      toast.error(`${'Error'}! ${t('You can not delete this note now')}! ${t('Try again later')}!`);
    }
  });

  const [isHide, setIsHide] = useState(false);
  const [isDeletModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleTogglePanel = useCallback(() => setIsHide(prevIsHide => !prevIsHide), [setIsHide]);
  const handleOpenDeleteModal = useCallback(() => setIsDeleteModalOpen(true), [setIsDeleteModalOpen]);
  const handleCloseDeleteModal = useCallback(() => setIsDeleteModalOpen(false), [setIsDeleteModalOpen]);
  const handleDeleteNote = useCallback(() => {
    deleteNote({ id, token });
    handleCloseDeleteModal();
  }, [deleteNote, handleCloseDeleteModal, id, token]);

  return ( 
    <Portal domId="modals">
      <LoaderIndicator isOpen={isDeleteLoading} />
      <Root>
        <HideBtnWrapper>
          <HideBtn
            ariaLabel={t('open/close settings')}
            onClick={handleTogglePanel}
            isHide={isHide}
          />
        </HideBtnWrapper>
    
        <Panel
          className={clsx([isHide && 'hide'])}
        >
          <IconButton
            aria-label={t('back to list')}
            component={Link}
            to='/notes'
            disabled={isDeleteLoading}
          >
            <FontAwesomeIcon 
              className="neutral"
              icon={faList}
            />
          </IconButton>
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
          <AskDialog 
            isOpen={isDeletModalOpen}
            onClose={handleCloseDeleteModal}
            question={t('Do you want to delete this note?')}
            noAnswear={t('No')}
            yesAnswear={t('Yes')}
            onNoAction={handleCloseDeleteModal}
            onYesAction={handleDeleteNote}
          />
        </Panel>
      </Root>
    </Portal>
   );
}

NoteActions.propTypes = {
  id: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
}
 
export default NoteActions;