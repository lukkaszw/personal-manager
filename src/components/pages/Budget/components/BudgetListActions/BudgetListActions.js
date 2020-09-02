import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useStyles } from './BudgetListActions.styles';
import ActionsPanel from 'components/common/ActionsPanel';
import { TYPE } from 'utils/budget.statuses';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const BudgetListActions = ({ type, onChangeType }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const handleChangeType = useCallback((e) => onChangeType(e.target.value), [onChangeType]);

  return ( 
    <ActionsPanel>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        component={Link}
        to="/budget/add"
      >
        {t('add budget')}
      </Button>

      <FormControl 
        className={classes.catSelect}
      >
        <Select
          className={classes.input}
          id="budget-type"
          value={type}
          onChange={handleChangeType}
        >
          <MenuItem
            className={classes.typeOption}
            value={'all'}
          >
            {t('All')}
          </MenuItem>
          {
            Object.entries(TYPE).map(([key, value]) => (
              <MenuItem 
                key={key}
                className={classes.typeOption}
                value={value}
              >
                {t(value)}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </ActionsPanel>
  );
}

BudgetListActions.propTypes = {
  type: PropTypes.string.isRequired,
  onChangeType: PropTypes.func.isRequired,
};
 
export default BudgetListActions;