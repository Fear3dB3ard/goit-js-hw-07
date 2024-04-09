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
    img.setAttribute("data-source", item.original);
    img.alt = item.description;

    a.appendChild(img);
    li.appendChild(a);
    return li;
  }

  function openModal(event) {
    event.preventDefault();
    if (event.target.nodeName === "IMG") {
      const imgSrc = event.target.dataset.source;
      const instance = basicLightbox.create(`<img src="${imgSrc}">`);
      instance.show();
    }
  }

  gallery.addEventListener("click", openModal);

  // Populate gallery
  galleryItems.forEach((item) => {
    const galleryItem = createGalleryItem(item);
    gallery.appendChild(galleryItem);
  });
});

console.log(galleryItems);
