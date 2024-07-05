import{i as h,S as y}from"./assets/vendor-0fc460d7.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const p="44760113-b733d2f51a4c6409aa3483a05";function d(){return fetch(`https://pixabay.com/api/?key=${p}&hits=q`).then(e=>{if(console.log(e),!e.ok)throw new Error(e.status);return e.json()})}function l(e){const o=`https://pixabay.com/api/?key=44760113-b733d2f51a4c6409aa3483a05&q=${e}&image_typephoto&orientation=horizontal&safesearch=${!0}`;return fetch(o).then(i=>{if(console.log(i),!i.ok)throw new Error(i.status);return i.json()})}function c(e){return fetch(`https://pixabay.com/api/?key=${l.Me_KEY}&${l.q}`).then(a=>{if(console.log(a),!a.ok)throw new Error(a.status);return a.json()})}const $=document.querySelector(".uzers-form-image"),w=document.querySelector(".gallery");$.addEventListener("submit",m);function m(e){e.preventDefault(),e.currentTarget.elements.query.value.toLowerCase,c().then(L).catch(b)}function L({views:e,downloads:a,likes:s,comments:n,webformatURL:t,tags:r,largeImageURL:o,abilities:i}){const u=i.map(f=>`<li class="list-group-new">${f.query}</li>`).join(""),g=` 
    <li class="gallery-item">
    <p>${image.views}</p>
    <p>${image.downloads}</p>
    <p>${image.likes}</p>
    <p>${image.comments}</p>
  <a class="gallery-link" href="${image.webformatURL}"><img src="${image.orientat}"
      class="gallery-image" alt="${image.tags}"/>
  </a>
  <a class="gallery-link" href="${image.largeImageURL}"><img src="${image.orientat}"
      class="gallery-image" alt="${image.tags}"/>
  </a>
  <ul class="gallery">"${u}"</ul> 
</li> `;w.innerHTML=g}function b(e){h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}new y(".gallery a",{captionDelay:250,captionsData:"alt"});d().then(e=>console.log(e));l().then(e=>console.log(e));c().then(e=>console.log(e));m().then(e=>console.log(e));
//# sourceMappingURL=commonHelpers.js.map
