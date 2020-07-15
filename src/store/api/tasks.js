import axios from 'axios';
import api from 'utils/api.endpoints';
import generateAuthConfig from 'utils/generateAuthConfig';

export const getTasks = async (key ,{ token }) => {
  const url = `${api.baseUrl}/${api.endpoints.tasks}`;

  const config = generateAuthConfig(token);

  const res = await axios.get(url, config);
  return res.data;
}