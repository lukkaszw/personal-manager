import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import SELECTORS from 'store/selectors';
import ACTION_CREATORS from 'store/actionCreators';

const OneBudgetData = React.lazy(() => import('./components/OneBudgetData'));

const OneBudget = ({ 
  token, 
  selectedCategory, selectedSubcategory,
  onChangeCategory, onChangeSubcategory, onResetQueries }) => {

  useEffect(() => () => onResetQueries(), [onResetQueries]);

  const { id } = useParams();

  return ( 
    <SuspenseErrorBundary>
      <OneBudgetData 
        token={token}
        id={id}
        selectedCategory={selectedCategory}
        selectedSubcategory={selectedSubcategory}
        onChangeCategory={onChangeCategory}
        onChangeSubcategory={onChangeSubcategory}
        onResetQueries={onResetQueries}
      />
    </SuspenseErrorBundary>
   );
}

OneBudget.propTypes = {
  token: PropTypes.string.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  selectedSubcategory: PropTypes.string.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  onChangeSubcategory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
  selectedCategory: SELECTORS.transactions.getQueryCategory(state),
  selectedSubcategory: SELECTORS.transactions.getQuerySubcategory(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCategory: (categoryId) => dispatch(ACTION_CREATORS.transactions.setCategory(categoryId)),
  onChangeSubcategory: ({ categoryId, subcategoryId }) => dispatch(ACTION_CREATORS.transactions.setSubcategory({
    categoryId,
    subcategoryId,
  })),
  onResetQueries: () => dispatch(ACTION_CREATORS.transactions.resetQueries()),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(OneBudget);