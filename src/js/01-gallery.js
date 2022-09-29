import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const galaryList = document.querySelector(".gallery");
const imageNew = galleryItems
  .map(
    (galleryItems) =>
      `<a class="gallery__link" href=${galleryItems.original}>
    <img
      class="gallery__image"
      src=${galleryItems.preview}
      data-source=${galleryItems.original}
      alt=${galleryItems.description}
    />
  </a>`
  )
  .join("");

const render = () => {
  galaryList.innerHTML = "";
  galaryList.insertAdjacentHTML("beforeend", imageNew);
};

render();

const onClick = (evt) => {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) return;
       
 
};
var lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

galaryList.addEventListener("click", onClick);
