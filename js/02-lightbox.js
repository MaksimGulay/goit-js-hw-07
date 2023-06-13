import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryList = document.querySelector('.gallery');

const markup = galleryItems
.map((item) => `
<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
<img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>
</li>`).join("");
gallaryList.innerHTML = markup;

var lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: "alt",
});

gallaryList.addEventListener('click', event => {
    event.preventDefault();
    
    const target = event.target;
    if (target.nodeName !== 'IMG') return;
    const largeImageURL = target.dataset.source;
    console.log(largeImageURL);
});

console.log(galleryItems);
