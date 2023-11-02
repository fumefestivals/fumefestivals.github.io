
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

document.addEventListener("DOMContentLoaded", function () {
  const imageLinks = document.querySelectorAll(".image-gallery a");
  imageLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent the default behavior of the link
          const imgSrc = link.querySelector("img").getAttribute("data-src");
          const imgAlt = link.querySelector("img").getAttribute("alt");

          const xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function () {
              const a = document.createElement('a');
              a.href = window.URL.createObjectURL(xhr.response);
              a.download = imgAlt;
              a.style.display = 'none';
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(a.href);
              document.body.removeChild(a);
          };
          xhr.open('GET', imgSrc);
          xhr.send();
      });
  });
});