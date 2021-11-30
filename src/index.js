import './style.css';
import { something } from './slider';

const photoArray = Array.from(document.getElementsByClassName('photo'));
photoArray.forEach((photo) => {
    photo.addEventListener('click', () => {
        something(photoArray);
    });
});
