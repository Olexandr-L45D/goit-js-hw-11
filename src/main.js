
import {getImage} from "./js/pixabay-api"
getImage().then((data) => console.log(data))

import {newUrl} from "./js/render-functions"
newUrl().then((dat) => console.log(dat))

import {fechPhoto} from "./js/render-functions"
fechPhoto().then((photo) => console.log(photo))

import {handlerSearch} from "./js/render-functions"
handlerSearch().then((photos) => console.log(photos))

// import {creatMarGallery} from "./js/render-functions"
// creatMarGallery().then((dat) => console.log(dat))


