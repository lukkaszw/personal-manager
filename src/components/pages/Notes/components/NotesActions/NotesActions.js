import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Root, Actions, ActionsPart, Categories } from './NotesActions.styles';
import { useStyles } from './NotesActions.styles';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import API from 'store/api';

const NotesActions = ({ 
  token,
  category, priority,
  onChangeCategory, onChangePriority, 
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const { data: notesCategories } = useQuery(['notesCategories', { token }], API.notes.getNotesCategories, { suspense: true });
  const handleChangeCategory = useCallback((e) => onChangeCategory(e.target.value), [onChangeCategory]);

  return ( 
    <Root>
      <Actions>
        <ActionsPart>
          <ButtonGroup
            size="small" 
            aria-label="priority change"
          >
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={`/notes/add`}
            >
              <FontAwesomeIcon className={classes.icon} icon={faPlus}/>
              {t('add note')}
            </Button>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={`/notes_cat/add`}
            >
              <FontAwesomeIcon className={classes.icon} icon={faPlus}/>
              {t('add category')}
            </Button>
          </ButtonGroup>
        </ActionsPart>
        <ActionsPart>
          <Categories>
            {
              category !== 'all' &&
                <Button
                  size='small'
                  component={Link}
                  color="primary"
                  to={`/notes_cat/edit/${category}`}
                >
                  {t('Edit')}
                </Button>
            }
            <FormControl 
              className={classes.catSelect}
            >
              <Select
                className={classes.input}
                id="category"
                value={category}
                onChange={handleChangeCategory}
              >
                <MenuItem
                  className={classes.catOption}
                  value={'all'}
                >
                  {t('All')}
                </MenuItem>
                {
                  notesCategories.map(category => (
                    <MenuItem 
                      key={category._id}
                      className={classes.catOption}
                      value={category._id}
                    >
                      {category.name}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Categories>
        </ActionsPart>
      </Actions>
      <ButtonGroup
        className={classes.btnGroup}
        size="small" 
        aria-label="priority change"
      >
        <Button 
          className={classes.btn}
          variant={priority === 'all' ? 'contained' : 'outlined'}
          color={priority === 'all' && 'primary'}
          onClick={() => onChangePriority('all')}
        >
          {t('All')}
        </Button>
        <Button
          variant={priority === 'normal' ? 'contained' : 'outlined'}
          color={priority === 'normal' && 'primary'}
           className={classes.btn}
          onClick={() => onChangePriority('normal')}
        >
          {t('Normal')}
        </Button>
        <Button
          variant={priority === 'high' ? 'contained' : 'outlined'}
          color={priority === 'high' && 'primary'}
          className={classes.btn}
          onClick={() => onChangePriority('high')}
        >
          {t('Important')}
        </Button>
      </ButtonGroup>
    </Root>
   );
}

NotesActions.propTypes = {
  token: PropTypes.string.isRequired,
  category: PropTypes.string,
  priority: PropTypes.string.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  onChangePriority: PropTypes.func.isRequired,
};
 
export default NotesActions;