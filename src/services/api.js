import axios from 'axios';

axios.defaults.baseURL = 'https://6786c74df80b78923aa8220f.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
};
