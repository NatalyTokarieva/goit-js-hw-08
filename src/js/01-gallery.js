

  import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
import '../css/01-gallery.css';
import '../css/common.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);



const divGallery = document.querySelector('.gallery')
const divGalleryMarkup = createItemsMarkup(galleryItems)
divGallery.insertAdjacentHTML('beforeend',divGalleryMarkup)


function createItemsMarkup(galleryItems){
    return galleryItems
    .map(({preview, original, description}) =>{

    return`
    <ul class="gallery">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>
</ul>`
})
.join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionType: "alt",
  });
