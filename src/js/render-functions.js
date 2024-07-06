
//У розмітці необхідно буде обгорнути кожну картку зображення в посилання, як зазначено в документації в секції «Markup».
//Бібліотека містить метод [refresh()](<https://github.com/andreknieriem/simplelightbox#public-methods>), який обов'язково потрібно викликати щоразу після додавання нових елементів до галереї.
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function newUrl(str) {
    const BaSe_URL ="https://pixabay.com/api/";
    const Me_KEY = "44760113-b733d2f51a4c6409aa3483a05";
    const imageType = 'photo';
    const orientat = "horizontal";
    const safesearch = true;
    const urlRaqeuestes = `${BaSe_URL}?key=${Me_KEY}&q=${str}&image_type${imageType}&orientation=${orientat}&safesearch=${safesearch}`
    return fetch(urlRaqeuestes).then(response => { 
        console.log(response); 
        if (!response.ok) {
          throw new Error(response.status); 
        }
        return response.json(); // виклкикається на обєкт і повертае Promis
      }
      );}

    export {newUrl};

const hits = {
    q: "", image_type: "photo" , orientation: "horizontal", safesearch: true, name: ""
   } 
  
function fechPhoto(hits) {
    return fetch(`https://pixabay.com/api/?key=${newUrl.Me_KEY}&${newUrl.q}`).then(response => { 
        console.log(response); 
        if (!response.ok) {
          throw new Error(response.status); 
        }
        return response.json(); // виклкикаеттся на обект, повертае Promes
      }
      );
}
//fechPhoto(q).then(console.log)
export {fechPhoto};
//  initialSelector = null;
//  this.initialSelector = elements;

const formSearchImage = document.querySelector('.uzers-form-image');
formSearchImage.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
       event.preventDefault();
       const form = event.currentTarget; // посилання на елемент форми
       const photQueryValue = form.elements.query.value.toLowerCase(); //значення яке написав користувач

       fechPhoto(photQueryValue) // робимо запит на сервер та отримуємо відповідь
       .then(creatMarGallery)   // запускаємо функцію яка відмалюовує карточки
       .catch(handlerInput)  // первіряємо на помилки та видаємо повідомлення якщо такого не існує (404) Показати message: `Sorry
       .finally(() => form.reset()); //очистка данних форми після закінчення промісу(очистка тексту в інпуті)
}

export {handlerSearch};

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
//function creatMarGallery(parameters, hits ) 
const galleryContainer = document.querySelector('.gallery');
   function creatMarGallery({views, downloads, likes, comments, webformatURL, tags, largeImageURL, hits}) 
  {
    const hitsList = hits
    .map(({image}) =>  `<li class="list-group-new">${image.name}</li>` )
      .join("");
      const markupHtml = ` 
    <li class="gallery-item">
    <p>${image.views}</p>
    <p>${image.downloads}</p>
    <p>${image.likes}</p>
    <p>${image.comments}</p>
<div class="gallery">"${hitsList}"
    <a class="gallery-link" href="images/&${image.webformatURL}">
    <img class="gallery-image" src="images/thumbs/&${image.orientat}" alt="${image.tags}" title="${image.name}"/></a>
    <a class="gallery-link" href="images/&${image.largeImageURL}">
    <img class="gallery-image" src="images/thumbs/&${image.orientat}" alt="" title="${image.tags}"/></a>
</div>
</li> `
galleryContainer.innerHTML = markupHtml;
refresh()
  };
// initialSelector = null;
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
 
const forms = document.querySelector('.uzers-form-image'); //  функція прослуховує на значення введене Юзером
forms.addEventListener('input', handlerInput );
function handlerInput(event) {
    event.preventDefault();
if (!photQueryValue === safesearch) // Показати message: `Sorry, використати приклад якщо не знаходиться така назва в бібліотеці pixabay
  {
    iziToast.error({
        title: 'Error',
        message: `Sorry, there are no images matching your search query. Please try again!`
    })
  }};
    
//  export {handlerInput};

 var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt'  });

// проста функція виклика повідомлення про помилку без перевірки
//  function fechGallery(error) {
//   iziToast.error({title: 'Error', 
//     message: `Sorry, there are no images matching your search query. Please try again!`})
//  }












