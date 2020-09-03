import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import Page from 'components/layout/Page';
import PropTypes from 'prop-types';
import SELECTORS from 'store/selectors';

const NoteEditData = React.lazy(() => import('./components/NoteEditData'));

const NoteEdit = ({ token }) => {
  
  const { id } = useParams();

  return (
    <Page centeredContent>
      <SuspenseErrorBundary>
        <NoteEditData 
          id={id}
          token={token}
        />
      </SuspenseErrorBundary>
    </Page>
  );
}

NoteEdit.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(NoteEdit);