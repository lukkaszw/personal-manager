import ACTIONS from '../actions';

export const setMonth = ({ month, year}) => ({ payload: { month, year }, type: ACTIONS.calendar.SET_MONTH });