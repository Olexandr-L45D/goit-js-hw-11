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

const hits = {
  q: "", image_type: "photo" , orientation: "horizontal", safesearch: "true"
}

const API_KEY = "44760113-b733d2f51a4c6409aa3483a05";
// fetch(`https://pixabay.com/api/?key=${API_KEY}`)

export function getImage() {
  return fetch(`https://pixabay.com/api/?key=${API_KEY}&hits=q`).then(response => { 
      console.log(response); // приходить выд серверу в вигл обекта РЕСПОНСresponse
      if (!response.ok) {
        throw new Error(response.status); // перевырка в разы помилки 404 щоб пропустила в catch
      }
      return response.json(); // виклкикаеттся на обект ы повертае ПРОМiс
    }
    );
    }

