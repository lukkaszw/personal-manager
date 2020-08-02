import ACTIONS from '../actions';

export const setPage = (page) => ({ payload: page, type: ACTIONS.budget.SET_PAGE });
export const setType = (budgetsType) => ({ payload: budgetsType, type: ACTIONS.budget.SET_BUDGETS_TYPE });