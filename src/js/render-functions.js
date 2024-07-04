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

// const fetchUserList = document.querySelector(".btn"); // creteLiMarkup - створюе розмiтку

// const creteLiMarkup = ({hits})=>
// `<li class=${hits}></li> `;

// const creteLISTMarkup = (liArr)=> liArr.map(creteLiMarkup).json("")


// const fetchUserBtn = document.querySelector(".btn");

// function getPictureQvery(parameters) {
//   // const API_KEY = "44760113-b733d2f51a4c6409aa3483a05";
//   return fetch(`https://pixabay.com/api?key= ${API_KEY}&q=${parameters}`)
// .then(response => { 
//   console.log(response); // приходить выд серверу в вигл обекта РЕСПОНСresponse
//   if (!response.ok) {
//     throw new Error(response.status); // перевырка в разы помилки 404 щоб пропустила в catch
//   }
//   return response.json(); // виклкикаеттся на обект ы повертае ПРОМс
// }
// );
// }
// //  getPictureQvery(`q`)
// getPictureQvery( q, image_type, safesearch )
// .then((data) => console.log(data))
// .catch((error) => console.error("fech error:", error ));

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



// const API_KEY = "44760113-b733d2f51a4c6409aa3483a05";
// const parameters = {
//   key : API_KEY,
//   q : String,
//   image_type : photo,
//   orientation : horizontal,
//   safesearch : true
// }


// var API_KEY = '44760113-b733d2f51a4c6409aa3483a05';  // may APi згенерував в Pixaday
// var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="images"('red roses');
// $.getJSON(URL, function(data){
// if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
// else
//     console.log('No hits');
// });
// const options = {
// 	method: "GET"
// };

// const fetchUserBtn = document.querySelector(".btn");
// fetch("https://pixabay.com/api/docs/images")
// fetch(URL)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Data handling
//     console.log(data);
//   })
//   .catch(error => {
//     // Error handling
//   });
  
// const fetchUsersBtn = document.querySelector(".btn");
// const userList = document.querySelector(".user-list");

// fetchUsersBtn.addEventListener("click", () => {
//   fetchUsers()
//     .then((users) => renderUsers(users))
//     .catch((error) => console.log(error));
// });

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users").then(
//     (response) => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// function renderUsers(users) {
//   const markup = users
//     .map((user) => {
//       return `<li>
//           <p><b>Name</b>: ${user.name}</p>
//           <p><b>Email</b>: ${user.email}</p>
//           <p><b>Company</b>: ${user.company.name}</p>
//         </li>`;
//     })
//     .join("");
//   userList.insertAdjacentHTML("beforeend", markup);
// }

// 
// 
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