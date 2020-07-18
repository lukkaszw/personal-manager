import ACTIONS from '../../actions';

const tasksReducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case ACTIONS.tasks.SET_PRIORITY: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          priority: action.payload,
          page: 1,
        },
      };
    }
    case ACTIONS.tasks.SET_STATUS: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          status: action.payload,
          page: 1,
        }
      }
    }
    case ACTIONS.tasks.SET_DATE_FROM: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          dateFrom: action.payload,
          page: 1,
        }
      }
    }
    case ACTIONS.tasks.SET_DATE_TO: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          dateTo: action.payload,
          page: 1,
        }
      }
    }
    case ACTIONS.tasks.SET_PAGE: {
      return {
       ...statePart,
       query: {
         ...statePart.query,
         page: action.payload,
       } 
      }
    }
    case ACTIONS.tasks.SET_SORT: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          sortBy: action.payload,
          sortOrder: statePart.query.sortOrder === 'asc' ? 'desc' : 'asc', 
        }
      }
    }
    default: 
      return statePart;
  }
}

export default tasksReducer;