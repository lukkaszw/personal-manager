const axios = require('axios');

const apiToken = process.env.POE_API_TOKEN;
const apiId = process.env.POE_API_ID;

const getTerms = async (req, res) => {
  const lang = req.body.language;
  try {
    const params = new URLSearchParams();
    params.append('api_token', apiToken);
    params.append('id', apiId);
    params.append('language', lang);
    const response = await axios.post('https://api.poeditor.com/v2/terms/list', params);
  
    res.json(response.data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const addTerms = async (req, res) => {
  console.log(req.body);
  
  try {
    const params = new URLSearchParams();
    params.append('api_token', apiToken);
    params.append('id', apiId);
    params.append('data', req.body.data);
    const response = await axios.post('https://api.poeditor.com/v2/terms/add', params);
    
    res.json(response.data);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getTerms,
  addTerms,
};