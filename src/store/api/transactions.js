import axios from 'axios';
import api from 'utils/api.endpoints';
import generateAuthConfig from 'utils/generateAuthConfig';


export const addTransation = async ({ data, token }) => {
  const url = `${api.baseUrl}/${api.endpoints.transactions}`;

  const config = generateAuthConfig(token);

  const res = await axios.post(url, data, config);

  return res.data;
}