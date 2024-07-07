import{S as i,i as u}from"./assets/vendor-0fc460d7.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="44760113-b733d2f51a4c6409aa3483a05";function f(){return fetch(`https://pixabay.com/api/?key=${m}&q=dog`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}var d=new i(".gallery a",{captionDelay:200,captionsData:"alt"});const n=document.querySelector(".gallery");n.addEventListener("submit",c);function c(o){const a=o.map(r=>` 
    <li class="gallery-item">
    <a class="gallery-link" href="${r.largeImageURL}">
    <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" title="${r.name}"/></a>
    <div class="gallery-paragraf">
    <p class="gallery-commant">likes ${r.likes}</p>
    <p class="gallery-commant">views ${r.views}</p>
    <p class="gallery-commant">comments ${r.comments}</p>
    <p class="gallery-commant">downloads ${r.downloads}</p>
    </div>
    </li> 
     `).join("");n.insertAdjacentHTML("beforeend",a),d.refresh()}function y(o){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}const p=document.querySelector(".uzers-form-image");p.addEventListener("submit",g);function g(o){o.preventDefault();const a=o.currentTarget;a.elements.searchQuery.value.toLowerCase().trim(),f().then(r=>{console.log(r),c(r.hits).catch(y).finally(()=>a.reset())})}
//# sourceMappingURL=commonHelpers.js.map
