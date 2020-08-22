import axios from 'axios';
import api from 'utils/api.endpoints';
import generateAuthConfig from 'utils/generateAuthConfig';

export const getMonthData = async (key, { month, year, token }) => {

  const url = `${api.baseUrl}/${api.endpoints.calendar}`;

  const config = generateAuthConfig(token);

  config.params = {
    month,
    year,
  };

  const resp = await axios.get(url, config);

  return resp.data;
}