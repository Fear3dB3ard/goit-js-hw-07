import { galleryItems } from "./gallery-items.js";
// Change code below this line
document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");

  function createGalleryItem(item) {
    const li = document.createElement("li");
    li.classList.add("gallery__item");

    const a = document.createElement("a");
    a.classList.add("gallery__link");
    a.href = item.original;

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = item.preview;
    img.alt = item.description;

    a.appendChild(img);
    li.appendChild(a);
    return li;
  }

  // Populate gallery
  galleryItems.forEach((item) => {
    const galleryItem = createGalleryItem(item);
    gallery.appendChild(galleryItem);
  });

  // Initialize SimpleLightbox
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionsDelay: 250,
  });
});

console.log(galleryItems);
