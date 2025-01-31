import axios from 'axios';
import api from 'utils/api.endpoints';
import generateAuthConfig from 'utils/generateAuthConfig';
import { getCategoriesFromFields } from 'utils/getCategoriesFromFields';
import { pages } from 'utils/pages.config';
import { TYPE_ } from 'utils/budget.statuses';
import { MONTHS } from 'utils/months';
import moment from 'moment';

const parseData = (data) => {

  const { name, totalAmount, type, date } = data;

  const categories = getCategoriesFromFields(data);
  const budgetedCategories = categories.filter(cat => cat.amount > 0 && !Number.isNaN(cat.amount));
 
  const parsedData = {
    name,
    type,
    date: type === TYPE_.monthly ? date : moment(),
    totalAmount,
    budgetedCategories,
  };

  if(parsedData.type === TYPE_.monthly) {
    parsedData.month = MONTHS[moment(date).month()];
    parsedData.year = moment(date).format('YYYY');
  }

  return parsedData;
}


export const getBudgets = async (key, { type, page, token }) => {
  const url = `${api.baseUrl}/${api.endpoints.budget}`;

  const config = generateAuthConfig(token);

  config.params = {
    type: type !== 'all' ? type : null,
    limit: pages.budget.maxPerPage,
    skip: (page - 1) * pages.tasks.maxPerPage,
  };

  const resp = await axios.get(url, config);

  return resp.data;
}

export const getBudget = async (key, { id, token }) => {
  const url = `${api.baseUrl}/${api.endpoints.budget}/${id}`;

  const config = generateAuthConfig(token);

  const resp = await axios.get(url, config);

  return resp.data;
}

export const getCategories = async () => {
  const url = `${api.baseUrl}/${api.endpoints.budgetCategories}`;

  const resp = await axios.get(url);

  return resp.data;
}

export const addBudget = async ({ token, data }) => {

  const url = `${api.baseUrl}/${api.endpoints.budget}`;

  const config = generateAuthConfig(token);

  const parsedData = parseData(data);

  const resp = await axios.post(url, parsedData, config);

  return resp.data;
}

export const editBudget = async ({ token, id, data }) => {

  const url = `${api.baseUrl}/${api.endpoints.budget}/${id}`;

  const config = generateAuthConfig(token);

  const parsedData = parseData(data);

  const resp = await axios.put(url, parsedData, config);

  return resp.data;
}

export const deleteBudget = async ({ id, token }) => {
  const url = `${api.baseUrl}/${api.endpoints.budget}/${id}`;

  const config = generateAuthConfig(token);

  const resp = await axios.delete(url, config);

  return resp.data;
}