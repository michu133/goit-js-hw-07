import { galleryItems } from "./gallery-items.js";

function createGalleryItem(item) {
  const galleryItem = document.createElement("li");

  const link = document.createElement("a");
  link.classList.add("gallery__item");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

function createGallery() {
  const galleryContainer = document.querySelector(".gallery");

  galleryItems.forEach((element) => {
    galleryContainer.appendChild(createGalleryItem(element));
  });

  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
  });

  galleryContainer.addEventListener("click", (event) => {
    event.preventDefault();
    lightbox.open();
  });
}

createGallery();
