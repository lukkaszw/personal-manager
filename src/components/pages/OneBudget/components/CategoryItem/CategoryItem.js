import React from 'react';
import PropTypes from 'prop-types';
import { Root, CatName, CatValue } from './CategoryItem.styles';
import clsx from 'clsx';

const CategoryItem = ({ name, amount, isMain, isTitle, onClick, isActive }) => {

  return ( 
    <Root
      onClick={onClick}
      className={clsx([isMain && 'main', isTitle && 'title', isActive && 'active'])}
    >
      <CatName>
        {name}
      </CatName>
      {
        amount &&
        <CatValue>
          {amount} zł
        </CatValue>
      }
    </Root>
   );
}

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number,
  onClick: PropTypes.func,
  isMain: PropTypes.bool,
  isActive: PropTypes.bool,
  isBudgetName: PropTypes.bool,
};
 
export default CategoryItem;