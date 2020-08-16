const reducerName = 'transactions';
const createActionName = name => `app/${reducerName}/${name}`;

export const SET_CATEGORY = createActionName('SET_CATEGORY');
export const SET_SUBCATEGORY = createActionName('SET_SUBCATEGORY');
export const RESET_QUERIES = createActionName('RESET_QUERIES');
