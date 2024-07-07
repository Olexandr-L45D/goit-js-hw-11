



import {getImage} from "./js/pixabay-api"
 import {fechGallery} from "./js/render-functions"
import {renderGalleryMarkap} from "./js/render-functions"


const formSearchImage = document.querySelector(".uzers-form-image");//все запускається з сабміта форми
formSearchImage.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget; // посилання на елемент форми
    const photQueryValue = form.elements.searchQuery.value.toLowerCase().trim(); //значення яке написав користувач

    getImage(photQueryValue).then(data => {
        console.log(data);
        renderGalleryMarkap(data.hits)
    }).catch(error => {console.error(error);
             fechGallery()
           })
    .finally(() => form.reset()); //очистка данних форми після закінчення промісу(очистка тексту в інпуті)
}

