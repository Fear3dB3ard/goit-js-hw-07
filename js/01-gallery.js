import { galleryItems } from "./gallery-items.js";

// gallery container
const gallery = document.querySelector(".gallery");

//  create and render gallery items
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
  image.dataset.source = item.original;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

// open image in fullscreen modal
function openFullscreenModal(event) {
  event.preventDefault();

  const imageSrc = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${imageSrc}" alt="Fullscreen Image">`
  );

  instance.show();
}

// render the gallery
function renderGallery() {
  const galleryItemsHTML = galleryItems.map(createGalleryItem);
  gallery.append(...galleryItemsHTML);

  // Add click event listener to each image
  const galleryImages = document.querySelectorAll(".gallery__image");
  galleryImages.forEach((image) => {
    image.addEventListener("click", openFullscreenModal);
  });
}

renderGallery();
