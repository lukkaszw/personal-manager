import ACTIONS from '../../actions';

const calendarReducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case ACTIONS.calendar.SET_MONTH: {
      return {
        query: {
          isLoading: true,
          month: action.payload.month,
          year: action.payload.year,
        },
      };
    }
    default: 
      return statePart;
  }
}

export default calendarReducer;