import { galleryItems } from './gallery-items.js';
// Change code below this line
 
const galleryList = document.querySelector('.gallery');
const markup = galleryItems
.map((item) => `<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>`).join("");

galleryList.innerHTML = markup;

galleryList.addEventListener('click', event => {
  event.preventDefault();

  const target = event.target;
  if (target.nodeName !== 'IMG') return;
  // const largeImageURL = target.closest('.gallery__link').href;
  const largeImageURL = target.dataset.source;
  console.log(largeImageURL);
});


console.log (galleryList);







