
import {getImage} from "./js/pixabay-api"

import {fechPhoto} from "./js/render-functions"
fechPhoto().then(data => console.log(data));

import {handlerSearch} from "./js/render-functions"
handlerSearch().then(data => console.log(data));


import {creatMarGallery} from "./js/render-functions"
creatMarGallery().then(data => console.log(data));

// const refsOutput = {
//     formS: document.querySelector('.uzers-form-image'),
//      imGgallery: document.querySelector('.gallery')
    
// }

// //formSearchImage.addEventListener('submit', handlerSearch);
// // refsOutput.formS.addEventListener('submit', handlerSearch);

// refsOutput.formS.addEventListener('submit', handlerSubmit);

// function handlerSubmit(event) {
//     event.preventDefault();
//     userRequest = event.target.searchQuery.value.trim()
//     getImage(userRequest).then(data => console.log(data));
// }
