function displayImages() {
  const imageContainer = document.getElementById('imageContainer');
  const folderPath = '../galleries/costume-contest';

  fetch(folderPath)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/html');
      const images = Array.from(xmlDoc.querySelectorAll('a')).filter(a =>
        a.href.match(/\.(jpg|jpeg|png|gif)$/)
      );

      images.forEach(image => {
        const imageUrl = image.href;
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = imageUrl;
        imgElement.loading = 'lazy';

        const downloadLink = document.createElement('a');
        downloadLink.href = imageUrl;
        downloadLink.className = 'download-link';
        downloadLink.textContent = 'Download';
        downloadLink.download = ''; // This will trigger the download

        imgElement.addEventListener('mouseenter', () => {
          imgElement.style.transform = 'scale(1.05)';
          imgElement.style.filter = 'brightness(80%)';
          downloadLink.style.display = 'block';
        });

        imgElement.addEventListener('mouseleave', () => {
          imgElement.style.transform = 'scale(1)';
          imgElement.style.filter = 'brightness(100%)';
          downloadLink.style.display = 'none';
        });

        // Add a click event to initiate the download
        imgElement.addEventListener('click', () => {
          downloadLink.click();
        });

        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(downloadLink);
      });
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
}

displayImages();
