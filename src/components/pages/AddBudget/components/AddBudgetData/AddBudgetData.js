import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import BudgetForm from 'components/common/BudgetForm';
import { TYPE_ } from 'utils/budget.statuses';
import API from 'store/api';

const AddBudgetData = ({ token }) => {

  const { data: categories } = useQuery('budget_categories', API.budget.getCategories, { suspense: true });

  const initialValues = useMemo(() => {
    const values = {
      name: '',
      type: TYPE_.monthly,
      date: '',
      totalAmount: 0,
    };
    categories.forEach(c => {
      values[c._id] = 0;
    });

    return values;
  }, [categories]);

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