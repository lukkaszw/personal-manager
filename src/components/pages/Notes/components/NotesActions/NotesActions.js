import React from 'react';
import PropTypes from 'prop-types';
import { Root } from './NotesActions.styles';

const NotesActions = ({ 
  categories, category, priority, sortBy, order,
  onChangeCategory, onChangePriority, onChangeSort,
  onResetQuerySettings,
}) => {
  return ( 
    <Root>

    </Root>
   );
}

NotesActions.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  sortBy: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  onChangePriority: PropTypes.func.isRequired,
  onChangeSort: PropTypes.func.isRequired,
  onResetQuerySettings: PropTypes.func.isRequired,
};
 
export default NotesActions;