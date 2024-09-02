import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com';
export const fetchGallery = (seachedQuery, pageGallery, limit) => {
  const urlParams = {
    params: {
      key: '16196075-bdcf118405fead11ea5570a4c',
      q: seachedQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: pageGallery,
      per_page: limit,
    },
  };
  return axios.get('/api/', urlParams);
};
