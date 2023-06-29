import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(galleryItems) { 
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
            <a href="${original}" class="gallery__link">
            <img
            loading="lazy"
            src="${preview}" 
            alt="${description}" 
            data-source="${description}"
            class="gallery__image">
            </a>
            </li>`
        }
        )
        .join('');
}
galleryContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);



const lightbox = new SimpleLightbox('.gallery a',
    { /* options */
        navText: ['&#10094', '&#10095'],
        closeText: '&#10007',
        captions: true,
        captionsData:	'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
  
    });

console.log(galleryItems);
