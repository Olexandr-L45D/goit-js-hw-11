
import {getImage} from "./js/pixabay-api"
 import {fechGallery, refs} from "./js/render-functions"
import {renderGalleryMarkap} from "./js/render-functions"

const formSearchImage = document.querySelector(".uzers-form-image");//все запускається з сабміта форми
formSearchImage.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const searchText = event.target.searchQuery.value;
  if (!searchText) {
    fechGallery('outdata');
    return;
  }
  refs.gallery.innerHTML = '';
  refs.loader.classList.add('loader');
    const form = event.currentTarget; // посилання на елемент форми
    const photQueryValue = form.elements.searchQuery.value.toLowerCase().trim(); //значення яке написав користувач

    getImage(photQueryValue)
    .then(data => {
        renderGalleryMarkap(data.hits)
        
    }).catch((err) => console.error(err))
    .finally(() => 
        form.reset()); //очистка тексту в інпуті
    
}

