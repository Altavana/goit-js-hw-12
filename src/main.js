// Описаний у документації
import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import imgUrl from '/img/xmark.svg';
import { markupGallery } from '/js/render-functions.js';
import { fetchGallery } from '/js/pixabay-api.js';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.loader');
const loadBtn = document.querySelector('.load-btn');

// initialization SimpleLightbox
const gallerySL = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
// Controls the number of items in the group
let pageGallery = 1;
const limit = 15;
let searchQuery = '';
// images line height for scrolling
let imgHeight = 0;

const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();
    loaderEl.classList.remove('is-hidden');
    searchQuery = searchFormEl.elements.picture_query.value.trim();
    if (!searchQuery) {
      iziToast.error({
        message: 'Please enter what you are looking for',
        color: '#EF4040',
        position: 'topRight',
        iconUrl: imgUrl,
        iconColor: 'white',
        messageColor: 'white',
        timeout: 3000,
        titleColor: 'white',
      });
      return;
    }

    // all new query starts with page 1
    pageGallery = 1;
    const response = await fetchGallery(searchQuery, pageGallery, limit);
    if (response.data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        color: '#EF4040',
        position: 'topRight',
        iconUrl: imgUrl,
        iconColor: 'white',
        messageColor: 'white',
        timeout: 3000,
        titleColor: 'white',
      });

      loadBtn.classList.add('is-hidden');
      galleryEl.innerHTML = '';
      searchFormEl.reset();
      return;
    }
    const createGalleryCards = response.data.hits
      .map(imgDetails => markupGallery(imgDetails))
      .join('');

    galleryEl.innerHTML = createGalleryCards;
    gallerySL.refresh(); // Destroys and reinitializes the lightbox, needed for eg. Ajax Calls, or after dom manipulations
    // in first li searching height
    const galleryImg = galleryEl.querySelector('li');
    imgHeight = galleryImg.getBoundingClientRect().height;

    loadBtn.classList.remove('is-hidden');
    const imgsInCollection = response.data.totalHits;
    // validation if in collection images < limit (imege per page).Word for testing  is "mariupol"!!!!
    if (imgsInCollection < limit) {
      loadBtn.classList.add('is-hidden');
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        color: '#EF4040',
        position: 'topRight',
        iconUrl: imgUrl,
        iconColor: 'white',
        messageColor: 'white',
        timeout: 3000,
        titleColor: 'white',
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    loaderEl.classList.add('is-hidden');
    searchFormEl.reset();
  }
};

const onLoadBtnClick = async event => {
  try {
    loaderEl.classList.remove('is-hidden');
    pageGallery++;
    const response = await fetchGallery(searchQuery, pageGallery, limit);
    const imgsInCollection = response.data.totalHits;
    const totalPages = Math.ceil(imgsInCollection / limit);
    const createGalleryCards = response.data.hits
      .map(imgDetails => markupGallery(imgDetails))
      .join('');
    galleryEl.insertAdjacentHTML('beforeend', createGalleryCards);
    scrollBy({
      top: imgHeight * 2,
      behavior: 'smooth',
    });
    gallerySL.refresh(); // Destroys and reinitializes the lightbox, needed for eg. Ajax Calls, or after dom manipulations

    if (pageGallery === totalPages) {
      loadBtn.classList.add('is-hidden');
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        color: '#EF4040',
        position: 'topRight',
        iconUrl: imgUrl,
        iconColor: 'white',
        messageColor: 'white',
        timeout: 3000,
        titleColor: 'white',
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    loaderEl.classList.add('is-hidden');
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadBtn.addEventListener('click', onLoadBtnClick);
