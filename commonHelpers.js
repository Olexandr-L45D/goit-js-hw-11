import{i as f,S as m}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const d="44760113-b733d2f51a4c6409aa3483a05",h={webformatURL:"",largeImageURL:"",tags:"alt",views:1,downloads:1,likes:1,comments:1,user_id:1,user:""};function i(o){return fetch(`https://pixabay.com/api/?key=${d}`,h).then(r=>{if(console.log(r),!r.ok)throw new Error(r.status);return r.json()})}const y=document.querySelector(".uzers-form-image");y.addEventListener("submit",c);function c(o){const r=o.currentTarget.elements;r.elements.searchQuery.value.toLowerCase().trim(),i().then(n).catch(g).finally(()=>r.reset())}const u=document.querySelector(".gallery");u.addEventListener("submit",n);function n(o,r){const a=document.parameters;a.map(({image:t})=>` <div class="gallery">"${a}"
    <li class="gallery-item">
    <p>${t.views}</p>
    <p>${t.downloads}</p>
    <p>${t.likes}</p>
    <p>${t.comments}</p>
    <a class="gallery-link" href="${t.webformatURL}">
    <img class="gallery-image" src="${t.orientat}" alt="${t.tags}" title="${t.name}"/></a>
    <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-image" src="${t.orientat}" alt="" title="${t.tags}"/></a>
    </li> 
    </div> `).join("").refresh(),u.innerHTML("afterbegin",n())}function g(o){f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}new m(".gallery a",{captionDelay:200,captionsData:"alt"});i().then(o=>console.log(o));c().then(o=>console.log(o));n().then(o=>console.log(o));
//# sourceMappingURL=commonHelpers.js.map
