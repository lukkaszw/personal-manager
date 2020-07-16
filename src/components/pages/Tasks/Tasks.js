import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TasksList from './components/TasksList';
import SELECTORS from 'store/selectors';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';

const Tasks = ({ token }) => {

  return ( 
    <SuspenseErrorBundary>
      <TasksList
        token={token}
      />
    </SuspenseErrorBundary>
   );
}

Tasks.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(Tasks);