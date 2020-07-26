import ACTIONS from '../actions';

export const setPage = (page) => ({ payload: page, type:  ACTIONS.notes.SET_PAGE });
export const setPriority = (priority) => ({ payload: priority, type: ACTIONS.notes.SET_PRIORITY });
export const setCategory = (categoryId) => ({ payload: categoryId, type: ACTIONS.notes.SET_CATEGORY });