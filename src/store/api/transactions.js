import axios from 'axios';
import api from 'utils/api.endpoints';
import generateAuthConfig from 'utils/generateAuthConfig';


export const addTransation = async ({ data, token }) => {
  const url = `${api.baseUrl}/${api.endpoints.transactions}`;

  const config = generateAuthConfig(token);

  const res = await axios.post(url, data, config);

  return res.data;
}

export const getTransactions = async (key, { token, budgetId }) => {
  const url = `${api.baseUrl}/${api.endpoints.budgetTransactions}/${budgetId}`;
  
  const config = generateAuthConfig(token);
  
  const res = await axios.get(url, config);

  return res.data;
};