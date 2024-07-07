import{i as u,S as f}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&t(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const m="44760113-b733d2f51a4c6409aa3483a05",d={webformatURL:"",largeImageURL:"",tags:"alt",views:1,downloads:1,likes:1,comments:1,user_id:1,user:""};function i(s){return fetch(`https://pixabay.com/api/?key=${m}`,d).then(r=>{if(console.log(r),!r.ok)throw new Error(r.status);return r.json()})}const y=document.querySelector(".uzers-form-image");y.addEventListener("submit",h);function h(s){const r=s.currentTarget.elements;r.elements.searchQuery.value.toLowerCase().trim(),i().then(n).catch(p).finally(()=>r.reset())}const c=document.querySelector(".gallery");c.addEventListener("submit",n);function n(s,r){const a=document.parameters;a.map(({image:t})=>` <div class="gallery">"${a}"
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
    </div> `).join("").refresh(),c.innerHTML("afterbegin",n())}function p(s){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}new f(".gallery a",{captionDelay:200,captionsData:"alt"});i().then(s=>console.log(s));n().then(s=>console.log(s));
//# sourceMappingURL=commonHelpers.js.map
