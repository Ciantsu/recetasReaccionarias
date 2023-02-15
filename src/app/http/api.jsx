import axios from 'axios';

export default function apiador(url) {
  
  return axios.create({
  baseURL: url
});

}
