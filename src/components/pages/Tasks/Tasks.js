import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TasksList from './components/TasksList';
import SELECTORS from 'store/selectors';
import ACTION_CREATORS from 'store/actionCreators';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import QuerySettings from './components/QuerySettings';

const Tasks = ({ 
  token, status, priority, dateFrom, dateTo, sortBy, sortOrder, page,
  onChangePriority, onChangeStatus, onChangeDateFrom, onChangeDateTo, onChangePage, onChangeSort,
}) => {

  return ( 
    <SuspenseErrorBundary>
      <QuerySettings 
        priority={priority}
        status={status}
        onChangePriority={onChangePriority}
        onChangeStatus={onChangeStatus}
        dateFrom={dateFrom}
        dateTo={dateTo}
        onChangeDateFrom={onChangeDateFrom}
        onChangeDateTo={onChangeDateTo}
      />
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
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);