import axios from 'axios';
import baseURL from '../BaseUrl';

const getSong = async () => {
  const song = await axios.get(`${baseURL.baseURL}/track`);
  return song;
};

export default getSong;
