// Описаний у документації
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
// import axios from 'axios';
import imgUrl from '/img/xmark.svg';
import { markupGallery } from '/js/render-functions.js';
import { fetchGallery } from '/js/pixabay-api.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');
// initialization SimpleLightbox
const gallerySL = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const onSearchFormSubmit = event => {
  event.preventDefault();
  loaderEl.classList.remove('is-hidden');
  const searchingItQ = searchFormEl.elements.picture_query.value;

  fetchGallery(searchingItQ)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          color: '#EF4040',
          position: 'topRight',
          iconUrl: imgUrl,
          iconColor: 'white',
          messageColor: 'white',
          timeout: 4000,
          titleColor: 'white',
          progressBar: 'false',
        });
        galleryEl.innerHTML = '';
        searchFormEl.reset();
        return;
      }
      const createGalleryCards = data.hits
        .map(imgDetails => markupGallery(imgDetails))
        .join('');

      galleryEl.innerHTML = createGalleryCards;
      gallerySL.refresh(); // Destroys and reinitializes the lightbox
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loaderEl.classList.add('is-hidden');
    });
};
searchFormEl.addEventListener('submit', onSearchFormSubmit);
