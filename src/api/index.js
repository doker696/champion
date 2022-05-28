import axios from 'axios';

const api = 'http://0de8-95-152-62-167.ngrok.io';


export const getTypes = async () => {
  return axios.get(`${api}/types`);
};
