import ACTIONS from '../../actions';

const notesReducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case ACTIONS.notes.SET_PAGE: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          page: action.payload,
        }
      }
    }
    default: 
      return statePart;
  }
}

export default notesReducer;