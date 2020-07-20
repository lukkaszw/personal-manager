import React from 'react';
import PropTypes from 'prop-types';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import SELECTORS from 'store/selectors';

const TaskData = React.lazy(() => import('./components/TaskData'));

const Task = ({ token }) => {
  const { id } = useParams(); 

  return ( 
    <SuspenseErrorBundary>
      <TaskData 
        id={id}
        token={token}
      />
    </SuspenseErrorBundary>
   );
}

Task.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(Task);