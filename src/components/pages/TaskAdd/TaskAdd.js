import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Page from 'components/layout/Page';
import TaskForm from 'components/common/TaskForm';
import API from 'store/api';
import SELECTORS from 'store/selectors';

const TaskAdd = ({ token }) => {

  const location = useLocation();
  const { month, year, day } = queryString.parse(location.search);

  const initialValues = {
    title: '',
    priority: 1,
    description: '',
    endDate: (month && year && day) ? 
      `${year}-${month > 9 ? month : `0${month}`}-${day > 9 ? day: `0${day}`}` 
      : 
      '',
  };

  return ( 
    <Page centeredContent>
      <TaskForm 
        token={token}
        apiAction={API.tasks.addTask}
        initialValues={initialValues}
      />
    </Page>
   );
}

TaskAdd.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(TaskAdd);