
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

const gallery = document.getElementById("gallery");
const imageLinks = gallery.querySelectorAll("a");

imageLinks.forEach(link => {
    link.addEventListener("click", () => {
        const imageUrl = link.getAttribute("data-src");
        const fileName = link.getAttribute("download");
        const a = document.createElement("a");
        a.href = imageUrl;
        a.download = fileName;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});