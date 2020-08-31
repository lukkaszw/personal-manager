import React from 'react';
import NotesCatForm from 'components/common/NotesCatForm';
import DeleteNoteCat from '../DeleteNoteCat';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import API from 'store/api';

const NoteCatData = ({ token, id }) => {

  const { data } = useQuery(
    ['note_cat', { id, token }], 
    API.notes.getNoteCategory, 
    { suspense: true }
  );

  const initialValues = {
    name: data.name,
  };

  return ( 
      <NotesCatForm 
        categoryName={data.name}
        token={token}
        id={id}
        initialValues={initialValues}
        isForEdit={true}
        apiAction={API.notes.editNoteCategory}
      >
        <DeleteNoteCat 
          token={token}
          id={id}
        />
      </NotesCatForm>
   );
}

NoteCatData.propTypes = {
  token: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
 
export default NoteCatData;