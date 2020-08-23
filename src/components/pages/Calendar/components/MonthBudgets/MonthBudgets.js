import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Root, BudgetLink, Description, BtnWrapper } from './MonthBudgets.styles';
import { useTranslation } from 'react-i18next';

const MonthBudgets = ({ budgets, month, year, isAfterNow }) => {

  const { t } = useTranslation();

  return ( 
    <Root>
      <Description>
        { budgets.length > 0 ?
          t('Budgets for this month')
          :
          t('No budgets for this month')
        }
      </Description>
      {
        budgets.map(budget => (
          <BudgetLink key={budget._id}>
            <Link 
              to={`/budget/${budget._id}`}
            >
              <span>
                {budget.name}
              </span>
              <span>
                {budget.expenses}/{budget.totalAmount} zł
              </span>
            </Link>
          </BudgetLink>
        ))
      }
      {
        isAfterNow &&
          <BtnWrapper>
            <Button
              color="secondary"
              variant="contained"
              size="small"
              component={Link}
              to={`/budget/add?month=${month}&year=${year}`}
            >
              {t('Add budget')}
            </Button>
          </BtnWrapper>
      }
    </Root>
   );
}

MonthBudgets.propTypes = {
  budgets: PropTypes.array.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  isAfterNow: PropTypes.bool.isRequired,
};
 
export default MonthBudgets;