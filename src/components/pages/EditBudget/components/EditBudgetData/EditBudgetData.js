import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import BudgetForm from 'components/common/BudgetForm';
import { useQuery } from 'react-query';
import API from 'store/api';

const EditBudgetData = ({ token, id }) => {

  const { data: budget } = useQuery(['budget', 
    { id, token }], 
    API.budget.getBudget, 
    { suspense: true }
  );

  const { data: categories } = useQuery('budget_categories', API.budget.getCategories, { suspense: true });

  
  const initialValues = useMemo(() => {
    const values = {
      name: budget.name,
      type: budget.type,
      date: budget.date,
      totalAmount: budget.totalAmount,
    };

    categories.forEach(cat => {
      const matchedCategory = budget.budgetedCategories.find(c => c.category._id === cat._id);
      values[cat._id] = matchedCategory ? matchedCategory.amount : 0;
    });

    return values;
  }, [categories, budget]);


  return ( 
    <BudgetForm 
      id={id}
      token={token}
      initialValues={initialValues}
      isForEdit={true}
      categories={categories}
      apiAction={API.budget.editBudget}
    />
   );
}

EditBudgetData.propTypes = {
  id: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};
 
export default EditBudgetData;