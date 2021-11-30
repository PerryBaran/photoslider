import './style.css';
import { nextPhoto, previousPhoto, removeStyle, createNavButtons, choosePhoto } from './slider';


const photoArray = Array.from(document.getElementsByClassName('photo'));
removeStyle(photoArray);

const frame = document.getElementById('frame');
frame.addEventListener('click', () => {
    nextPhoto(photoArray);
});

const forwards = document.getElementById('forwards');
forwards.addEventListener('click', () => {
    nextPhoto(photoArray);
});

const backwards = document.getElementById('backwards');
backwards.addEventListener('click', () => {
    previousPhoto(photoArray);
});