import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryMarkup = imageMarkup(galleryItems);
const imageContainer = document.querySelector('.gallery');


imageContainer.insertAdjacentHTML('beforeend', galleryMarkup);


function imageMarkup(galleryItems) {
        return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a>`
    }).join('');
}

imageContainer.addEventListener('click',(event) => {
    event.preventDefault();
    const lightbox = new SimpleLightbox('.gallery a',
    {captionsData : 'alt',
     captionDelay : 250,
    //  loop : false,
    //  enableKeyboard :false,
    });
})