import React from 'react';
import TaskForm from 'components/common/TaskForm';

const TaskAdd = () => {
  const initialValues = {
    title: '',
    priority: 1,
    description: '',
  };

  return ( 
    <TaskForm initialValues={initialValues}/>
   );
}
 
export default TaskAdd;