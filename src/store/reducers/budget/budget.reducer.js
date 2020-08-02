import ACTIONS from '../../actions';

const budgetReducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case ACTIONS.budget.SET_PAGE: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          page: action.payload, 
        },
      };
    }
    case ACTIONS.budget.SET_BUDGETS_TYPE: {
      return {
        ...statePart,
        query: {
          ...statePart.query,
          type: action.payload,
          page: 1,
        }
      }
    }
    default: 
      return statePart;
  }
}

export default budgetReducer;