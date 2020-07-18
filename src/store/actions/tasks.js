const reducerName = 'tasks';
const createActionName = name => `app/${reducerName}/${name}`;

export const SET_PRIORITY = createActionName('SET_PRIORITY');
export const SET_STATUS = createActionName('SET_STATUS');
export const SET_DATE_FROM = createActionName('SET_DATE_FROM');
export const SET_DATE_TO = createActionName('SET_DATE_TO');
export const SET_PAGE = createActionName('SET_PAGE');