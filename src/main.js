import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { refs } from './js/refs';
import { axiosParams, getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

function checkIfNoResults(response) {
  if (response.data.hits.length === 0) {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#FFFFFF',
      backgroundColor: '#f06363',
      messageColor: 'white',
      position: 'topRight',
      maxWidth: 432,
    });
  }
  return response.data;
}

function onSubmit(event) {
  event.preventDefault();
  clearGallery();
  const searchWord = event.currentTarget.elements['search-text'].value;
  if (searchWord.trim() === '') {
    iziToast.show({
      message: 'Please type the search word in input!',
      messageColor: '#FFFFFF',
      backgroundColor: '#f06363',
      messageColor: 'white',
      position: 'topRight',
      maxWidth: 432,
    });
    return;
  } else {
    axiosParams.q = searchWord.trim();
  }
  showLoader();
  getImagesByQuery(axiosParams)
    .then(response => checkIfNoResults(response))
    .then(data => createGallery(data.hits))
    .catch(error => console.log(error))
    .finally(() => {
      refs.form.reset();
      hideLoader();
    });
}

refs.form.addEventListener('submit', onSubmit);
