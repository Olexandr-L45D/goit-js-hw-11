// //2 task
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
// // grete obgeckt:
// <li>webformatURL:
//       largeImageURL:
//       alt: tags
//       views:
//       comments:
//       downloads:</li>
//   </ul> 

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

//     "hits": [ // взяв масив з ресурса pixabay.com/photos
//         {
//             "id": 3139127,
//             "pageURL": "https://pixabay.com/photos/desk-work-business-office-finance-3139127/",
//             "type": "photo",
//             "tags": "desk, work, business",
//             "previewURL": "https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127_150.jpg",
//             "previewWidth": 150,
//             "previewHeight": 96,
//             "webformatURL": "https://pixabay.com/get/g858d18ffa3ce5a0fbc0d51ec79d23bb9775c58227121af54c490c318c4b655aede101bdff693dd695aaa6f604ceb03893eeecd863ceca7b6fc5fbfc08a0f83c4_640.jpg",
//             "webformatWidth": 640,
//             "webformatHeight": 412,
//             "largeImageURL": "https://pixabay.com/get/g9fa0ab20fb3cbe941e1af3dbeb59b54bcd8bc3b1df699b29408e314a712c82264d6b44657c6a6920d1e3b4422d215a288121d36726e82087c6f028d81e705b07_1280.jpg",
//             "imageWidth": 5983,
//             "imageHeight": 3853,
//             "imageSize": 7647330,
//             "views": 266819,
//             "downloads": 161646,
//             "collections": 703,
//             "likes": 479,
//             "comments": 57,
//             "user_id": 4283981,
//             "user": "rawpixel",
//             "userImageURL": "https://cdn.pixabay.com/user/2024/03/14/08-35-52-464_250x250.jpg"
//         },
// }