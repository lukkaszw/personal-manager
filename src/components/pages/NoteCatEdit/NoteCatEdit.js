import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import Page from 'components/layout/Page';
import PropTypes from 'prop-types';
import SELECTORS from 'store/selectors';
import ACTION_CREATORS from 'store/actionCreators';

const NoteCatData = React.lazy(() => import('./components/NoteCatData'));

const NoteCatEdit = ({ token, onResetCategory }) => {
  const { id } = useParams();

  return (
    <Page centeredContent>
      <SuspenseErrorBundary>
        <NoteCatData 
          token={token}
          id={id}
          onResetCategory={onResetCategory}
        />
      </SuspenseErrorBundary>
    </Page>
  );
}

NoteCatEdit.propTypes = {
  token: PropTypes.string.isRequired,
  onResetCategory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});

const mapDispatchToProps = (dispatch) => ({
  onResetCategory: () => dispatch(ACTION_CREATORS.notes.resetCategory()),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(NoteCatEdit);