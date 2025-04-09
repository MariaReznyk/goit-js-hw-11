import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const axiosParams = {
  key: '49549319-ba908525a889591d8dce42897',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 21,
};

export function getImagesByQuery(axiosParams) {
  return axios.get('', { params: axiosParams });
}
