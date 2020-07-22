import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TaskForm from 'components/common/TaskForm';
import API from 'store/api';
import SELECTORS from 'store/selectors';

const TaskAdd = ({ token }) => {
  const initialValues = {
    title: '',
    priority: 1,
    description: '',
  };

  return ( 
    <TaskForm 
      token={token}
      apiAction={API.tasks.addTask}
      initialValues={initialValues}
    />
   );
}

TaskAdd.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(TaskAdd);