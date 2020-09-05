import React from 'react';
import PropTypes from 'prop-types';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import Page from 'components/layout/Page';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import SELECTORS from 'store/selectors';

const TaskData = React.lazy(() => import('./components/TaskData'));

const Task = ({ token }) => {
  const { id } = useParams(); 

  return (
    <Page>
      <SuspenseErrorBundary>
        <TaskData 
          id={id}
          token={token}
        />
      </SuspenseErrorBundary>
    </Page>
   );
}

Task.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(Task);