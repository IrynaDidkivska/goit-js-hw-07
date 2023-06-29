import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
galleryContainer.addEventListener('click',onGalleryContainerClick)
    // Створення і рендер розмітки
function createGalleryItemsMarkup(galleryItems) { 
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<li class="gallery__item">
            <a href="${original}" class="gallery__link">
            <img
            loading="lazy"
            src="${preview}" 
            alt="${description}" 
            data-source="${original}"
            class="gallery__image">
            </a>
            </li>`
        }
        )
        .join('');
}
// Реалізація делегування
function onGalleryContainerClick(event) { 
    // console.log("open");
    event.preventDefault();
     document.addEventListener('keydown', closeModalWindow);
    const { target: { classList, dataset } } = event;
    const isGalleryImageEl = classList.contains('gallery__image');
     if (!isGalleryImageEl) {
    return;
     }
    //   Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям.
    const bannerImgEl = basicLightbox.create(`
    <img src="${dataset.source}">`);
    bannerImgEl.show();
 
    // закриття модального вікна після натискання клавіші Escape
    function closeModalWindow(event) {
        // console.log('close');
    if (event.key === 'Escape') {
        bannerImgEl.close(() => document.removeEventListener('keydown', closeModalWindow));
    }
}
  
}

console.log(galleryItems);
