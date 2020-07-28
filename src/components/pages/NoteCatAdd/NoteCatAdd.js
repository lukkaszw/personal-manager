import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotesCatForm from 'components/common/NotesCatForm';
import SELECTORS from 'store/selectors';
import API from 'store/api';
import { Root } from './NoteCatAdd.styles';


const NoteCatAdd = ({ token }) => {
  const initialValues = {
    name: '',
  };

  return ( 
    <Root>
      <NotesCatForm 
        token={token}
        initialValues={initialValues}
        apiAction={API.notes.addNoteCategory}
      />
    </Root>
  );
}

NoteCatAdd.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});

 
export default connect(mapStateToProps)(NoteCatAdd);