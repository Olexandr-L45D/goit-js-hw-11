
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 200, captionsData: 'alt'  });

const galleryContainer = document.querySelector('.gallery'); // function створює розмітку для галереї
galleryContainer.addEventListener('submit', renderGalleryMarkap);
   
   export function renderGalleryMarkap(images) {
    const markup = images
    .map((image) =>  
      ` 
    <li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">
    <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" title="${image.name}"/></a>
    <div class="gallery-paragraf">
    <p class="gallery-commant">likes ${image.likes}</p>
    <p class="gallery-commant">views ${image.views}</p>
    <p class="gallery-commant">comments ${image.comments}</p>
    <p class="gallery-commant">downloads ${image.downloads}</p>
    </div>
    </li> 
     ` )
      .join("")
      galleryContainer.insertAdjacentHTML("beforeend", markup);
      lightbox.refresh()
  };
// проста функція виклика повідомлення про помилку без перевірки and iziToast
 function fechGallery(error) {
  iziToast.error({title: 'Error', 
    message: `Sorry, there are no images matching your search query. Please try again!`})
 }
 export {fechGallery};





 

// підключити ще бібліотеку для завантаження спінера(нижче взяв з репозиторію) СПІНЕР???
// const main = document.getElementById('main');
// // Create Spinners 
// LOADERS.forEach((loader, i) => {    
//     // Append Loader
//     main.appendChild(createLoader(i));
    
// })










