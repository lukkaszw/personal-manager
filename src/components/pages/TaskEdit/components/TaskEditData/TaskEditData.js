import React from 'react';
import PropTypes from 'prop-types';
import TaskForm from 'components/common/TaskForm';
import { useQuery } from 'react-query';
import API from 'store/api';

const TaskEditData = ({ token, id}) => {
  const { data } = useQuery(['task', { id, token }], API.tasks.getTask, { suspense: true });
  const initialValues = {
    title: data.title,
    description: data.description,
    priority: data.priority,
    status: data.status,
    endDate: data.endDate,
  };

  return ( 
    <TaskForm 
      initialValues={initialValues}
      token={token}
      apiAction={API.tasks.editTask}
      id={id}
      isForEdit={true}
    />
   );
}

TaskEditData.propTypes = {
  token: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
 
export default TaskEditData;