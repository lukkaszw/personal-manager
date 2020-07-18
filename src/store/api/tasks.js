import axios from 'axios';
import api from 'utils/api.endpoints';
import generateAuthConfig from 'utils/generateAuthConfig';
import moment from 'moment';
import { pages } from 'utils/pages.config';

export const getTasks = async (key ,{ token, priority, status, dateFrom, dateTo, page, sortBy, sortOrder }) => {
  const url = `${api.baseUrl}/${api.endpoints.tasks}`;

  const config = generateAuthConfig(token);
  
  let dateString = dateFrom ? `${moment(dateFrom).format('YYYY-MM-DD')}` : '';
  dateString = `${dateString}${dateTo ? `_${moment(dateTo).format('YYYY-MM-DD')}` : dateFrom ? '_' : ''}`;


  config.params = {
    priority: priority === 'all' ? null : priority,
    status: status === 'all' ? null : status,
    date: dateString || null,
    limit: pages.tasks.maxPerPage,
    skip: (page - 1) * pages.tasks.maxPerPage,
  };

  if(sortBy && sortOrder) {
    config.params.sort = `${sortBy}_${sortOrder}`;
  }

  const res = await axios.get(url, config);
  return res.data;
}