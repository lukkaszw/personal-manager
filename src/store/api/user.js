import axios from 'axios';
import api from 'utils/api.endpoints';
import ACTIONS from '../actions';
import generateAuthConfig from 'utils/generateAuthConfig';

//action creators
const startRequest = () => ({ type: ACTIONS.user.REQUEST_START });
const setRequestError = (errorCode) => ({ payload: errorCode, type: ACTIONS.user.REQUEST_ERROR });
const setRequestSuccess = () => ({ type: ACTIONS.user.REQUEST_SUCCESS });
const login = (data) => ({ payload: data, type: ACTIONS.user.LOGIN });
const logout = () => ({ type: ACTIONS.user.LOGOUT });

export const sendCredentials = (data, destination) => {
  
  const url = `${api.baseUrl}/${api.endpoints.user[destination]}`;

  return dispatch => {

    dispatch(startRequest());

    return axios.post(url, data)
      .then(res => {
        if(res.data.isError) {
          dispatch(setRequestError(res.data.errorCode))
        } else {
          if(res.data.token) {
            localStorage.setItem('tkn', res.data.token);
            dispatch(login(res.data));
          } else {
            dispatch(setRequestSuccess());
          }
        }
      })
      .catch(() => {
        dispatch(setRequestError(3))
      });
  }
}

export const logoutUser = (token) => {
  const url = `${api.baseUrl}/${api.endpoints.user.logout}`;

  const config = generateAuthConfig(token);

  return dispatch => {
    dispatch(logout());
    return axios.post(url, {}, config)
      .then(res => {
        console.log('Successfull logout on server!');
      })
      .catch(() => {
        console.log('Successfull offline logout. Error on server!');
      });
  }
}
