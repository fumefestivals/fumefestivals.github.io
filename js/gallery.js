document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.getElementById('gallery');
  const anchors = gallery.getElementsByTagName('a');

  for (const anchor of anchors) {
      anchor.addEventListener('mouseenter', function () {
          const image = new Image();
          image.src = anchor.getAttribute('data-src');
          image.alt = anchor.textContent;
          anchor.appendChild(image);
          anchor.style.display = 'block';
      });
  }
});
function lazyLoadImages(container) {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  const images = container.querySelectorAll('img[data-src]');
  images.forEach(img => {
    io.observe(img);
  });
}

// Select the container with the class "image-gallery" and ID "gallery"
const imageGallery = document.getElementById('gallery');

// Lazy load all images inside the container
lazyLoadImages(imageGallery);