import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import BudgetForm from 'components/common/BudgetForm';
import { TYPE_ } from 'utils/budget.statuses';
import API from 'store/api';
import queryString from 'query-string';

const AddBudgetData = ({ token }) => {

  
  const { data: categories } = useQuery('budget_categories', API.budget.getCategories, { suspense: true });
  
  const location = useLocation();
  const { month, year } = queryString.parse(location.search);

  const initialValues = useMemo(() => {
    const values = {
      name: '',
      type: TYPE_.monthly,
      date: (month && year) ? `${year}-${month > 9 ? month : `0${month}`}-15` : '',
      totalAmount: 0,
    };
    categories.forEach(c => {
      values[c._id] = 0;
    });

    return values;
  }, [categories, month, year]);

  return ( 
    <BudgetForm 
      apiAction={API.budget.addBudget}
      token={token}
      categories={categories}
      initialValues={initialValues}
    />
   );
}

AddBudgetData.propTypes = {
  token: PropTypes.string.isRequired,
}
 
export default AddBudgetData;