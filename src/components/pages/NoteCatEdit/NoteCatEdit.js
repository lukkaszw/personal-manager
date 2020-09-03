import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import Page from 'components/layout/Page';
import PropTypes from 'prop-types';
import SELECTORS from 'store/selectors';

const NoteCatData = React.lazy(() => import('./components/NoteCatData'));

const NoteCatEdit = ({ token }) => {
  const { id } = useParams();

  return (
    <Page centeredContent>
      <SuspenseErrorBundary>
        <NoteCatData 
          token={token}
          id={id}
        />
      </SuspenseErrorBundary>
    </Page>
  );
}

NoteCatEdit.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(NoteCatEdit);