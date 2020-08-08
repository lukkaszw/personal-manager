import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Root, ActionName } from './BudgetActions.styles';
import { useTranslation } from 'react-i18next';

const BudgetActions = ({ id }) => {
  const { t } = useTranslation();

  return ( 
    <Root>
      <Button
        variant="contained"
        size="small"
        color="primary"
        component={Link}
        to={`/budget/edit/${id}`}
      >
        {t('Edit budget')}
      </Button>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        component={Link}
        to={`/budget/${id}/add-transaction`}
      >
        <FontAwesomeIcon icon={faPlus}/>
        <ActionName>{t('Add transaction')}</ActionName>
      </Button>
    </Root>
   );
}

BudgetActions.propTypes = {
  id: PropTypes.string.isRequired,
};
 
export default BudgetActions;