import axios from 'axios';
import api from 'utils/api.endpoints';
import generateAuthConfig from 'utils/generateAuthConfig';

export const getTransaction = async (key, { id, token }) => {
  const url = `${api.baseUrl}/${api.endpoints.transactions}/${id}`;

  const config = generateAuthConfig(token);

  const res = await axios.get(url, config);

  return res.data;
}

export const addTransation = async ({ data, token }) => {
  const url = `${api.baseUrl}/${api.endpoints.transactions}`;

  const config = generateAuthConfig(token);

  const res = await axios.post(url, data, config);

  return res.data;
}

export const editTransaction = async ({ data, token, id}) => {
  const url = `${api.baseUrl}/${api.endpoints.transactions}/${id}`;

  const config = generateAuthConfig(token);

  const res = await axios.put(url, data, config);

  return res.data;
}

export const getTransactions = async (key, { token, budgetId }) => {
  const url = `${api.baseUrl}/${api.endpoints.budgetTransactions}/${budgetId}`;
  
  const config = generateAuthConfig(token);
  
  const res = await axios.get(url, config);

  return res.data;
};

export const deleteMany = async ({ token, transactions }) => {
  const url = `${api.baseUrl}/${api.endpoints.transactions}`;

  const config = generateAuthConfig(token);

  config.data = {
    transactions,
  }

  const res = await axios.delete(url, config);

  return res.data;
}