import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './refs';

const slOptions = {
  overlay: true,
  overlayOpacity: 0.8,
  captions: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};

const lightbox = new SimpleLightbox('.gallery a', slOptions);

export function clearGallery() {
  refs.gallery.innerHTML = '';
}

export function createGallery(data) {
  const galleryMarkup = data
    .map(
      ({
        webformatURL: preview,
        largeImageURL: original,
        tags: description,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img class="gallery-image" src="${preview}" alt="${description}" />
  </a>
  <ul class="gallery-item-description">
    <li class="gallery-item-param"><span class="gallery-item-param-style">Likes</span><span>${likes}</span></li>
    <li class="gallery-item-param"><span class="gallery-item-param-style">Views</span><span>${views}</span></li>
    <li class="gallery-item-param"><span class="gallery-item-param-style">Comments</span><span>${comments}</span></li>
    <li class="gallery-item-param"><span class="gallery-item-param-style">Downloads</span><span>${downloads}</span></li>
</ul>
</li>`;
      }
    )
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);
  lightbox.refresh();
}

export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}
