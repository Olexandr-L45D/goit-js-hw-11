
import {getImage} from "./js/pixabay-api"
 import {fechGallery, refs} from "./js/render-functions"
import {renderGalleryMarkap} from "./js/render-functions"

refs.formSearchImage.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget; // посилання на елемент форми
    const photQueryValue = form.elements.searchQuery.value.toLowerCase().trim(); //значення яке написав користувач
    const searchText = event.target.searchQuery.value;
  if (!searchText) {
    fechGallery('outdata');
    return;
  }
     refs.gallery.innerHTML = '';
     refs.loader.classList.add('loader');
   
    getImage(photQueryValue)
    .then(data => {
        renderGalleryMarkap(data.hits)
        
    }).then(data => {
        refs.loader.classList.remove('loader');
        if (photQueryValue === 0) {
            fechGallery('nodata');
          return;
        }}).catch(error => {
            refs.loader.classList.remove('loader');
            fechGallery(error.hits);
          })
    .finally(() => 
        form.reset()); //очистка тексту в інпуті
    
}

//  if (data.hits === 0) 