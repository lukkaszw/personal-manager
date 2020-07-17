import ACTIONS from '../../actions';

const tasksReducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case ACTIONS.tasks.SET_PRIORITY: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          priority: action.payload,
        },
      };
    }
    case ACTIONS.tasks.SET_STATUS: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          status: action.payload,
        }
      }
    }
    case ACTIONS.tasks.SET_DATE_FROM: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          dateFrom: action.payload,
        }
      }
    }
    case ACTIONS.tasks.SET_DATE_TO: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          dateTo: action.payload,
        }
      }
    }
    default: 
      return statePart;
  }
}

export default tasksReducer;