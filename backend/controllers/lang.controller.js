const axios = require('axios');

const getLanguage = async (req, res) => {
  const params = new URLSearchParams();
  params.append('api_token', "21ec921cf653dcc37017e1d87d44f49a");
  params.append('id', 354473);
  params.append('language', 'en');
  const response = await axios.post('https://api.poeditor.com/v2/terms/list', params);

  console.log(response.data.result);
};

module.exports = {
  getLanguage,
};