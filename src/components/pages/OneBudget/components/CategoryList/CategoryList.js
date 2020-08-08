import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Root, SubCatList } from './CategoryList.styles';
import CategoryItem from '../CategoryItem';
import clsx from 'clsx';

const CategoryList = ({ budgetData }) => {

  const [expandedList, setExpandedList] = useState(null);

  return ( 
    <Root>
      <CategoryItem 
        isTitle={true}
        name={budgetData.name}
        amount={budgetData.totalAmount}
      />
      {
        budgetData.budgetedCategories.map(cat => (
          <div
            key={cat.category._id}
          >
             <CategoryItem 
              isMain={true}
              name={cat.category.name}
              amount={cat.amount}
              onClick={() => setExpandedList(expandedList === cat.category._id ? null : cat.category._id)}
            />
            <SubCatList
              className={clsx([expandedList === cat.category._id && 'active'])}
            >
              {
                cat.category.subCategories.map(subCat => (
                  <CategoryItem 
                    key={subCat._id}
                    name={subCat.name}
                  />
                ))
              }
            </SubCatList>
          </div>
        ))
      }
      <CategoryItem 
        isMain={true}
        name='Others'
      />
    </Root>
   );
}

CategoryList.propTypes = {
  budgetData: PropTypes.object.isRequired,
};
 
export default CategoryList;