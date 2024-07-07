

import {getImage} from "./js/pixabay-api"
// import {fechPhoto} from "./js/render-functions"
//  import {handlerSearch} from "./js/render-functions"
 import {renderGalleryMarkap} from "./js/render-functions"

// fechPhoto().then(data => console.log(data));
// renderGalleryMarkap().then(data => console.log(data));


const formSearchImage = document.querySelector(".uzers-form-image");//все запускається з сабміта форми
formSearchImage.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    getImage().then(data => {
        console.log(data);
        renderGalleryMarkap(data.hits)
    })
}


// handlerSearch().then(data => console.log(data));

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
