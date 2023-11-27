// Lazy load images
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

document.addEventListener("DOMContentLoaded", () => {
  const imageLinks = document.querySelectorAll(".image-gallery a");
  imageLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const img = link.querySelector("img");
      const imgSrc = img.getAttribute("data-full-src") || img.getAttribute("data-src");
      const imgAlt = img.getAttribute("alt");

      fetch(imgSrc)
        .then(response => response.blob())
        .then(blob => {
          const a = document.createElement('a');
          const url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = imgAlt;
          a.style.display = 'none';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          document.body.removeChild(a);
        });
    });
  });
});



// Select the container with the class "image-gallery" and ID "gallery"
const imageGallery = document.getElementById('gallery');

// Lazy load all images inside the container
lazyLoadImages(imageGallery);
