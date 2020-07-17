import axios from 'axios';
import api from 'utils/api.endpoints';
import generateAuthConfig from 'utils/generateAuthConfig';
import moment from 'moment';

export const getTasks = async (key ,{ token, priority, status, dateFrom, dateTo }) => {
  const url = `${api.baseUrl}/${api.endpoints.tasks}`;

  const config = generateAuthConfig(token);
  
  let dateString = dateFrom ? `${moment(dateFrom).format('YYYY-MM-DD')}` : '';
  dateString = `${dateString}${dateTo ? `_${moment(dateTo).format('YYYY-MM-DD')}` : dateFrom ? '_' : ''}`;


  config.params = {
    priority: priority === 'all' ? null : priority,
    status: status === 'all' ? null : status,
    date: dateString || null,
  };

  const res = await axios.get(url, config);
  return res.data;
}