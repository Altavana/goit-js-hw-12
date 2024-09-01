export const markupGallery = imgInfo => {
  return `<li class="gallery-card"> <a class="gallery-link" href="${imgInfo.largeImageURL}">
              <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" /> </a>
        <ul class="img-descr">
        <li class="img-descr-item">
          <h2 class="img-descr-title">Likes</h2>
          <p class="img-descr-points">${imgInfo.likes}</p>
        </li>
        <li class="img-descr-item">
          <h2 class="img-descr-title">Views</h2>
          <p class="img-descr-points">${imgInfo.views}</p>
        </li>
        <li class="img-descr-item">
          <h2 class="img-descr-title">Comments</h2>
          <p class="img-descr-points">${imgInfo.comments}</p>
        </li>
        <li class="img-descr-item">
          <h2 class="img-descr-title">Downloads</h2>
          <p class="img-descr-points">${imgInfo.downloads}</p>
        </li>
      </ul>
             </li>`;
};
