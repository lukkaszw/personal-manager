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
    case ACTIONS.notes.SET_PRIORITY: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          priority: action.payload,
          page: 1,
        }
      }
    }
    case ACTIONS.notes.SET_CATEGORY: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          category: action.payload,
          page: 1,
        }
      }
    }
    case ACTIONS.notes.RESET_CATEGORY: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          page: 1,
          category: 'all',
        },
      }
    }
    default: 
      return statePart;
  }
}

export default notesReducer;