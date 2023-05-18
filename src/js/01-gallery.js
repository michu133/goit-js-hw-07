import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function createGalleryItem(item) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const itemLink = document.createElement("a");
  itemLink.classList.add("gallery__link");
  itemLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.setAttribute("data-source", item.original);
  galleryImage.alt = item.description;

  itemLink.appendChild(galleryImage);
  galleryItem.appendChild(itemLink);

  return galleryItem;
}

function createGallery() {
  const galleryContainer = document.querySelector(".gallery");

  galleryItems.forEach((element) => {
    galleryContainer.appendChild(createGalleryItem(element));
  });

  galleryContainer.addEventListener("click", galleryItemClick);
}

function galleryItemClick(event) {
  event.preventDefault();

  if (event.target.classList.contains("gallery__image")) {
    const imageUrl = event.target.dataset.source;

    const instance = basicLightbox.create(
      `<img src ="${imageUrl}" alt = "${event.target.alt}">`
    );
    instance.show();

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        instance.close();
      }
    });
  }
}

createGallery();
