import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import API from 'store/api';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Pagination from 'components/common/Pagination';
import { useQuery } from 'react-query';
import { useStyles, CartsWrapper, Title, Description, ImportantSign, ModifyAt } from './NotesList.styles';
import { PRIORITY } from 'utils/notes.statuses';
import { pages } from 'utils/pages.config';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import moment from 'moment';

const NotesList = ({ 
  token, page, priority, category, 
  onChangePage,
}) => {
  const classes = useStyles();
  const { data: notesData } = useQuery(['notes', { token, page, priority, category }], API.notes.getNotes, { suspense: true });
  const { t } = useTranslation();

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
                >
                  {t('Read')}
                </Button>
                <Button 
                  variant="contained"
                  size="small"
                  color="secondary"
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