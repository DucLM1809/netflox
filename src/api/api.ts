import axios from 'axios'
import requests from '../utils/requests'

export const getNetFlixOriginals = axios
  .get(requests.fetchTrending)
  .then((res) => res.data.results)
