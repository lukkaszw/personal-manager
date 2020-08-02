const reducerName = 'budget';
const createActionName = name => `app/${reducerName}/${name}`;

export const SET_PAGE = createActionName('SET_PAGE');
export const SET_BUDGETS_TYPE = createActionName('SET_BUDGETS_TYPE');