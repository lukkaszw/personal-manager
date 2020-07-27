import React from 'react';
import NoteForm from 'components/common/NoteForm';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import API from 'store/api';

const NoteAddData = ({ token }) => {

  const { data: categories } = useQuery(
    ['notesCategories', { token }], 
    API.notes.getNotesCategories, 
    { suspense: true }
  );

  const initialValues = {
    title: '',
    priority: 1,
    description: '',
    category: 'none',
  };


  return ( 
    <NoteForm 
      token={token}
      apiAction={API.notes.addNote}
      initialValues={initialValues}
      categories={categories}
    />
   );
}

NoteAddData.propTypes = {
  token: PropTypes.string.isRequired,
};
 
export default NoteAddData;