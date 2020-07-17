import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TasksList from './components/TasksList';
import SELECTORS from 'store/selectors';
import ACTION_CREATORS from 'store/actionCreators';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import QuerySettings from './components/QuerySettings';

const Tasks = ({ 
  token, status, priority, title, dateFrom, dateTo, sort,
  onChangePriority, onChangeStatus, onChangeDateFrom, onChangeDateTo
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
      />
    </SuspenseErrorBundary>
   );
}

Tasks.propTypes = {
  token: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  title: PropTypes.string,
  dateFrom: PropTypes.any,
  dateTo: PropTypes.any,
  sort: PropTypes.string,
  onChangePriority: PropTypes.func.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onChangeDateFrom: PropTypes.func.isRequired,
  onChangeDateTo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
  status: SELECTORS.tasks.getQueryStatus(state),
  priority: SELECTORS.tasks.getQueryPriority(state),
  title: SELECTORS.tasks.getQueryTitle(state),
  dateFrom: SELECTORS.tasks.getQueryDateFrom(state),
  dateTo: SELECTORS.tasks.getQueryDateTo(state),
  sort: SELECTORS.tasks.getQuerySort(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangePriority: (priority) => dispatch(ACTION_CREATORS.tasks.setPriority(priority)),
  onChangeStatus: (status) => dispatch(ACTION_CREATORS.tasks.setStatus(status)),
  onChangeDateFrom: (dateFrom) => dispatch(ACTION_CREATORS.tasks.setDateFrom(dateFrom)),
  onChangeDateTo: (dateTo) => dispatch(ACTION_CREATORS.tasks.setDateTo(dateTo)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Tasks);