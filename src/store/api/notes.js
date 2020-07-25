import axios from 'axios';
import api from 'utils/api.endpoints';
import generateAuthConfig from 'utils/generateAuthConfig';
import { pages } from 'utils/pages.config';

export const getNotesCategories = async (key, { token }) => {
  const url = `${api.baseUrl}/${api.endpoints.notes.categories}`;

  const config = generateAuthConfig(token);

  const resp = await axios.get(url, config);

  return resp.data;
}

export const getNotes = async (key, { token, priority, page, category }) => {
  const url = `${api.baseUrl}/${api.endpoints.notes.notes}`;

  const config = generateAuthConfig(token);

  config.params = {
    priority: priority === 'all' ? null : priority,
    category: category === 'all' ? null : category,
    limit: pages.notes.maxPerPage,
    skip: (page - 1) * pages.tasks.maxPerPage,
  };

  const resp = await axios.get(url, config);

  console.log(resp.data);
  return resp.data;
}