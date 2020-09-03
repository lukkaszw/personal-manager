import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Page from 'components/layout/Page';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import SELECTORS from 'store/selectors';

const TaskEditData = React.lazy(() => import('./components/TaskEditData'));

const TaskEdit = ({ token }) => {
  const { id } = useParams();

  return ( 
    <Page centeredContent>
      <SuspenseErrorBundary>
        <TaskEditData
          token={token} 
          id={id}
        />
      </SuspenseErrorBundary>
    </Page>
   );
}

TaskEdit.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});

 
export default connect(mapStateToProps)(TaskEdit);