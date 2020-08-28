import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Pagination from 'components/common/Pagination';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useQuery } from 'react-query';
import { TYPE } from 'utils/budget.statuses';
import { useStyles, Root } from './BudgetListData.styles';
import { pages } from 'utils/pages.config';
import { useTranslation } from 'react-i18next';
import API from 'store/api';


const BudgetListData = ({ token, type, page, onChangePage  }) => {

  const { t } = useTranslation();

  const classes = useStyles();
  const { data } = useQuery(
    ['budgets', { token, page, type }], 
    API.budget.getBudgets, 
    { suspense: true, cacheTime: 0 }
  );

  return ( 
    <Root>
      <List>
        {
          data.budgets.map(budget => {
            const text = TYPE[budget.type] === 'monthly' ?
              `${t('Budget for')} ${t(budget.month)} ${budget.year}` 
              :
              `${t('occasional budget')}`;

            
            return (
              <ListItem 
                className={classes.listItem}
                key={budget._id} 
                button  
                component={Link} 
                to={`/budget/${budget._id}`}
              >
                <ListItemText 
                  primary={budget.name} 
                  secondary={text}
                />
              </ListItem>
            )
          })
        }
      </List>
      <Pagination 
        count={Math.ceil(data.amount/pages.budget.maxPerPage)}
        page={page}
        onChange={onChangePage}
      />
    </Root>
   );
}

BudgetListData.propTypes = {
  token: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};
 
export default BudgetListData;