import{a as C,S as v,i as c}from"./assets/vendor-CLzIptZB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const n="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.969C7.03867%206.89915%207.12143%206.84374%207.21255%206.80593C7.30366%206.76812%207.40135%206.74866%207.5%206.74866C7.59865%206.74866%207.69633%206.76812%207.78745%206.80593C7.87857%206.84374%207.96133%206.89915%208.031%206.969L12%2010.9395L15.969%206.969C16.0387%206.89927%2016.1215%206.84395%2016.2126%206.80621C16.3037%206.76847%2016.4014%206.74905%2016.5%206.74905C16.5986%206.74905%2016.6963%206.76847%2016.7874%206.80621C16.8785%206.84395%2016.9613%206.89927%2017.031%206.969C17.1007%207.03873%2017.156%207.12151%2017.1938%207.21262C17.2315%207.30373%2017.2509%207.40138%2017.2509%207.5C17.2509%207.59861%2017.2315%207.69626%2017.1938%207.78737C17.156%207.87848%2017.1007%207.96127%2017.031%208.031L13.0605%2012L17.031%2015.969C17.1007%2016.0387%2017.156%2016.1215%2017.1938%2016.2126C17.2315%2016.3037%2017.2509%2016.4014%2017.2509%2016.5C17.2509%2016.5986%2017.2315%2016.6963%2017.1938%2016.7874C17.156%2016.8785%2017.1007%2016.9613%2017.031%2017.031C16.9613%2017.1007%2016.8785%2017.156%2016.7874%2017.1938C16.6963%2017.2315%2016.5986%2017.2509%2016.5%2017.2509C16.4014%2017.2509%2016.3037%2017.2315%2016.2126%2017.1938C16.1215%2017.156%2016.0387%2017.1007%2015.969%2017.031L12%2013.0605L8.031%2017.031C7.96127%2017.1007%207.87848%2017.156%207.78737%2017.1938C7.69626%2017.2315%207.59861%2017.2509%207.5%2017.2509C7.40138%2017.2509%207.30373%2017.2315%207.21262%2017.1938C7.12151%2017.156%207.03873%2017.1007%206.969%2017.031C6.89927%2016.9613%206.84395%2016.8785%206.80621%2016.7874C6.76847%2016.6963%206.74905%2016.5986%206.74905%2016.5C6.74905%2016.4014%206.76847%2016.3037%206.80621%2016.2126C6.84395%2016.1215%206.89927%2016.0387%206.969%2015.969L10.9395%2012L6.969%208.031C6.89915%207.96133%206.84374%207.87857%206.80593%207.78745C6.76812%207.69633%206.74866%207.59865%206.74866%207.5C6.74866%207.40135%206.76812%207.30366%206.80593%207.21255C6.84374%207.12143%206.89915%207.03867%206.969%206.969Z'%20fill='%23FAFAFB'/%3e%3c/svg%3e",y=r=>`<li class="gallery-card"> <a class="gallery-link" href="${r.largeImageURL}">
              <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" /> </a>
        <ul class="img-descr">
        <li class="img-descr-item">
          <h2 class="img-descr-title">Likes</h2>
          <p class="img-descr-points">${r.likes}</p>
        </li>
        <li class="img-descr-item">
          <h2 class="img-descr-title">Views</h2>
          <p class="img-descr-points">${r.views}</p>
        </li>
        <li class="img-descr-item">
          <h2 class="img-descr-title">Comments</h2>
          <p class="img-descr-points">${r.comments}</p>
        </li>
        <li class="img-descr-item">
          <h2 class="img-descr-title">Downloads</h2>
          <p class="img-descr-points">${r.downloads}</p>
        </li>
      </ul>
             </li>`;C.defaults.baseURL="https://pixabay.com";const f=(r,t,o)=>{const i={params:{key:"16196075-bdcf118405fead11ea5570a4c",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:o}};return C.get("/api/",i)},d=document.querySelector(".js-search-form"),m=document.querySelector(".js-gallery"),g=document.querySelector(".loader"),l=document.querySelector(".load-btn"),L=new v(".gallery a",{captionsData:"alt",captionDelay:250});let a=1;const u=15;let h="",w=0;const b=async r=>{try{if(r.preventDefault(),g.classList.remove("is-hidden"),h=d.elements.picture_query.value.trim(),!h){c.error({message:"Please enter what you are looking for",color:"#EF4040",position:"topRight",iconUrl:n,iconColor:"white",messageColor:"white",timeout:3e3,titleColor:"white"});return}a=1;const t=await f(h,a,u);if(t.data.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"#EF4040",position:"topRight",iconUrl:n,iconColor:"white",messageColor:"white",timeout:3e3,titleColor:"white"}),l.classList.add("is-hidden"),m.innerHTML="",d.reset();return}const o=t.data.hits.map(s=>y(s)).join("");m.innerHTML=o,L.refresh(),w=m.querySelector("li").getBoundingClientRect().height,l.classList.remove("is-hidden"),t.data.totalHits<u&&(l.classList.add("is-hidden"),c.error({message:"We're sorry, but you've reached the end of search results.",color:"#EF4040",position:"topRight",iconUrl:n,iconColor:"white",messageColor:"white",timeout:3e3,titleColor:"white"}))}catch(t){console.log(t)}finally{g.classList.add("is-hidden"),d.reset()}},F=async r=>{try{g.classList.remove("is-hidden"),a++;const t=await f(h,a,u),o=t.data.totalHits,i=Math.ceil(o/u),e=t.data.hits.map(s=>y(s)).join("");m.insertAdjacentHTML("beforeend",e),scrollBy({top:w*2,behavior:"smooth"}),L.refresh(),a===i&&(l.classList.add("is-hidden"),c.error({message:"We're sorry, but you've reached the end of search results.",color:"#EF4040",position:"topRight",iconUrl:n,iconColor:"white",messageColor:"white",timeout:3e3,titleColor:"white"}))}catch(t){console.log(t)}finally{g.classList.add("is-hidden")}};d.addEventListener("submit",b);l.addEventListener("click",F);
//# sourceMappingURL=index.js.map
