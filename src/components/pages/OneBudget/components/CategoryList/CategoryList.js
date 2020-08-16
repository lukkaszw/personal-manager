import React from 'react';
import PropTypes from 'prop-types';
import { Root, SubCatList, CategoryExpenses } from './CategoryList.styles';
import CategoryItem from '../CategoryItem';
import BudgetSummary from '../BudgetSummary';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const CategoryList = ({ 
  budgetData, categories, selectedCategory,
  onChangeCategory, onChangeSubcategory, onResetQueries }) => {

  const { t } = useTranslation();

  return ( 
    <Root>
      <CategoryItem 
        isTitle={true}
        name={budgetData.name}
        amount={budgetData.totalAmount}
        onClick={onResetQueries}
      />
      {
        categories.map(cat => (
          <div
            key={cat.category._id}
          >
             <CategoryItem 
              isMain={true}
              name={t(cat.category.name)}
              amount={cat.amount}
              onClick={() => onChangeCategory(cat.category._id)}
            />
            <SubCatList
              className={clsx([selectedCategory === cat.category._id && 'active'])}
            >
              {
                cat.category.subCategories.map(subCat => (
                  <CategoryItem 
                    key={subCat._id}
                    name={t(subCat.name)}
                    onClick={() => 
                      onChangeSubcategory({ 
                        categoryId: cat.category._id, 
                        subcategoryId: subCat._id 
                    })}
                  />
                ))
              }
              <CategoryExpenses
                warning={cat.balance > 100}
              >
                {t('Expenses')}: {cat.expenses.toFixed(2)} zł ({cat.balance.toFixed(0)}%)
              </CategoryExpenses>
            </SubCatList>
          </div>
        ))
      }
      <CategoryItem 
        isMain={true}
        name={t('Others')}
        onClick={() => onChangeCategory('others')}
      />
      <BudgetSummary 
        expenses={budgetData.expenses}
        savings={budgetData.savings}
        expensesBalance={budgetData.expensesBalance}
        savingsBalance={budgetData.savingsBalance}
      />
    </Root>
   );
}

CategoryList.propTypes = {
  budgetData: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  onChangeSubcategory: PropTypes.func.isRequired,
  onResetQueries: PropTypes.func.isRequired,
};
 
export default CategoryList;