
    
    export function getImage(str) {
        const BaSe_URL ="https://pixabay.com/api/";
        const API_KEY = "44760113-b733d2f51a4c6409aa3483a05";
        const imageType = 'photo';
        const orientat = "horizontal";
        const safesearch = true;
        const urlRaqeuestes = `${BaSe_URL}?key=${API_KEY}&q=${str}&image_type${imageType}&orientation=${orientat}&safesearch=${safesearch}`
        return fetch(urlRaqeuestes).then(response => { 
            //console.log(response); 
            if (!response.ok) {
              throw new Error(response.status); 
            }
            return response.json(); 
          }
          );}