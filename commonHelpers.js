import{S as u,i as m}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(a){const n=`https://pixabay.com/api/?key=44760113-b733d2f51a4c6409aa3483a05&q=${a}&image_typephoto&orientation=horizontal&safesearch=${!0}`;return fetch(n).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}var y=new u(".gallery a",{captionDelay:200,captionsData:"alt"});const c=document.querySelector(".gallery");c.addEventListener("submit",i);function i(a){const o=a.map(r=>` 
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
     `).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function p(a){m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}const d=document.querySelector(".uzers-form-image");d.addEventListener("submit",g);function g(a){a.preventDefault();const o=a.currentTarget,r=o.elements.searchQuery.value.toLowerCase().trim();f(r).then(s=>{console.log(s),i(s.hits)}).catch(s=>{console.error(s),p()}).finally(()=>o.reset())}
//# sourceMappingURL=commonHelpers.js.map
