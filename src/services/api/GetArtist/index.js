import axios from 'axios';
import baseURL from '../BaseUrl';

const getArtist = async () => {
  const artist = await axios.get(`${baseURL.baseURL}/artist`);
  return artist;
};

export default getArtist;
