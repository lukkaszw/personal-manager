import ACTIONS from '../../actions';

const transactionsReducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case ACTIONS.transactions.SET_CATEGORY: {
      return {
        query: {  
          category: action.payload,
          subcategory: 'all',
        }
      }
    }

    case ACTIONS.transactions.SET_SUBCATEGORY: {
      return {
        query: {
          category: action.payload.categoryId,
          subcategory: action.payload.subcategoryId,
        }
      }
    }
    case ACTIONS.transactions.RESET_QUERIES: {
      return {
        query: {
          category: 'all',
          subcategory: 'all',
        }
      }
    }
    default: 
      return statePart;
  }
}

export default transactionsReducer;