import{S as i}from"./assets/vendor-338edac8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u="44760113-b733d2f51a4c6409aa3483a05";function f(){return fetch(`https://pixabay.com/api/?key=${u}&q=cat`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}var m=new i(".gallery a",{captionDelay:200,captionsData:"alt"});const a=document.querySelector(".gallery");a.addEventListener("submit",c);function c(o){const s=o.map(r=>` 
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
     `).join("");a.insertAdjacentHTML("beforeend",s),m.refresh()}const d=document.querySelector(".uzers-form-image");d.addEventListener("submit",p);function p(o){o.preventDefault(),f().then(s=>{console.log(s),c(s.hits)})}
//# sourceMappingURL=commonHelpers.js.map
