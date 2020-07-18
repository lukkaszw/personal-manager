import ACTIONS from '../actions';

export const setPriority = (priority) => ({ payload: priority, type: ACTIONS.tasks.SET_PRIORITY });
export const setStatus = (status) => ({ payload: status, type: ACTIONS.tasks.SET_STATUS});
export const setDateFrom = (dateFrom) => ({ payload: dateFrom, type: ACTIONS.tasks.SET_DATE_FROM});
export const setDateTo = (dateTo) => ({ payload: dateTo, type: ACTIONS.tasks.SET_DATE_TO });
export const setPage = (page) => ({ payload: page, type: ACTIONS.tasks.SET_PAGE });
export const setSort = (sortBy) => ({ payload: sortBy, type: ACTIONS.tasks.SET_SORT });