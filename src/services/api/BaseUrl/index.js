import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'https://api.deezer.com/',

});

export default baseURL;
