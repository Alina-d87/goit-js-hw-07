import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refGallery = document.querySelector('.gallery');

const cardGallery = cardGalleryItems(galleryItems);
refGallery.insertAdjacentHTML('beforeend', cardGallery);

function cardGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img
    class="gallery__image"
      src="${preview}"
      data-source= "${original}"
      alt="${description}"
      />
    </a>`;
    })
    .join(' ');
}

const onModal = new SimpleLightbox('.gallery__item', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
