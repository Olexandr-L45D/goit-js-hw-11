
//У розмітці необхідно буде обгорнути кожну картку зображення в посилання, як зазначено в документації в секції «Markup».
//Бібліотека містить метод [refresh()](<https://github.com/andreknieriem/simplelightbox#public-methods>), який обов'язково потрібно викликати щоразу після додавання нових елементів до галереї.
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const hits = {
    q: "", image_type: "photo" , orientation: "horizontal", safesearch: true, name: ""
   } 
   const API_KEYs = "44760113-b733d2f51a4c6409aa3483a05";

   
const parameters = {
  webformatURL: "",        
  largeImageURL: "",
  tags : "alt",
  views: 1,
  downloads: 1,
  likes: 1,
  comments: 1,
  user_id: 1,
  user: "",
};

function fechPhoto(hits) {
    return fetch(`https://pixabay.com/api/?key=${API_KEYs}`, parameters ).then(response => { 
        console.log(response); 
        if (!response.ok) {
          throw new Error(response.status); 
        }
        return response.json(); // виклкикаеттся на обект, повертае Promes
      }
      );
}

export {fechPhoto};


const formSearchImage = document.querySelector(".uzers-form-image");
formSearchImage.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
 // event.preventDefault();
       const form = event.currentTarget.elements; // посилання на елемент форми
       const photQueryValue = form.elements.searchQuery.value.toLowerCase().trim(); //значення яке написав користувач

       fechPhoto(photQueryValue) // робимо запит на сервер та отримуємо відповідь
       .then(creatMarGallery)   // запускаємо функцію яка відмалюовує карточки
       .catch(fechGallery) 
       //.catch(handlerInput)  // первіряємо на помилки та видаємо повідомлення якщо такого не існує (404) Показати message: `Sorry
       .finally(() => form.reset()); //очистка данних форми після закінчення промісу(очистка тексту в інпуті)
};

export {handlerSearch};

const galleryContainer = document.querySelector('.gallery'); // створює розмітку для галереї
galleryContainer.addEventListener('submit', creatMarGallery);
   //function creatMarGallery({views, downloads, likes, comments, webformatURL, tags, largeImageURL, hits}) 
   function creatMarGallery(parameters, hits ) 
  {
    const hitsList = document.parameters;
    hitsList.map(({image}) =>  
      ` <div class="gallery">"${hitsList}"
    <li class="gallery-item">
    <p>${image.views}</p>
    <p>${image.downloads}</p>
    <p>${image.likes}</p>
    <p>${image.comments}</p>
    <a class="gallery-link" href="${image.webformatURL}">
    <img class="gallery-image" src="${image.orientat}" alt="${image.tags}" title="${image.name}"/></a>
    <a class="gallery-link" href="${image.largeImageURL}">
    <img class="gallery-image" src="${image.orientat}" alt="" title="${image.tags}"/></a>
    </li> 
    </div> ` )
      .join("").refresh()
      galleryContainer.innerHTML("afterbegin", creatMarGallery(hitsList));
     
  };
 
  export {creatMarGallery}

// проста функція виклика повідомлення про помилку без перевірки

 function fechGallery(error) {
  iziToast.error({title: 'Error', 
    message: `Sorry, there are no images matching your search query. Please try again!`})
 }

  var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 200, captionsData: 'alt'  });

// initialSelector = null; // закоментований метод нижче refresh() з бібліотеки
// this.initialSelector = elements;
// refresh() {
//   if (!this.initialSelector) {
//       throw 'refreshing only works when you initialize using a selector!';
//   }
//   let options = this.options,
//       selector = this.initialSelector;
//   this.destroy();
//   this.constructor(selector, options);
//   return this;
// }
// export default SimpleLightbox;
 
// const forms = document.querySelector('.uzers-form-image'); //  функція прослуховує на значення введене Юзером
// forms.addEventListener('input', handlerInput );
// function handlerInput(event) {
//     event.preventDefault();
// if (!photQueryValue === safesearch) // Показати message: `Sorry, використати приклад якщо не знаходиться така назва в бібліотеці pixabay
//   {
//     iziToast.error({
//         title: 'Error',
//         message: `Sorry, there are no images matching your search query. Please try again!`
//     })
//   }};
    
//  export {handlerInput};



// підключити ще бібліотеку для завантаження спінера(нижче взяв з репозиторію)
// const main = document.getElementById('main');
// // Create Spinners 
// LOADERS.forEach((loader, i) => {    
//     // Append Loader
//     main.appendChild(createLoader(i));
    
// })










