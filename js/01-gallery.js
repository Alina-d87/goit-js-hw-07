import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refGallery = document.querySelector('.gallery');

const cardGallery = cardGalleryItems(galleryItems);
refGallery.insertAdjacentHTML('beforeend', cardGallery);

refGallery.addEventListener('click', onClickGallery);

function cardGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
      src="${preview}"
      data-source= "${original}"
      alt="${description}"
      />
    </a>
</div>`;
    })
    .join(' ');
}

function onClickGallery(event) {
  stopGalleryDef(event);
  if (event.target !== event.currentTarget) {
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}" width="800" height="600">`,
    );

    return instance.show();
  }
}

function stopGalleryDef(event) {
  event.preventDefault();
}
