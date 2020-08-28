import React from 'react';
import { connect } from 'react-redux';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import PropTypes from 'prop-types';
import SELECTORS from 'store/selectors';
import BudgetListActions from './components/BudgetListActions';
import ACTION_CREATORS from 'store/actionCreators';

const BudgetListData = React.lazy(() => import('./components/BudgetListData'));

const BudgetList = ({ token, type, page, onChangePage, onChangeType }) => {
  return ( 
    <div>
      <BudgetListActions 
        type={type}
        onChangeType={onChangeType}
      />
      <SuspenseErrorBundary>
        <BudgetListData 
          token={token}
          page={page}
          type={type}
          onChangePage={onChangePage}
        />
      </SuspenseErrorBundary>
    </div>
   );
}

BudgetList.propTypes = {
  token: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangeType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
  page: SELECTORS.budget.getQueryPage(state),
  type: SELECTORS.budget.getBudgetType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangePage: (page) => dispatch(ACTION_CREATORS.budget.setPage(page)),
  onChangeType: (budgetsType) => dispatch(ACTION_CREATORS.budget.setType(budgetsType)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(BudgetList);