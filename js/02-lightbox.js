import { galleryItems } from "./gallery-items.js";

// gallery container
const gallery = document.querySelector(".gallery");

// create and render gallery items
function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

// render the gallery
function renderGallery() {
  const galleryItemsHTML = galleryItems.map(createGalleryItem);
  gallery.append(...galleryItemsHTML);

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}

renderGallery();
