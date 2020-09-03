import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotesCatForm from 'components/common/NotesCatForm';
import Page from 'components/layout/Page';
import SELECTORS from 'store/selectors';
import API from 'store/api';


const NoteCatAdd = ({ token }) => {
  const initialValues = {
    name: '',
  };

  return ( 
    <Page centeredContent>
      <NotesCatForm 
        token={token}
        initialValues={initialValues}
        apiAction={API.notes.addNoteCategory}
      />
    </Page>
  );
}

NoteCatAdd.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
});

 
export default connect(mapStateToProps)(NoteCatAdd);