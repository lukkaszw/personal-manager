import React from 'react';
import PropTypes from 'prop-types';
import NoteForm from 'components/common/NoteForm';
import { useQuery } from 'react-query';
import API from 'store/api';

const NoteEditData = ({ id, token }) => {

  const { data } = useQuery(
    ['note', { id, token }], 
    API.notes.getNote, 
    { suspense: true }
  );

  const { data: categories } = useQuery(
    ['notesCategories', { token }], 
    API.notes.getNotesCategories, 
    { suspense: true }
  );


  const initialValues = {
    title: data.title,
    priority: data.priority,
    description: data.description,
    category: data.category || 'none',
  };

  return ( 
    <NoteForm 
      id={id}
      token={token}
      apiAction={API.notes.editNote}
      initialValues={initialValues}
      categories={categories}
      isForEdit={true}
    />
  );
}

NoteEditData.propTypes = {
  id: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};
 
export default NoteEditData;