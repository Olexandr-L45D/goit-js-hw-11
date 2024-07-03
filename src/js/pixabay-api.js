//1 task
// export/import:

// У файлі pixabay-api.js зберігай функції для HTTP-запитів.
// У файлі render-functions.js створи функції для відображення елементів інтерфейсу.
// У файлі main.js напиши всю логіку роботи додатка.
// Список параметрів рядка запиту, які тобі обов'язково необхідно вказати:
// key — твій унікальний ключ доступу до API.
// q — слово для пошуку. Те, що буде вводити користувач.
// image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
// orientation — орієнтація фотографії. Постав значення horizontal.
// safesearch — фільтр за віком. Постав значення true.

// import SimpleLightbox from "simplelightbox";

// import "simplelightbox/dist/simple-lightbox.min.css";
// import iziToast from "izitoast";

// import "izitoast/dist/css/iziToast.min.css";

// const fetchUserBtn = document.querySelector(".btn");
function getPictureQvery(qvery) {
  const API_KEY = "44760113-b733d2f51a4c6409aa3483a05";
  return fetch(`https://pixabay.com/api?key= ${API_KEY}&q=${qvery}`)
.then(response => { 
  console.log(response); // приходить выд серверу в вигл обекта РЕСПОНСresponse
  if (!response.ok) {
    throw new Error(response.status); // перевырка в разы помилки 404 щоб пропустила в catch
  }
  return response.json(); // виклкикаеттся на обект ы повертае ПРОМс
}
);
}
 getPictureQvery("blue+flowers")
.then((data) => console.log(data))
.catch((error) => console.error("fech error:", error ));






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

