
// У файлі pixabay-api.js зберігай функції для HTTP-запитів.

const hits = {
  q: "", image_type: "photo" , orientation: "horizontal", safesearch: true, name: ""
}
  
const API_KEY = "44760113-b733d2f51a4c6409aa3483a05";

export function getImage() {
  return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=dog`).then(response => { 
      //console.log(response); // приходить вiд серверу в вигл обекта РЕСПОНС - response
      if (!response.ok) {
        throw new Error(response.status); // перевiрка в разi помилки 404 щоб пропустила в catch
      }
      return response.json(); // виклкикаеттся на обект i повертае promis
    }
    );
    }

