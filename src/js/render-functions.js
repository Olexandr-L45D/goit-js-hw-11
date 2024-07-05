// //2 task
// У файлі render-functions.js створи функції для відображення елементів інтерфейсу.
// У файлі main.js напиши всю логіку роботи додатка.
// Кожне зображення описується об'єктом, з якого тобі цікаві тільки такі властивості:
//add html:
// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень
// Перед пошуком за новим ключовим словом необхідно повністю очищати вміст галереї, щоб не змішувати результати запитів.
//Якщо бекенд повертає порожній масив, значить, нічого підходящого не було знайдено.
//  У такому разі показуй повідомлення з текстом
//  "Sorry, there are no images matching your search query. Please try again!".
 //Для повідомлень використовуй бібліотеку iziToast
// Подивись демовідео роботи застосунку на цьому етапі.
//У розмітці необхідно буде обгорнути кожну картку зображення в посилання, як зазначено в документації в секції «Markup».
//Бібліотека містить метод [refresh()](<https://github.com/andreknieriem/simplelightbox#public-methods>), який обов'язково потрібно викликати щоразу після додавання нових елементів до галереї.
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

 import {getImage} from "./pixabay-api";

const parameters = {
    previewURL: "https://cdn.pixabay.com/photo/2024/06/30/23/57/squirrel-8864107_150.jpg",
    webformatURL: "https://pixabay.com/get/g858d18ffa3ce5a0fbc0d51ec79d23bb9775c58227121af54c490c318c4b655aede101bdff693dd695aaa6f604ceb03893eeecd863ceca7b6fc5fbfc08a0f83c4_640.jpg",          
    largeImageURL: "https://pixabay.com/get/g9fa0ab20fb3cbe941e1af3dbeb59b54bcd8bc3b1df699b29408e314a712c82264d6b44657c6a6920d1e3b4422d215a288121d36726e82087c6f028d81e705b07_1280.jpg",
    tags : "alt",
    views: 1,
    downloads: 1,
    likes: 1,
    comments: 1,
};

function newUrl(str) {
    const BaSe_URL ="https://pixabay.com/api";
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
        return response.json(); // виклкикаеттся на обект, повертае Promes
      }
      );
}
// newUrl().then((user) => console.log(user))
//     .catch((error) => console.log(error));
    export {newUrl};


const hitss = {
    q: "", image_type: "photo" , orientation: "horizontal", safesearch: true
   } //search query (можливо треба додати цю властивість?)
  
function fechPhoto(hitss) {
    return fetch(`https://pixabay.com/api/?key=${API_KEY}&${q}`).then(response => { 
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

const formsImage = document.querySelector('.uzers-form-image');
const galleryContainer = document.querySelector('.gallery');
formsImage.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
       event.preventDefault();
       const form = event.currentTarget;
       const photoValue = form.formsImage.elements.photo;
       console.log(photoValue);
}

export {handlerSearch};

  function creatMarGallery(parameters) {
    return parameters.map(image => `
    <li class="gallery-item">
    <p>${image.views}</p>
    <p>${image.downloads}</p>
    <p>${image.likes}</p>
    <p>${image.comments}</p>
  <a class="gallery-link" href="${image.webformatURL}"><img
      class="gallery-image"
      src="${image.previewURL}"
      alt="${image.tags}"
    />
  </a>
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.previewURL}"
      alt="${image.tags}"
    />
  </a>
</li> `).join("");
 };
 galleryContainer.insertAdjacentHTML("afterbegin", creatMarGallery(parameters));

 export {creatMarGallery};

const forms = document.querySelector('.form'); //  функція прослуховує на значення введене Юзером
forms.addEventListener('submit', handlerSabmit );
function handlerSabmit(event) {
    event.preventDefault();
    getImage().then((data) => console.log(data)) // експортував функцію getImage() з першого файлу pixabay-api
.catch(() =>  iziToast.error({title: 'Error', 
  message: `Sorry, there are no images matching your search query. Please try again!`})
 )};

 export {handlerSabmit};

 var lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt'  });


// const fetchUserList = document.querySelector(".btn"); // creteLiMarkup - створюе розмiтку

//       const listGretMarkup = creteLISTMarkup(data);
//       fetchUserList.insertAdjacentHTML("beforeend", listGretMarkup);// додає розмітку
















// function cretPromis(delay, states) {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (states === 'fulfilled') {
//           resolve(delay);
//         } else {
//           reject(delay);
//         }
//       }, delay);
//     });
// }

// const fetchUserBtn = document.querySelector(".btn");



// function updateBookById(update, bookId) {
//     const options = {
//       method: "PATCH",
//       body: JSON.stringify(update),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
  
//     return fetch(`${URL}/books/${bookId}`, options).then((res) => {
//       if (!res.ok) {
//         throw new Error(res.status);
//       }
  
//       return res.json();
//     });
//   }
//  fetch(`https://pixabay.com/api/?key=${API_KEY}&hits=q`)

// .then(response => { 
//   console.log(response); // приходить вiд серверу в вигл response
//   if (!response.ok) {
//     throw new Error(response.status); // перев помилки 404 щоб пропустила в catch
//   }
//   return response.json(); // виклкикаеттся на обект ы повертае ПРОМс
// }
// ).then((data) => 
// {
//   console.log(data);
//   const listGretMarkup = creteLISTMarkup(data);
//   fetchUserList.insertAdjacentHTML("beforeend", listGretMarkup);
// })
// .catch((error) => console.error("fech error:", error )
// );


