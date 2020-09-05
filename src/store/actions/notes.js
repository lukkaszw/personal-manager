const reducerName = 'notes';
const createActionName = name => `app/${reducerName}/${name}`;

export const SET_PRIORITY = createActionName('SET_PRIORITY');
export const SET_CATEGORY = createActionName('SET_CATEGORY');
export const SET_PAGE = createActionName('SET_PAGE');
export const RESET_CATEGORY = createActionName('RESET_CATEGORY');