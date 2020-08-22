const reducerName = 'calendar';
const createActionName = name => `app/${reducerName}/${name}`;

export const SET_MONTH = createActionName('SET_MONTH');