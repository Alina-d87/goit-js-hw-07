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
        alt="${description}"
      />
    </a>`;
    })
    .join(' ');
}

function stopgalleryDef(event) {
  event.preventDefault();
}

//let gallery = new SimpleLightbox('.gallery a');
//gallery.on('show.simplelightbox', function () {
//  <div class="gallery">
//    <a href="images/image1.jpg">
//      <img src="${event.target.dataset.source}" alt="" title="" />
//    </a>
//  </div>;
//});

//gallery.on('error.simplelightbox', function (e) {
//  console.log(e); // Some usefull information
//});
