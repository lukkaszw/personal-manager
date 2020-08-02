import axios from 'axios';
import api from 'utils/api.endpoints';
import generateAuthConfig from 'utils/generateAuthConfig';
import { pages } from 'utils/pages.config';

export const getBudgets = async (key, { type, page, token }) => {
  const url = `${api.baseUrl}/${api.endpoints.budget}`;

  const config = generateAuthConfig(token);

  config.params = {
    type: type !== 'all' ? type : null,
    limit: pages.notes.maxPerPage,
    skip: (page - 1) * pages.tasks.maxPerPage,
  };

  const resp = await axios.get(url, config);

  return resp.data;
}