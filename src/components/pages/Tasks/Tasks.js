import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SELECTORS from 'store/selectors';
import ACTION_CREATORS from 'store/actionCreators';
import Page from 'components/layout/Page';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';

const TasksList = React.lazy(() => import('./components/TasksList'));
const QuerySettings = React.lazy(() => import('./components/QuerySettings'));

const Tasks = ({ 
  token, status, priority, dateFrom, dateTo, sortBy, sortOrder, page,
  onChangePriority, onChangeStatus, onChangeDateFrom, onChangeDateTo, onChangePage, onChangeSort, onResetQuerySettings,
}) => {

  return ( 
    <Page>
    <QuerySettings 
        priority={priority}
        status={status}
        onChangePriority={onChangePriority}
        onChangeStatus={onChangeStatus}
        dateFrom={dateFrom}
        dateTo={dateTo}
        onChangeDateFrom={onChangeDateFrom}
        onChangeDateTo={onChangeDateTo}
        onResetQuerySettings={onResetQuerySettings}
      />
      <SuspenseErrorBundary>
        <TasksList
          token={token}
          priority={priority}
          status={status}
          dateFrom={dateFrom}
          dateTo={dateTo}
          page={page}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onChangePage={onChangePage}
          onChangeSort={onChangeSort}
        />
      </SuspenseErrorBundary>
    </Page>
   );
}

Tasks.propTypes = {
  token: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  dateFrom: PropTypes.any,
  dateTo: PropTypes.any,
  sortBy: PropTypes.string,
  sortOrder: PropTypes.string,
  page: PropTypes.number.isRequired,
  onChangePriority: PropTypes.func.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onChangeDateFrom: PropTypes.func.isRequired,
  onChangeDateTo: PropTypes.func.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangeSort: PropTypes.func.isRequired,
  onResetQuerySettings: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
  status: SELECTORS.tasks.getQueryStatus(state),
  priority: SELECTORS.tasks.getQueryPriority(state),
  dateFrom: SELECTORS.tasks.getQueryDateFrom(state),
  dateTo: SELECTORS.tasks.getQueryDateTo(state),
  sortBy: SELECTORS.tasks.getQuerySortBy(state),
  sortOrder: SELECTORS.tasks.getQuerySortOrder(state),
  page: SELECTORS.tasks.getQueryPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangePriority: (priority) => dispatch(ACTION_CREATORS.tasks.setPriority(priority)),
  onChangeStatus: (status) => dispatch(ACTION_CREATORS.tasks.setStatus(status)),
  onChangeDateFrom: (dateFrom) => dispatch(ACTION_CREATORS.tasks.setDateFrom(dateFrom)),
  onChangeDateTo: (dateTo) => dispatch(ACTION_CREATORS.tasks.setDateTo(dateTo)),
  onChangePage: (page) => dispatch(ACTION_CREATORS.tasks.setPage(page)),
  onChangeSort: (sortBy) => dispatch(ACTION_CREATORS.tasks.setSort(sortBy)),
  onResetQuerySettings: () => dispatch(ACTION_CREATORS.tasks.resetQuerySettings()),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);