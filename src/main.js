

import {getImage} from "./js/pixabay-api"
import {fechGallery} from "./js/render-functions"
import {renderGalleryMarkap} from "./js/render-functions"

// renderGalleryMarkap().then(data => console.log(data));


const formSearchImage = document.querySelector(".uzers-form-image");//все запускається з сабміта форми
formSearchImage.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget; // посилання на елемент форми
    const photQueryValue = form.elements.searchQuery.value.toLowerCase().trim(); //значення яке написав користувач

    getImage(photQueryValue).then(data => {
        console.log(data);
        renderGalleryMarkap(data.hits) //додаю перевірку на введене значення
        .catch(fechGallery)  // первіряємо на помилки та видаємо повідомлення якщо такого не існує (404) Показати message: `Sorry
        .finally(() => form.reset()); //очистка данних форми після закінчення промісу(очистка тексту в інпуті)
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
