import ACTIONS from '../../actions';

const userReducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case ACTIONS.user.REQUEST_START: {
      return {
        ...statePart,
        request: {
          isActive: true,
          isSuccess: false,
          error: null,
        },
      }
    }
    default: 
      return statePart;
  }
}

export default userReducer;