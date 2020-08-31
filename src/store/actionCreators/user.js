import ACTIONS from '../actions';

export const resetError = () => ({ type: ACTIONS.user.REQUEST_RESET });
export const updateData = (data) => ({ payload: data, type: ACTIONS.user.UPDATE_DATA });