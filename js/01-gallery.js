import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryMarkup = imageMarkup(galleryItems);
const imageContainer = document.querySelector('.gallery');


imageContainer.insertAdjacentHTML('beforeend', galleryMarkup);


function imageMarkup(galleryItems) {
        return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    }).join('');
}


imageContainer.addEventListener('click', (event) => {
    event.preventDefault();
    

	const instance = basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`);
    instance.show();


    if (basicLightbox.visible()) {
        document.addEventListener("keydown", (event) => {
            console.log(event.key);
          if (event.key === "Escape") {
            instance.close();
          }
        });
      }
    });











