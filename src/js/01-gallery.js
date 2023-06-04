// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
console.log(galleryItems);

const ul = document.querySelector(".gallery");

const galleryList = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
    <a href="${original}" class="gallery__link">
    <img class="gallery__image" src="${preview}" alt="${description}">
    </a>
    </li>`;
  })
  .join("");

ul.insertAdjacentHTML("beforeend", galleryList);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});