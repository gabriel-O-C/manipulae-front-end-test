import axios from 'axios';
import baseURL from '../BaseUrl';

const getAlbum = async () => {
  const album = await axios.get(`${baseURL.baseURL}/album`);
  return album;
};

export default getAlbum;
