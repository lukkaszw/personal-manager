import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import API from 'store/api';
import AskDialog from 'components/common/AskDialog';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Pagination from 'components/common/Pagination';
import { useQuery, useMutation, queryCache } from 'react-query';
import { useStyles, CartsWrapper, Title, Description, ImportantSign, ModifyAt } from './NotesList.styles';
import { PRIORITY } from 'utils/notes.statuses';
import { pages } from 'utils/pages.config';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import moment from 'moment';
import { toast } from 'react-toastify';

const NotesList = ({ 
  token, page, priority, category, 
  onChangePage,
}) => {
  const classes = useStyles();

  const { data: notesData } = useQuery(
    ['notes', { token, page, priority, category }], 
    API.notes.getNotes, 
    { suspense: true, cacheTime: 0 }
  );
  const { t } = useTranslation();

  const [deleteNote, { isLoading: isDeleteLoading }] = useMutation(API.notes.deleteNote, {
    onSuccess: data => {
      queryCache.invalidateQueries('notes');
      toast.success(`${t('You have deleted note')} ${data.title}`);
    },
    onError: () => {
      toast.error(`${t('You can not delete a note now')}! ${t('Try again later')}!`);
    }
  });

  const [noteToDelete, setDeletingNote] = useState(null);
  const handleCloseDeleteModal = useCallback(() => setDeletingNote(null), [setDeletingNote]);
  const handleDeleteNote = useCallback(() => {
    deleteNote({ id: noteToDelete._id, token });
    handleCloseDeleteModal();
  }, [deleteNote, noteToDelete, handleCloseDeleteModal, token]);

  const deleteNoteTitle = noteToDelete ? noteToDelete.title : '';

  return ( 
    <div>
      <CartsWrapper>
        {
          notesData.notes.map(note => (
            <Card 
              className={clsx([classes.cart, classes[PRIORITY[note.priority]]])}
              key={note._id}
            >
              {
                note.priority === 2 &&
                  <ImportantSign>
                    {t('IMPORTANT')}
                  </ImportantSign>
              }
              <CardContent>
                <ModifyAt>{moment(note.updatedAt).format('DD.MM.YYYY')}</ModifyAt>
                <Title>{note.title}</Title>
                <Description>{note.description}</Description>
              </CardContent>
              <CardActions 
                className={classes.cartsActions}
              >
                <Button 
                  variant="contained"
                  size="small"
                  color="primary"
                  component={Link}
                  to={`/notes/${note._id}`}
                  disabled={isDeleteLoading}
                >
                  {t('Read')}
                </Button>
                <Button 
                  variant="contained"
                  size="small"
                  color="secondary"
                  disabled={isDeleteLoading}
                  onClick={() => setDeletingNote(note)}
                >
                  {t('Delete')}
                </Button>
              </CardActions>
            </Card>
          ))
        }
      </CartsWrapper>
      <Pagination 
        count={Math.ceil(notesData.amount/pages.notes.maxPerPage)}
        page={page}
        onChange={onChangePage}
      />
      <AskDialog 
        isOpen={!!noteToDelete}
        onClose={handleCloseDeleteModal}
        question={`${t('Are you sure you want to delete note')} ${deleteNoteTitle}`}
        noAnswear={t('No')}
        yesAnswear={t('Yes')}
        onNoAction={handleCloseDeleteModal}
        onYesAction={handleDeleteNote}
      />
    </div>
   );
}

NotesList.propTypes = {
  token: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  priority: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onChangePage: PropTypes.func.isRequired,
};
 
export default NotesList;