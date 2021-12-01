import './style.css';
import { assignId, createNavButtons, nextPhoto, previousPhoto, removeStyle, choosePhoto } from './slider';


const photoArray = Array.from(document.getElementsByClassName('photo'));
assignId(photoArray);
removeStyle(photoArray);
createNavButtons(photoArray);

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

setInterval(function(){
    frame.click();}, 5000); 