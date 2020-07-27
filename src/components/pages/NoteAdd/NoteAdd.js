import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NoteAddData from './components/NoteAddData';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import SELECTORS from 'store/selectors';

const NoteAdd = ({ token }) => {

  return ( 
    <SuspenseErrorBundary>
      <NoteAddData 
        token={token}
      />
    </SuspenseErrorBundary>
   );
}

NoteAdd.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});
 
export default connect(mapStateToProps)(NoteAdd);