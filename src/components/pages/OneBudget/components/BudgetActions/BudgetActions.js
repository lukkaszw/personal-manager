import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { Root } from './BudgetActions.styles';
import { useTranslation } from 'react-i18next';

const BudgetActions = ({ id }) => {
  const { t } = useTranslation();

  return ( 
    <Root>
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
    </Root>
   );
}

BudgetActions.propTypes = {
  id: PropTypes.string.isRequired,
};
 
export default BudgetActions;