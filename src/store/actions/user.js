const reducerName = 'user';
const createActionName = name => `app/${reducerName}/${name}`;

export const REQUEST_START = createActionName('REQUEST_START');
export const REQUEST_ERROR = createActionName('REQUEST_ERROR');
export const REQUEST_SUCCESS = createActionName('REQUEST_SUCCESS');
export const REQUEST_RESET = createActionName('REQUEST_RESET');

export const LOGIN = createActionName('LOGIN');
export const LOGOUT = createActionName('LOGOUT');

export const UPDATE_DATA = createActionName('UPDATE_DATA');
