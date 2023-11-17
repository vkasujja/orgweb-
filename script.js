const lightboxImages = document.querySelectorAll('img[data-lightbox]');

lightboxImages.forEach(image => {
    image.addEventListener('click', () => {
        const lightboxOverlay = document.createElement('div');
        lightboxOverlay.classList.add('lightbox-overlay');

        const lightboxImageContainer = document.createElement('div');
        lightboxImageContainer.classList.add('lightbox-image-container');

        const lightboxImage = document.createElement('img');
        lightboxImage.src = image.src;

        lightboxImageContainer.appendChild(lightboxImage);
        lightboxOverlay.appendChild(lightboxImageContainer);

        document.body.appendChild(lightboxOverlay);

        lightboxOverlay.addEventListener('click', () => {
            document.body.removeChild(lightboxOverlay);
        });
    });
});
const navigationLinks = document.querySelectorAll('nav ul li a');

navigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetSection = document.getElementById(event.target.href.split('#')[1]);
        const targetPosition = targetSection.offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});