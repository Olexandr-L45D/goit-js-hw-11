import{i as d,S as g}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function c(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=c(o);fetch(o.href,r)}})();const h="44760113-b733d2f51a4c6409aa3483a05";function l(){return fetch(`https://pixabay.com/api/?key=${h}&hits=q`).then(e=>{if(console.log(e),!e.ok)throw new Error(e.status);return e.json()})}const m={previewURL:"https://cdn.pixabay.com/photo/2024/06/30/23/57/squirrel-8864107_150.jpg",webformatURL:"https://pixabay.com/get/g858d18ffa3ce5a0fbc0d51ec79d23bb9775c58227121af54c490c318c4b655aede101bdff693dd695aaa6f604ceb03893eeecd863ceca7b6fc5fbfc08a0f83c4_640.jpg",largeImageURL:"https://pixabay.com/get/g9fa0ab20fb3cbe941e1af3dbeb59b54bcd8bc3b1df699b29408e314a712c82264d6b44657c6a6920d1e3b4422d215a288121d36726e82087c6f028d81e705b07_1280.jpg",tags:"alt",views:1,downloads:1,likes:1,comments:1};function p(e){const a=`https://pixabay.com/api?key=44760113-b733d2f51a4c6409aa3483a05&q=${e}&image_typephoto&orientation=horizontal&safesearch=${!0}`;return fetch(a).then(n=>{if(console.log(n),!n.ok)throw new Error(n.status);return n.json()})}function y(e){return fetch(`https://pixabay.com/api/?key=${API_KEY}&${q}`).then(t=>{if(console.log(t),!t.ok)throw new Error(t.status);return t.json()})}const b=document.querySelector(".uzers-form-image"),$=document.querySelector(".gallery");b.addEventListener("submit",i);function i(e){e.preventDefault();const c=e.currentTarget.formsImage.elements.photo;console.log(c)}function f(e){return e.map(t=>`
    <li class="gallery-item">
    <p>${t.views}</p>
    <p>${t.downloads}</p>
    <p>${t.likes}</p>
    <p>${t.comments}</p>
  <a class="gallery-link" href="${t.webformatURL}"><img
      class="gallery-image"
      src="${t.previewURL}"
      alt="${t.tags}"
    />
  </a>
  <a class="gallery-link" href="${t.largeImageURL}">
    <img
      class="gallery-image"
      src="${t.previewURL}"
      alt="${t.tags}"
    />
  </a>
</li> `).join("")}$.insertAdjacentHTML("afterbegin",f(m));const w=document.querySelector(".form");w.addEventListener("submit",u);function u(e){e.preventDefault(),l().then(t=>console.log(t)).catch(()=>d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}))}new g(".gallery a",{captionDelay:250,captionsData:"alt"});l().then(e=>console.log(e));p().then(e=>console.log(e));y().then(e=>console.log(e));i().then(e=>console.log(e));f().then(e=>console.log(e));u().then(e=>console.log(e));
//# sourceMappingURL=commonHelpers.js.map
