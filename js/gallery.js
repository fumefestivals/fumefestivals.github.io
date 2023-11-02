<script>
// Lazy load images using Intersection Observer
const gallery = document.getElementById("lazy-load-gallery");
const images = gallery.querySelectorAll("img[data-src]");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute("data-src");
            img.removeAttribute("data-src");
            observer.unobserve(img);
        }
    });
});

images.forEach(img => {
    observer.observe(img);
});
</script>