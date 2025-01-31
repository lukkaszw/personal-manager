import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Pagination from 'components/common/Pagination';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListContainer from 'components/common/ListContainer';
import NoDataFound from 'components/common/NoDataFound';
import { useQuery } from 'react-query';
import { TYPE } from 'utils/budget.statuses';
import { useStyles } from './BudgetListData.styles';
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

  const dataNotFound = data.budgets.length === 0;

  return ( 
    <div>
      <ListContainer>
        <List>
          {
            dataNotFound ?
              <NoDataFound />
              :
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
      </ListContainer>
      <Pagination 
        hide={dataNotFound}
        count={Math.ceil(data.amount/pages.budget.maxPerPage)}
        page={page}
        onChange={onChangePage}
      />
    </div>
   );
}

BudgetListData.propTypes = {
  token: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};
 
export default BudgetListData;