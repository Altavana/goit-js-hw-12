export const fetchGallery = seachedQuery => {
  const urlParams = new URLSearchParams({
    key: '16196075-bdcf118405fead11ea5570a4c',
    q: seachedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
