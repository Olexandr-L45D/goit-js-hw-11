
import {getImage} from "./js/pixabay-api"
getImage().then((data) => console.log(data))

import {newUrl} from "./js/render-functions"
newUrl().then((dat) => console.log(dat))

import {fechPhoto} from "./js/render-functions"
fechPhoto().then((dat) => console.log(dat))

import {handlerSearch} from "./js/render-functions"
handlerSearch().then((dat) => console.log(dat))

import {creatMarGallery} from "./js/render-functions"
creatMarGallery().then((dat) => console.log(dat))


import {handlerSabmit} from "./js/render-functions"
handlerSabmit().then((event) => console.log(event))
