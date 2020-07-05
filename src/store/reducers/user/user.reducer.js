import ACTIONS from '../../actions';

const userReducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case ACTIONS.user.REQUEST_START: {
      return {
        ...statePart,
        request: {
          isActive: true,
          isSuccess: null,
          error: null,
        },
      };
    }
    case ACTIONS.user.REQUEST_ERROR: {
      return {
        ...statePart,
        request: {
          isActive: false,
          isSuccess: null,
          error: action.payload,
        }
      };
    }
    case ACTIONS.user.REQUEST_SUCCESS: {
      return {
        ...statePart,
        request: {
          isActive: false,
          isSuccess: true,
          error: null,
        }
      };
    }
    case ACTIONS.user.REQUEST_RESET: {
      return {
        ...statePart,
        request: {
          isActive: false,
          isSuccess: false,
          error: null,
        }
      }
    }
    case ACTIONS.user.LOGIN: {
      return {
        ...statePart,
        token: action.payload.token,
        data: action.payload.user,
        request: {
          isActive: false,
          isSuccess: false,
          error: null,
        }
      }
    }
    case ACTIONS.user.LOGOUT: {
      return {
        token: null,
        data: {},
        request: {
          isActive: false,
          isSuccess: false,
          error: null,
        }
      }
    }
    default: 
      return statePart;
  }
}

export default userReducer;