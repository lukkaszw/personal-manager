import React from 'react';
import PropTypes from 'prop-types';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import Page from 'components/layout/Page';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import SELECTORS from 'store/selectors';

const NoteData = React.lazy(() => import('./components/NoteData'));

const Note = ({ token }) => {
  const { id } = useParams(); 

  return (
    <Page>
      <SuspenseErrorBundary>
        <NoteData 
          id={id}
          token={token}
        />
      </SuspenseErrorBundary>
    </Page> 
  );
}

Note.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(Note);